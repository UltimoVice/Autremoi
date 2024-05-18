// Configura il middleware per inviare il token nelle richieste successive
// Configura un middleware per aggiungere automaticamente il token JWT alle intestazioni delle richieste HTTP.

// src/middleware/authMiddleware.js
const authMiddleware = (store) => (next) => (action) => {
    if (action.type === LOGIN_SUCCESS) {
      const token = action.payload;
      fetch.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    if (action.type === LOGOUT) {
      delete fetch.defaults.headers.common['Authorization'];
    }
    return next(action);
  };
  
  export default authMiddleware;
  