/*
*
@author tri.tran on 2/18/19
*
*/
import AsyncStorage from '@react-native-community/async-storage';
import { all, put, takeLatest } from 'redux-saga/effects'
import {ACTION_TYPE} from "../actions/type";

function* doLogin(action) {
  try {
    
    yield put({
      type: ACTION_TYPE.DO_LOGIN_SUCCESS,
      data
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
      data
    })
    
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_LOGOUT_FAILURE,
      e
    })
  }
}
export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_LOGIN, doLogin),
    takeLatest(ACTION_TYPE.DO_LOGOUT, doLogout)
  ]);
}
