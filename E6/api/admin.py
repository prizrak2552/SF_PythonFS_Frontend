from django.contrib import admin
from .models import Message, Room, Contact, Chat
# Register your models here.
admin.site.register(Message)
admin.site.register(Room)
admin.site.register(Contact)
admin.site.register(Chat)
