from enum import Enum
from whoami.app.models import GameAssignation


class Answer(Enum):
    YES = "yes"
    NO = "no"


def guess(player, character, game) -> bool:
    try:
        GameAssignation.objects.get(
            player=player,
            character=character,
            game=game
        )
        return True
    except GameAssignation.DoesNotExist:
        return False


def ask_question():
    pass


def vote_answer():
    pass
