import { all } from 'redux-saga/effects';

import checkout from './checkout/sagas';

export default function* rootSaga() {
  return yield all([checkout]);
}
