import { combineReducers } from 'redux'
import game from './game'
import auth from './auth'

const gameApp = combineReducers({
  game, auth
})

export default gameApp
