from django.urls import path
from whoami.frontend import views

app_name = 'frontend'

urlpatterns = [
    path('', views.index, name="index"),
]
