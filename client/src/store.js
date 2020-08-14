import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
    // window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;