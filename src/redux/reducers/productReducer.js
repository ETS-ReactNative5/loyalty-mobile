/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  isFetching: false,
  categories: [],
  products: []
}

export default products = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.GET_PRODUCT_CATEGORIES:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.GET_PRODUCT_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.data,
				isFetching: false
			}
		case ACTION_TYPE.GET_PRODUCT_CATEGORIES_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
