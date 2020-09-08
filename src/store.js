import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import sellersReducer from './reducers/sellers';

const middleware = [thunk];

export default createStore(
  sellersReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
