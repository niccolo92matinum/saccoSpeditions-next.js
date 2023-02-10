// import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/prefer-default-export
/* export const store = configureStore({
  reducer: {},
}) */
import { createWrapper } from 'next-redux-wrapper';
import { createStore} from 'redux';

import rootReducer from './reducers'

const devMode = process.env.NODE_ENV === `development`;


const makeStore = () => {
  const store = createStore(
    rootReducer,
  );

  return store;
};

export default createWrapper(makeStore, { debug: devMode });