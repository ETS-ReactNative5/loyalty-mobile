/*
*
@author tri.tran on 1/29/19
*
*/
import {takeLatest} from 'redux-saga/effects';
import ActionTypes from '../actions/ActionTypes';
import loginSaga from './LoginSaga';

export default function* root() {

    yield takeLatest(ActionTypes.DO_LOGIN, loginSaga.doLogin);

    yield takeLatest(ActionTypes.DO_LOGOUT, loginSaga.doLogout);

    yield takeLatest(ActionTypes.SAVE_AUTO_LOGIN, loginSaga.doSaveAutoLogin);

    yield takeLatest(ActionTypes.GET_AUTO_LOGIN, loginSaga.doGetAutoLogin);


}
