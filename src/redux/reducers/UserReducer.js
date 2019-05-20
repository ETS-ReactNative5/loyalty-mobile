/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
	isResetSuccess: false,
	isFetching: false,
	accessToken: null,
	user: {}
}

export default users = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.DO_LOGIN:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_LOGIN_SUCCESS:
			return {
				...state,
				accessToken: action.data.token,
				isFetching: false,
				user: action.data
			}
		case ACTION_TYPE.DO_LOGIN_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ACTION_TYPE.DO_LOGOUT: 
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_LOGOUT_SUCCESS:
			return {
				...state,
				isFetching: false,
				accessToken: null,
				user: {}
			}
		case ACTION_TYPE.DO_LOGOUT_FAILURE: 
			return {
				...state,
				isFetching: false
			}
		case ACTION_TYPE.UPDATE_STAFF:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.UPDATE_STAFF_SUCCESS:
			return {
				...state,
				isFetching: false,
				user: action.data
			}
		case ACTION_TYPE.UPDATE_STAFF_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ACTION_TYPE.CHANGE_PASSWORD:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.CHANGE_PASSWORD_SUCCESS:
		case ACTION_TYPE.CHANGE_PASSWORD_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ACTION_TYPE.FORGOT_PASSWORD:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				isFetching: false,
				isResetSuccess: true,
			}
		case ACTION_TYPE.FORGOT_PASSWORD_FAILURE:
			return {
				...state,
				isFetching: false,
				isResetSuccess: false,
			}
		default:
			return state
	}
}
