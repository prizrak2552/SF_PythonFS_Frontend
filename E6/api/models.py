from django.contrib.auth.models import User
from django.db import models


class Contact(models.Model):
    user = models.ForeignKey(
        User, related_name='friends', on_delete=models.CASCADE)
    friends = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.user.username


class Room(models.Model):
    owner = models.ForeignKey(
        User, related_name='owner', on_delete=models.CASCADE, default=User)
    room_name = models.CharField(
        max_length=32, default='common')
    members = models.ManyToManyField(
        User, related_name='members', blank=False, default=owner)

    def __str__(self):
        return f"{self.room_name}_{self.pk}"

    class Meta:
        ordering = ('pk', 'owner',)


class Message(models.Model):
    sender = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='sender')
    # receiver = models.ForeignKey(
    #     User, on_delete=models.CASCADE, related_name='receiver')
    message = models.CharField(max_length=1200)
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    room = models.ForeignKey(Room, on_delete=models.CASCADE,
                             related_name='room'
                             )

    def __str__(self):
        return self.message

    class Meta:
        ordering = ('timestamp',)


class Chat(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE,
                             related_name='chatroom'
                             )
    members = models.ManyToManyField(
        User, related_name='chat_members', blank=True)
    messages = models.ManyToManyField(Message, blank=True)
    chat_name = models.CharField(
        max_length=64, default='private')

    def __str__(self):
        return f'{self.chat_name}'
