from django.contrib import admin
from whoami.app import models

admin.site.register(models.Player)
admin.site.register(models.Game)
admin.site.register(models.Character)
admin.site.register(models.GamePlayer)
admin.site.register(models.GameAssignation)
admin.site.register(models.GameQuestion)
admin.site.register(models.GameAnswer)
