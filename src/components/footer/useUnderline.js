import { useState } from 'react';

// Definizione del custom hook
function useUnderlineState(initialState = false) {
  const [showUnderline, setShowUnderline] = useState(initialState);

  const handleOverUnderline = () => {
    setShowUnderline(true);
  };

  const handleOutUnderline = () => {
    setShowUnderline(false);
  };

  // Ritorna lo stato e le funzioni di gestione
  return [showUnderline, handleOverUnderline, handleOutUnderline];
}


export default useUnderline