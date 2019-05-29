import { all, fork } from 'redux-saga/effects';

import user from './userSaga';
import product from './productSaga';
import appData from './appDataSaga';
import specialOffer from './specialOfferSaga';
import search from './searchSaga';


/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user),
    fork(product),
    fork(appData),
    fork(specialOffer),
    fork(search),
  ]);
}
