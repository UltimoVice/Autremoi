// Configura lo store per includere il middleware
// Aggiungi il middleware allo store Redux.

// src/store.js
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import authMiddleware from './middleware/authMiddleware';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk, authMiddleware));

export default store;
