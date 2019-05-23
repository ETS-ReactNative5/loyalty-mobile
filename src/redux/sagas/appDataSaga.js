/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import { isEmpty } from '../../commons/Utils';

function* getAppData(action) {
  try {
    console.log('Calling app Saga here!');
   const result = yield call(services.appData.getData, action.token)
   console.log('App Data:', result)
   if(isEmpty(result)) {
     console.log('Resutl calling:', result)
     return;
   }
   if(result.error < 0) {
     yield put({ type: ACTION_TYPE.DO_APP_DATA_FAILURE, e: result.message })
   }
   yield put({type: ACTION_TYPE.DO_APP_DATA_SUCCESS, data: result.data})
   
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_APP_DATA_FAILURE,
      e
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_APP_DATA, getAppData)
  ]);
}
