import '../styles/globals.css'

import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers/index";
import { createStore } from "redux";

const store = createStore(reducer);
console.log(store,'store')

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  
  )
}

export default MyApp
