import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../routes/history';
import checkout from './checkout/recucer';

export default combineReducers({
  checkout,
  router: connectRouter(history),
});
