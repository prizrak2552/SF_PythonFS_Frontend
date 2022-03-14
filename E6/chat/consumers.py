# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from api.models import Message, Room
from asgiref.sync import sync_to_async


class ChatConsumer(AsyncWebsocketConsumer):
    @sync_to_async
    def get_room(self, room):
        return Room.objects.get(room_name=room)

    @sync_to_async
    def get_room_owner(self, room):
        return Room.objects.get(room_name=room).owner

    @sync_to_async
    def get_room_members(self, room):
        room_members = {}
        members = Room.objects.get(room_name=room).members.all()
        for member in members:
            room_members.update({member.id: member.username})

        return room_members

    @database_sync_to_async
    def create_chat(self, sender, msg, room):
        new_msg = Message.objects.create(
            message=msg, sender_id=sender, room=room)
        new_msg.save()
        return new_msg

    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        sender = text_data_json['sender']
        await self.channel_layer.group_send(self.room_group_name, {
            'type': 'chat_message',
            'message': message,
            'sender': sender
        })

    async def chat_message(self, event):
        print(f'event: {event}')
        message = event['message']
        sender = event['sender']
        room_name = self.scope['url_route']['kwargs']['room_name']
        print(f'chat_message,room_name: {room_name}')
        room = await self.get_room(room_name)
        room_owner = await self.get_room_owner(room_name)
        room_members = await self.get_room_members(room_name)
        new_msg = await self.create_chat(sender, message, room)
        print(f'new_msg: {new_msg}')

        # It is necessary to await creation of messages
        await self.send(text_data=json.dumps({
            'message': new_msg.message,
            'time': new_msg.timestamp.strftime("%B %d, %Y, %I:%M %p"),
            'sender_id': sender,
            'room_name': room_name,
            'room_id': room.id,
            'room_owner_id': room_owner.id,
            'room_members': room_members,
        }))

