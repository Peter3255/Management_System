import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

// create new store
// const store = configureStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
}); 

export default store;