from django.urls import path
from whoami.customauth import views


urlpatterns = [
    path('register/', views.RegistrationAPI.as_view()),
    path('login/', views.LoginAPI.as_view()),
    path('user/', views.UserAPI.as_view()),
]
