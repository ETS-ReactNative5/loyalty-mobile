/*
*
@author tri.tran on 1/29/19
*
*/
import {combineReducers} from 'redux'
import ActionTypes from '../actions/ActionTypes'
import apps from './AppReducer'
import users from './UserReducer'

//combine all reducer
const appReducer = combineReducers({
    apps,
    users,
})

export default rootReducer = (state, action) => {
  if (action.type === ActionTypes.DO_LOGOUT_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
