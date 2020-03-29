from django.urls import path, include
from rest_framework.routers import DefaultRouter
from whoami.app import views


# pylint: disable=C0103
router = DefaultRouter()
router.register('player', views.PlayerViewSet)
router.register('game', views.GameViewSet)
router.register('character', views.CharacterViewSet)
router.register('gameplayer', views.GamePlayerViewSet)
router.register('gameassignation', views.GameAssignationViewSet)
router.register('gamequestion', views.GameQuestionViewSet)
router.register('gameanswer', views.GameAnswerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
