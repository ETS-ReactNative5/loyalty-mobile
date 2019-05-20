/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import ActionTypes from "../actions/ActionTypes";

const initState = {
	isResetSuccess: false,
	isFetching: false,
	accessToken: null,
	user: {}
}

export default users = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ActionTypes.DO_LOGIN:
			return {
				...state,
				isFetching: true
			}
		case ActionTypes.DO_LOGIN_SUCCESS:
			return {
				...state,
				accessToken: action.data.token,
				isFetching: false,
				user: action.data
			}
		case ActionTypes.DO_LOGIN_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ActionTypes.DO_LOGOUT: 
			return {
				...state,
				isFetching: true
			}
		case ActionTypes.DO_LOGOUT_SUCCESS:
			return {
				...state,
				isFetching: false,
				accessToken: null,
				user: {}
			}
		case ActionTypes.DO_LOGOUT_FAILURE: 
			return {
				...state,
				isFetching: false
			}
		case ActionTypes.UPDATE_STAFF:
			return {
				...state,
				isFetching: true
			}
		case ActionTypes.UPDATE_STAFF_SUCCESS:
			return {
				...state,
				isFetching: false,
				user: action.data
			}
		case ActionTypes.UPDATE_STAFF_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ActionTypes.CHANGE_PASSWORD:
			return {
				...state,
				isFetching: true
			}
		case ActionTypes.CHANGE_PASSWORD_SUCCESS:
		case ActionTypes.CHANGE_PASSWORD_FAILURE:
			return {
				...state,
				isFetching: false
			}
		case ActionTypes.FORGOT_PASSWORD:
			return {
				...state,
				isFetching: true
			}
		case ActionTypes.FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				isFetching: false,
				isResetSuccess: true,
			}
		case ActionTypes.FORGOT_PASSWORD_FAILURE:
			return {
				...state,
				isFetching: false,
				isResetSuccess: false,
			}
		default:
			return state
	}
}
