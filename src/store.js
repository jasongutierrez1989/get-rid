import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import sellersReducer from './reducers/sellers';

import sellerFormData from './reducers/sellerFormData';
const reducers = combineReducers({
  sellersReducer,
  sellerFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
