from django.urls import re_path
from whoami.frontend import views

app_name = 'frontend'

urlpatterns = [
    re_path('^.*', views.index, name="index"),
]
