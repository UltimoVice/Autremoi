// Aggiorna il reducer per gestire lo stato dell'autenticazione
// Assicurati che il reducer aggiorni lo stato dell'autenticazione in base alle azioni ricevute.

// src/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
};

const authReducer = (state = initialState, action) => {
  console.log('authReducer state:', state);
  console.log('authReducer action:', action);
  
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;

