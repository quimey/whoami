from rest_framework import serializers
from whoami.app import models


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Player


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Game


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Character


class GamePlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GamePlayer


class GameAssignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GameAssignation


class GameQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GameQuestion


class GameAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GameAnswer
