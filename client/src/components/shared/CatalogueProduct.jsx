import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";

export const CatalogueProduct = ({ id }) => {
  const [opacity, setOpacity] = useState(false)

  const product = products.find(p => p.id === id);
   
  const toggleOpacity = () => {
    setOpacity(!opacity)
  }
  
    return (
    <div className="relative text-center overflow-hidden p-2 max-w-[25%] min-w-[457px]">
      <div className="mb-5 overflow-hidden relative">
        <Link to={`/products/${id}`}>
          <div className="h-[528px] overflow-hidden relative w-[457px] cursor-pointer bg-black" onMouseOver={toggleOpacity} onMouseOut={toggleOpacity} >
            <img
              className="w-full h-full border-none block left-0 object-cover absolute top-0 hover:scale-125 transition-transform duration-300"
              src={`/${product.images}`}
              alt={product.title}
            />
              <button 
                    className={`bg-transparent h-10 w-10 border-none bottom-0 text-white font-medium left-0 ${opacity ? 'opacity-100' : 'opacity-0'}   absolute top-0 right-0 text-sm `}
                  >
                    <span 
                    className=""
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        focusable="false"
                        className=""
                      >
                        <path
                          d="M12.0095 6.35147C11.156 4.94059 9.61012 4.01001 7.86512 4.01001C5.19073 4.01001 3 6.19137 3 8.90306C3 10.2239 3.5216 11.4146 4.35616 12.2952L11.5732 19.5797L11.9905 20L12.4078 19.5797L19.5016 12.4253C20.4215 11.5347 21 10.2839 21 8.89306C21 6.17136 18.8093 4 16.1349 4C14.3804 4 12.844 4.94059 11.9905 6.34146L12.0095 6.35147Z"  
                          className=""
                        ></path>
                      </svg>
                    </span>
                  </button>
            <button className={`bg-[rgba(0,0,0,0.6)] h-10 border-none bottom-0 text-white font-medium left-0 ${opacity ? 'opacity-100' : 'opacity-0'}  w-full absolute text-sm px-12`}>
              Vai al prodotto
            </button>
          </div>
        </Link>
      </div>
      <div className="font-normal text-sm leading-6 mb-2 px-5">
        {product.title}
      </div>
      <div className="font-normal text-sm leading-6 mb-2">
        <div className="flex justify-center items-baseline flex-wrap relative">
          <div className="m-0 inline-block">{product.price / 100} €</div>
        </div>
      </div>
    </div>
  );
};
