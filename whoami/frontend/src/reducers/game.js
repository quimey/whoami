const initialState = [
  { text: 'Create a new game' }
]

export default function game (state = initialState, action) {
  switch (action.type) {
    case 'NO_GAME':
    case 'STARTING_GAME':
    case 'GAME_STARTED':
    case 'GAME_FINISHED':
    default:
      return state
  }
}
