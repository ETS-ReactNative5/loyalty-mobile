/*
*
@author tri.tran on 1/29/19
*
*/

import {AppNavigator} from "../../RootApp/component";
import {appScreenName, homeTabName} from "../../commons/Constants";
import {combineReducers} from 'redux'
import {ACTION_TYPE} from "../actions/type";
import { HomeTabNavigation } from "../../components/screens/HomeScreen/component";

//default state
const initState = {
    internetConnection: true,
    isFetching: false
}

const initialAppScreenState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(appScreenName.login));
const initialHomeTabState = HomeTabNavigation.router.getStateForAction(
    HomeTabNavigation.router.getActionForPathAndParams(homeTabName.product));

const appCommons = (state = initState, action = {}) => {
    switch (action.type) {
        //handle actions
        case ACTION_TYPE.ON_INTERNET_CONNECTION_CHANGE:
            return {
                ...state,
                internetConnection: action.status
            }
        default:
            return state
    }
}

const appScreens = (state = initialAppScreenState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const homeTabs = (state = initialHomeTabState, action) => {
    const nextState = HomeTabNavigation.router.getStateForAction(action, state);
    return nextState || state;
};

export default combineReducers({
    appCommons,
    appScreens,
    homeTabs
})