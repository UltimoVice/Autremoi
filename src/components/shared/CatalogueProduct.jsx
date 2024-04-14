import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CatalogueProduct = ({ src, productName, price }) => {
  const [opacity, setOpacity] = useState(false)
  
  
  const toggleOpacity = () => {
    setOpacity(!opacity)
  }
  
    return (
    <div className="relative text-center overflow-hidden p-2">
      <div className="mb-5 overflow-hidden relative">
        <Link to="/">
          <div className="h-[528px] overflow-hidden relative w-[457px] cursor-pointer bg-black" onMouseOver={toggleOpacity} onMouseOut={toggleOpacity} >
            <img
              className="w-full h-full border-none block left-0 object-cover absolute top-0 hover:scale-125 transition-transform duration-300"
              src={src}
              alt=""
            />
            <button className={`bg-[rgba(0,0,0,0.6)] h-10 border-none bottom-0 text-white font-medium left-0 ${opacity ? 'opacity-100' : 'opacity-0'}  w-full absolute text-sm px-12`}>
              Vai al prodotto
            </button>
          </div>
        </Link>
      </div>
      <div className="font-normal text-sm leading-6 mb-2 px-5">
        {productName}
      </div>
      <div className="font-normal text-sm leading-6 mb-2">
        <div className="flex justify-center items-baseline flex-wrap relative">
          <div className="m-0 inline-block">{price}</div>
        </div>
      </div>
    </div>
  );
};
