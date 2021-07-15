import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import types from './types';
import api from '../../../services/api';
import alert from '../../../services/alert';

import {
  setOffers,
  updateSubscription,
  updateSubscriptionResponse,
  updateForm,
} from './actions';

export function* getOffers() {
  try {
    yield put(updateForm({ loading: true }));

    const { data: offers } = yield call(api.get, `/offer`);
    yield put(setOffers(offers));
    yield put(
      updateSubscription({
        offerId: offers[0]?.id,
      })
    );
  } catch (err) {
    yield call(alert, {
      title: 'Ops...',
      html: err.message,
      icon: 'error',
    });
  } finally {
    yield put(updateForm({ loading: false }));
  }
}

export function* saveSubscription() {
  try {
    yield put(updateForm({ saving: true }));
    const { subscription } = yield select((state) => state.checkout);
    const { data: res } = yield call(api.post, `/subscription`, subscription);
    yield put(updateSubscriptionResponse(res));
    yield put(push('/checkout'));
  } catch (err) {
    yield call(alert, {
      title: 'Ops...',
      html: err.message,
      icon: 'error',
    });
  } finally {
    yield put(updateForm({ saving: false }));
  }
}

export default all([
  takeLatest(types.GET_OFFERS, getOffers),
  takeLatest(types.SAVE_SUBSCRIPTION, saveSubscription),
]);
