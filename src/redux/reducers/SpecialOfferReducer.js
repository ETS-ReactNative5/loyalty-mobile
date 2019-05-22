/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
	isFetching: false,
	result: []
}

export default specials = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.DO_SPECIALOFFER:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_SPECIALOFFER_SUCCESS:
			return {
				...state,
                isFetching: false,
                result: action.data
			}
		case ACTION_TYPE.DO_SPECIALOFFER_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
