import React from "react";

const defaultText = "mt-2"

const TermP = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2">
        <h1 className={defaultText + "text-4"}>Termini di Servizio - Autremoi</h1>

        <h2 className={defaultText }>1. Accettazione dei Termini di Servizio</h2>
        <p className={defaultText}>
          Accedendo al sito web Autremoi e utilizzando i suoi servizi, accetti
          di essere vincolato dai seguenti Termini di Servizio. Se non accetti
          tutti i termini e le condizioni di questo accordo, non utilizzare il
          nostro sito o i nostri servizi.
        </p>

        <h2 className={defaultText}>2. Utilizzo dei Servizi</h2>
        <p className={defaultText}>
          Per utilizzare i servizi offerti da Autremoi, è possibile che ti venga
          richiesto di registrarti per un account. Devi fornire informazioni
          accurate e complete durante la registrazione e aggiornare tali
          informazioni per mantenerle accurate e complete.
        </p>

        <h2 className={defaultText}>3. Proprietà Intellettuale</h2>
        <p className={defaultText}>
          Tutti i contenuti presenti su Autremoi, come testi, grafica, loghi,
          icone di pulsanti, immagini, clip audio, download digitali e dati,
          sono di proprietà esclusiva di Autremoi e sono protetti dalle leggi
          sul copyright.
        </p>

        <h2 className={defaultText}>4. Limitazione di Responsabilità</h2>
        <p className={defaultText}>
          AUTREMOI NON SARÀ RESPONSABILE PER QUALSIASI DANNI DIRETTI, INDIRETTI,
          INCIDENTALI, SPECIALI O CONSEQUENZIALI DERIVANTI DALL'USO O
          DALL'IMPOSSIBILITÀ DI UTILIZZARE I NOSTRI SERVIZI.
        </p>

        <h2 className={defaultText}>5. Modifiche ai Termini di Servizio</h2>
        <p className={defaultText}>
          Autremoi si riserva il diritto di modificare o sostituire i Termini di
          Servizio in qualsiasi momento. È responsabilità dell'utente
          controllare periodicamente i Termini di Servizio per eventuali
          cambiamenti. L'uso continuato dei servizi dopo la pubblicazione di
          eventuali modifiche costituirà l'accettazione di tali modifiche.
        </p>

        <h2 className={defaultText}>6. Contatti</h2>
        <p className={defaultText}>Per domande riguardanti questi Termini di Servizio, contattaci:</p>
        <p className={defaultText}>Email: info@autremoi.com</p>
      </div>
    </div>
  );
};

export default TermP;
