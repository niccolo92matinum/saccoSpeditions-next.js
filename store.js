// import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/prefer-default-export
/* export const store = configureStore({
  reducer: {},
}) */
import { createWrapper } from 'next-redux-wrapper';

import {applyMiddleware, createStore, compose } from "redux";
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import configurePersist from './configurePersist'

import rootReducer from './reducers'

const devMode = process.env.NODE_ENV === `development`;
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (process.browser &&
    typeof window !== 'undefined' &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;

const { load, save } = configurePersist({ doNotSave: ['status'] });



const middlewares = [sagaMiddleware, save];

if (devMode) {
  middlewares.push(logger);
}


const makeStore = () => {
  const store = createStore(
    rootReducer,
    load(rootReducer({}, '')),
    composeEnhancers(applyMiddleware(...middlewares))
  );


  return store;
};




export default createWrapper(makeStore, { debug: devMode });