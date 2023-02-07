/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import reducer from "./reducers/index";

const store = createStore(reducer);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      
      <Component {...pageProps} />
    </Provider>
  
  )
}

export default MyApp
