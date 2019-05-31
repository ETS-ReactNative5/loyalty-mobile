/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';
import { getStore } from '../../../App';
import { actions } from '../actions';

function* getVouchers() {
  try {
    const result = yield call(services.reward.getVouchers)
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_VOUCHERS_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_VOUCHERS_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_VOUCHERS_FAILURE,
      e
    })
  }

}

function* updateVoucherAvailables(action) {
  try {
    const {voucherId, availables} = action;
    const result = yield call(services.reward.updateVoucherAvailables, voucherId, availables);
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS_FAILURE,
        e: result.message
      })
    }
    getStore().dispatch(actions.doGetVouchers());
    yield put({
      type: ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS_FAILURE,
      e
    })
  }
}

function* getHistoryVouchers() {
  try {
    const result = yield call(services.reward.getHistoryVouchers);
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_HISTORY_VOUCHERS_FAILURE,
        e: result.message
      })
    }
    getStore().dispatch(actions.doGetVouchers());
    yield put({
      type: ACTION_TYPE.GET_HISTORY_VOUCHERS_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_HISTORY_VOUCHERS_FAILURE,
      e
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.GET_VOUCHERS, getVouchers),
    takeLatest(ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS, updateVoucherAvailables),
    takeLatest(ACTION_TYPE.GET_HISTORY_VOUCHERS, getHistoryVouchers),
  ]);
}
