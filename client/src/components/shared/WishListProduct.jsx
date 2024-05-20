import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { products } from "../../data";

const WishListProduct = ({ id, del }) => {
  const [opacity, setOpacity] = useState(false);
  // const {products} = useFetch()

  const product = products.find((p) => p.id === id);

  const toggleOpacity = () => {
    setOpacity(!opacity);
  };

  useEffect(() => {
    console.log(product);
  }, []);

  return (
    <div className="relative text-center overflow-hidden p-2 max-w-[25%] min-w-[457px]">
      <div className="mb-5 overflow-hidden relative">
        <Link to={`/products/${id}`}>
          <div
            className="h-[528px] relative w-[457px] cursor-pointer bg-black"
            onMouseOver={toggleOpacity}
            onMouseOut={toggleOpacity}
          >
            <img
              className="w-full h-full border-none block left-0 object-cover absolute top-0 hover:scale-125 transition-transform duration-300"
              src={`/${product.images}`}
              alt={product.title}
            />
            <button
              className={`bg-[rgba(0,0,0,0.6)] h-10 border-none bottom-0 text-white font-medium left-0 ${
                opacity ? "opacity-100" : "opacity-0"
              }  w-full absolute text-sm px-12`}
            >
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
      <button onClick={() => del(product.id)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          focusable="false"
        >
          <path
            d="M4.7998 7.20007H19.1998"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.5994 7.2V18.4C17.5994 18.824 17.4314 19.232 17.1274 19.528C16.8234 19.832 16.4234 20 15.9994 20H7.99941C7.57541 20 7.16741 19.832 6.87141 19.528C6.56741 19.224 6.39941 18.824 6.39941 18.4V7.2M8.79941 7.2V5.6C8.79941 5.176 8.96741 4.768 9.27141 4.472C9.57541 4.168 9.97541 4 10.3994 4H13.5994C14.0234 4 14.4314 4.168 14.7274 4.472C15.0314 4.776 15.1994 5.176 15.1994 5.6V7.2"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default WishListProduct;
