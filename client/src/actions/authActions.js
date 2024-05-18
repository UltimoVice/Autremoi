// Modifica l'action creator per gestire il token ricevuto dal server
// Aggiorna l'action creator per la login in modo che invii le credenziali al server, riceva il token e lo memorizzi in Redux e nel localStorage.

// src/actions/authActions.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      
      if (response.ok) {
        const token = data.token;
        dispatch(loginSuccess(token));
        localStorage.setItem('token', token); // Salva il token nel localStorage
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
