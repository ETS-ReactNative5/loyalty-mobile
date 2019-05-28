/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';
function* getProductCategories() {
  try {
    const result = yield call(services.product.getCategories)
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.GET_PRODUCT_CATEGORIES, getProductCategories),
  ]);
}
