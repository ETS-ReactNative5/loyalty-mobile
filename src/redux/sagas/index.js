import { all, fork } from 'redux-saga/effects';

import user from './userSaga';
import specialOffer from './SpecialOfferSaga';
/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user),
    fork(specialOffer)
    /*fork(example),*/
  ]);
}
