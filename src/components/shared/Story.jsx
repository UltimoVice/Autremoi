import React from "react";

export const Story = () => {
  return (
    <div className="flex w-full h-[800px]">
      <div className="w-1/2 h-full relative">
        <img className="w-full h-full" src="src\assets\story.jpg" alt="story" />
      </div>
      <div className="w-1/2 h-full relative bg-orange-300">
        <h2 className="font-bold flex justify-center items-center p-6 pt-48 text-2xl">AUTREMOI: STILE ELEGANTE ED INNOVATIVO</h2>
        <h3 className="font-semibold flex justify-center text-center items-center p-2 text-xl italic">NATO NEL 2024</h3>
        <p className="text-center p-4">
          La nostra installazione di moda esplora l'approccio distintivo di Autremoi nel reinventare i classici, trasformando gli elementi essenziali del guardaroba in opere d'arte moderne. Dalla nostra interpretazione dei capi di abbigliamento iconici alle ultime creazioni dei nostri designer, il nostro marchio è sinonimo di stile senza tempo e di innovazione senza compromessi.
        </p>
        <p className="text-center p-4">
          Scopri la nostra collezione Autremoi, dove il passato si fonde con il presente per creare l'essenza della moda contemporanea.
        </p>
        <a className="flex justify-center items-center text-center p-4 underline hover:text-orange-600 hover:underline hover:font-semibold" href="https://www.example.com">Scopri di più</a>
      </div>
    </div>
  );
};
