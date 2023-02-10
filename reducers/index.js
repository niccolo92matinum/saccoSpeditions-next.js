import {combineReducers}from 'redux'
import dataReducer from './dataReducer'
import choiseReducer from './userChoiseReducer'
import partenzaSpedizioneReducer from './partenzaSpedizioneReducer'

export default combineReducers({
    dataReducer,
    choiseReducer,
     partenzaSpedizioneReducer

  });