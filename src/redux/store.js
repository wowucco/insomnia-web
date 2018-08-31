import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './reducers';

const loggerMiddleware = createLogger();

export const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
};