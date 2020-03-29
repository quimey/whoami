from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=40)


class Game(models.Model):
    name = models.CharField(max_length=40)
    secret = models.CharField(max_length=40)


class Character(models.Model):
    name = models.CharField(max_length=40)
    creator = models.ForeignKey(
        Player, related_name='own_characters', on_delete=models.CASCADE
    )
    description = models.TextField()


class GamePlayers(models.Model):
    game = models.ForeignKey(
        Game, related_name='players', on_delete=models.CASCADE
    )
    player = models.ForeignKey(
        Player, related_name='games', on_delete=models.CASCADE
    )


class GameAssignations(models.Model):
    game = models.ForeignKey(
        Game, related_name='characters', on_delete=models.CASCADE
    )
    player = models.ForeignKey(
        Player, related_name='characters', on_delete=models.CASCADE
    )
    character = models.ForeignKey(
        Character, related_name='characters', on_delete=models.CASCADE
    )
