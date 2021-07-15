import types from './types';

export function updateForm(payload) {
  return { type: types.UPDATE_FORM, payload };
}

export function updateSubscription(payload) {
  return { type: types.UPDATE_SUBSCRIPTION, payload };
}

export function updateSubscriptionResponse(payload) {
  return { type: types.UPDATE_SUBSCRIPTION_RESPONSE, payload };
}

export function saveSubscription() {
  return { type: types.SAVE_SUBSCRIPTION };
}

export function getOffers() {
  return { type: types.GET_OFFERS };
}

export function setOffers(offers) {
  return { type: types.SET_OFFERS, offers };
}
