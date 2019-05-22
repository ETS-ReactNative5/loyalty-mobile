/*
*
@author tri.tran on 2/18/19
*
*/
import AsyncStorage from '@react-native-community/async-storage';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {NavigationActions} from 'react-navigation';
import {ACTION_TYPE} from "../actions/type";
import { isEmpty } from '../../commons/Utils';
import services from '../../services';
import _ from 'lodash';
import { getStore } from '../../../App';
import { actions } from '../actions';
import { appScreenName, homeTabName } from '../../commons/Constants';

function* doLogin(action) {
  try {
    const result = yield call(services.login.doLogin, action.email, action.pass)
    if(isEmpty(result) || !_.has(result, 'token') || isEmpty(result.token)) {
      yield put({
        type: ACTION_TYPE.DO_LOGIN_FAILURE,
        e: 'Login error'
      })
    }
    if(result.error === 0) {
      getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
      getStore().dispatch(NavigationActions.navigate({routeName: homeTabName.product}))
    } else if (result.error === 1) {
      getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.aboutme}))
    }
    getStore().dispatch(actions.getProfile(result.data))
    yield put({
      type: ACTION_TYPE.DO_LOGIN_SUCCESS,
      data: result.data
    })
    
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_LOGIN_FAILURE,
      e
    })
    
  }
}

function* doLogout() {
  try {
    AsyncStorage.clear();
    yield put({
      type: ACTION_TYPE.DO_LOGOUT_SUCCESS,
    })
    
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_LOGOUT_FAILURE,
      e
    })
  }
}

function* doAutoLogin(action) {
  if(isEmpty(action.token)) {
    getStore().dispatch(actions.doLogout());
    return;
  }
  getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
  getStore().dispatch(NavigationActions.navigate({routeName: homeTabName.product}))
  getStore().dispatch(actions.getProfile(action.token))
}

function* getProfile(action) {
  try {
    const result = yield call(services.login.getProfile, action.token)
    if(result.error < 0) {
      getStore().dispatch(actions.doLogout());
      return;
    } 
    yield put({
      type: ACTION_TYPE.GET_PROFILE_SUCCESS,
      data: result.data
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_PROFILE_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_LOGIN, doLogin),
    takeLatest(ACTION_TYPE.DO_LOGOUT, doLogout),
    takeLatest(ACTION_TYPE.DO_AUTO_LOGIN, doAutoLogin),
    takeLatest(ACTION_TYPE.GET_PROFILE, getProfile),
  ]);
}
