import React from "react";
import { Link } from "react-router-dom";

export const Story = () => {
  return (
    <div className="flex w-full max-h-[1427px] py-6 overflow-hidden">
      <div className="w-1/2 h-full relative">
        <img className="w-full h-full" src="src\assets\story.jpg" alt="story" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-[1427px] relative bg-orange-300">
        <h2 className="font-bold flex justify-center items-center p-6 pt-48 text-2xl">
          AUTREMOI: STILE ELEGANTE ED INNOVATIVO
        </h2>
        <h3 className="font-semibold flex justify-center text-center items-center p-2 text-xl italic">
          NATO NEL 2024
        </h3>
        <p className="text-center p-4">
          La nostra esclusiva vetrina della moda celebra l'approccio unico di
          Autremoi nel reinventare i classici, trasformando gli elementi
          fondamentali del guardaroba in autentiche opere d'arte contemporanee.
          Dalla reinterpretazione dei capisaldi dell'abbigliamento iconico alla
          presentazione delle ultime creazioni firmate dai nostri talentuosi
          designer, il nostro marchio è la personificazione dello stile senza
          tempo e dell'innovazione senza compromessi.{" "}
        </p>
        <p className="text-center p-4">
          Immersi in un mondo dove l'eleganza si fonde con la creatività, ogni
          capo di abbigliamento diventa un'espressione raffinata di
          individualità e gusto. La nostra missione è trasformare ogni indumento
          in una dichiarazione di stile, unendo sapientemente l'eccellenza
          artigianale alla visione moderna. Ogni pezzo è concepito con cura
          meticolosa, utilizzando solo i materiali più pregiati e adottando
          tecniche di produzione all'avanguardia per garantire una qualità
          impareggiabile.
        </p>
        <p className="text-center p-4">
          Il DNA del nostro marchio risiede nell'audacia di sfidare le
          convenzioni e nell'abilità di ridefinire i confini della moda. I
          nostri designer si ispirano alla ricchezza del passato per creare il
          futuro dello stile, mescolando tradizione e innovazione con maestria.
          Ogni collezione riflette un'attenta ricerca e un'ispirazione senza
          limiti, portando alla luce capi che incarnano l'essenza
          dell'originalità e dell'eleganza senza tempo.{" "}
        </p>
        <p className="text-center p-4">
          Ci impegniamo a offrire ai nostri clienti un'esperienza di shopping
          straordinaria, avvolgendoli in un mondo di lusso e raffinatezza. Ogni
          dettaglio, dal design degli spazi espositivi all'assistenza
          personalizzata, è pensato per soddisfare le esigenze dei nostri
          clienti più esigenti. La nostra boutique diventa così uno scrigno di
          tesori dove la bellezza e lo stile si fondono armoniosamente per
          creare un'esperienza indimenticabile.{" "}
        </p>
        <p className="text-center p-4">
          Con il nostro impegno per l'eccellenza e la passione per
          l'innovazione, continuiamo a definire nuove tendenze e a ispirare il
          mondo della moda. Ogni stagione, anticipiamo le aspettative,
          presentando collezioni che catturano l'immaginazione e lasciano
          un'impronta duratura nel panorama della moda internazionale. Siamo una
          fonte inesauribile di ispirazione per coloro che cercano un'eleganza
          senza tempo unita a una visione audace del futuro.{" "}
        </p>
        <p className="text-center p-4">
          In un mondo in costante evoluzione, Autremoi rimane un faro di stile e
          sofisticazione, guidando il cammino verso nuove frontiere della moda.
          Con un'attenzione costante alla qualità e alla creatività, continuiamo
          a sollevare gli standard dell'industria, dimostrando che l'innovazione
          e l'eleganza possono coesistere armoniosamente. Ogni indumento porta
          con sé la nostra eredità di eccellenza, raccontando una storia di
          raffinatezza senza tempo e di visione avveniristica.{" "}
        </p>
        <p className="text-center p-4">
          Scopri la nostra collezione Autremoi, dove il passato si fonde con il
          presente per creare l'essenza della moda contemporanea.
        </p>
        <Link to="/story">
          <a
            className="text-center text-xl p-4 underline hover:text-orange-600 hover:underline hover:font-semibold max-w-40"
            href="https://www.example.com"
          >
            Scopri di più
          </a>
        </Link>
      </div>
    </div>
  );
};
