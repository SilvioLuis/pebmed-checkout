import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  form: {
    loading: true,
    filtering: false,
    disabled: false,
    saving: false,
  },
  offers: [],
  subscription: {
    couponCode: '',
    creditCardCPF: '',
    creditCardCVV: '',
    creditCardExpirationDate: '',
    creditCardHolder: '',
    creditCardNumber: '',
    gateway: 'iugu',
    installments: 0,
    offerId: 0,
    userId: 1,
  },
  subscriptionResponse: {},
};

function servico(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_FORM: {
      return produce(state, (draft) => {
        draft.form = { ...state.form, ...action.payload };
      });
    }
    case types.UPDATE_SUBSCRIPTION: {
      return produce(state, (draft) => {
        draft.subscription = { ...state.subscription, ...action.payload };
      });
    }
    case types.UPDATE_SUBSCRIPTION_RESPONSE: {
      return produce(state, (draft) => {
        draft.subscriptionResponse = {
          ...state.subscriptionResponse,
          ...action.payload,
        };
      });
    }
    case types.SET_OFFERS: {
      return produce(state, (draft) => {
        draft.offers = action.offers;
      });
    }
    default:
      return state;
  }
}

export default servico;
