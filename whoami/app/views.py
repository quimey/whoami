from rest_framework import viewsets
from whoami.app import models, serializers


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = models.Player.objects.all()
    serializer_class = serializers.PlayerSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = models.Game.objects.all()
    serializer_class = serializers.GameSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = models.Character.objects.all()
    serializer_class = serializers.CharacterSerializer


class GamePlayerViewSet(viewsets.ModelViewSet):
    queryset = models.GamePlayer.objects.all()
    serializer_class = serializers.GamePlayerSerializer


class GameAssignationViewSet(viewsets.ModelViewSet):
    queryset = models.GameAssignation.objects.all()
    serializer_class = serializers.GameAssignationSerializer


class GameQuestionViewSet(viewsets.ModelViewSet):
    queryset = models.GameQuestion.objects.all()
    serializer_class = serializers.GameQuestionSerializer


class GameAnswerViewSet(viewsets.ModelViewSet):
    queryset = models.GameAnswer.objects.all()
    serializer_class = serializers.GameAnswerSerializer
