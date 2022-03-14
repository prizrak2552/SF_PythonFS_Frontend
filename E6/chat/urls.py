from django.contrib.auth import logout
from django.urls import path
from . import views
# from .views import profile
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView


urlpatterns = [
    path('', views.index, name='index'),
    path('chat', views.chat_view, name='chats'),
    path('chat/<int:sender>/<int:receiver>', views.message_view, name='chat'),
    path('api/messages/<int:sender>/<int:receiver>',
         views.message_list, name='message-detail'),
    path('api/messages', views.message_list, name='message-list'),
    path('logout', views.logoutUser, name='logout'),
    # path('logout/', logout, {'next_page': 'index'}, name='logout'),
    path('register', views.register_view, name='register'),
    path('profile', views.profile, name='profile'),

    path('api/schema',  get_schema_view(title='API Schema',
         description='API for messages'), name='api_schema'),
    path('api', views.MessageListCreate.as_view()),
    path('api/docs', TemplateView.as_view(
        template_name='api/docs.html',
        extra_context={'schema_url': 'api_schema'}
    ), name='swagger-ui'),
]
