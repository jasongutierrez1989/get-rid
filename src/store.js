import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import sellers from './reducers/sellers';
import posts from './reducers/post';
import sellerFormData from './reducers/sellerFormData';

const reducers = combineReducers({
  sellers,
  sellerFormData,
  posts
});

const middleware = [thunk];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
