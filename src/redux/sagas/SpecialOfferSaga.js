/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import { isEmpty } from '../../commons/Utils';
import services from '../../services';
import _ from 'lodash';
import { getStore } from '../../../App';
import { actions } from '../actions';


function* getSpecialOffer() {
  try {
    const result = yield call(services.specialOffer.special)
    if(result.error === 0) {
      getStore().dispatch(actions.getSpecialOffer(result));
    } 
    yield put({
      type: ACTION_TYPE.DO_SPECIALOFFER_SUCCESS,
      data: result.data
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.DO_SPECIALOFFER_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_SPECIALOFFER, getSpecialOffer),
    
  ]);
}
