/*
*
@author tri.tran on 1/29/19
*
*/
import {combineReducers} from 'redux'
import {ACTION_TYPE} from '../actions/type'
import apps from './AppReducer'
import users from './UserReducer'
import products from './productReducer';
import specialOffers from './specialOfferReducer';
import search from './searchReducer';

//combine all reducer
const appReducer = combineReducers({
    apps,
    users,
    products,
    specialOffers,
    search,
})

export default rootReducer = (state, action) => {
  if (action.type === ACTION_TYPE.DO_LOGOUT_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}
