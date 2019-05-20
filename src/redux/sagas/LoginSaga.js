/*
*
@author tri.tran on 2/18/19
*
*/
import AsyncStorage from '@react-native-community/async-storage';
import {call, put} from 'redux-saga/effects'
import ActionTypes from "../actions/ActionTypes";
import {getStore} from "../../../App";
import {actions} from "../actions/Actions";
import {NavigationActions} from 'react-navigation'
import {appScreenName} from "../../Constants";
import services from '../../services';
import {showMessage} from '../../Utils';
import {getFcmToken} from "../../Loyalty/component";
import _ from 'lodash';

function* doLogin(action) {
  const NOT_STAFF = 'Account User is not a staff'
  try {
    const data = yield call(services.login.doLogin, action.email, action.pass)
    if(data.userType !== 2) {
      yield put({
        type: ActionTypes.DO_LOGIN_FAILURE,
        e: NOT_STAFF
      })
      showMessage(NOT_STAFF)
      return
    }
    yield put({
      type: ActionTypes.DO_LOGIN_SUCCESS,
      data
    })
    if (action.isRemember) {
      yield* getStore().dispatch(actions.saveAutoLogin(action.email, action.pass));
    }
    yield* getStore().dispatch(actions.updateDeviceToken(getFcmToken()));
    yield* getStore().dispatch(actions.getNotifications(1, 10));
    yield* getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
  } catch (e) {
    yield put({
      type: ActionTypes.DO_LOGIN_FAILURE,
      e
    })
    showMessage(_.get(e, 'message', ''))
    AsyncStorage.clear();
    const screenState = getStore().getState().apps.appScreens
    var screenRouteName = screenState.routes[screenState.index].routeName
    if(screenRouteName === appScreenName.splash) {
      getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))
    }
  }
}

function* doLogout() {
  try {
    yield* getStore().dispatch(actions.updateDeviceToken(""));
    const data = yield call(services.login.doLogout)
    AsyncStorage.clear();
    yield put({
      type: ActionTypes.DO_LOGOUT_SUCCESS,
      data
    })
    // yield call(delay, 1000)
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))
  } catch (e) {
    showMessage(_.get(e, 'message', ''))
    yield put({
      type: ActionTypes.DO_LOGOUT_FAILURE,
      e
    })
  }
}

function* doSaveAutoLogin(action) {
  try {
    const data = yield call(services.login.doSaveAutoLogin, action.email, action.pass)
    yield put({
      type: ActionTypes.SAVE_AUTO_LOGIN_SUCCESS,
      data
    })
  } catch (e) {
    showMessage(_.get(e, 'message', ''))
    yield put({
      type: ActionTypes.SAVE_AUTO_LOGIN_FAILURE,
      e
    })
  }
}

function* doGetAutoLogin() {
  try {
    const data = yield call(services.login.doGetAutoLogin)
    yield put({
      type: ActionTypes.GET_AUTO_LOGIN_SUCCESS,
      data
    })
    let email = data.email, pass = data.pass
    if (typeof email !== 'undefined' && email !== null && email !== ''
      && typeof pass !== 'undefined' && pass !== null && pass !== '') {
      getStore().dispatch(actions.doLogin(email, pass, false))
    } else {
      getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))
    }
  } catch (e) {
    showMessage(_.get(e, 'message', ''))
    yield put({
      type: ActionTypes.GET_AUTO_LOGIN_FAILURE,
      e
    })
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))
  }
}

export default loginSaga = {
  doLogin,
  doLogout,
  doSaveAutoLogin,
  doGetAutoLogin
}
