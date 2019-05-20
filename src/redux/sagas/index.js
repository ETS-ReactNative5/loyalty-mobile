import { all, fork } from 'redux-saga/effects';

import user from './userSaga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user)
    /*fork(example),*/
  ]);
}
