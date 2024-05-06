import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";

export const CartProduct = ({ id, add, remove, del }) => {
  const [opacity, setOpacity] = useState(false);

  const product = products.find((p) => p.id === id);

  const toggleOpacity = () => {
    setOpacity(!opacity);
  };

  const [nProduct, setNProduct] = useState(1);

  return (
    <div className="relative overflow-hidden p-2 flex min-w-[457px]">
      <div className="mb-5 overflow-hidden relative">
        <Link to={`/products/${id}`}>
          <div
            className="h-[228px] overflow-hidden relative w-[257px] cursor-pointer bg-black"
            onMouseOver={toggleOpacity}
            onMouseOut={toggleOpacity}
          >
            <img
              className="w-full h-full border-none block left-0 object-cover absolute top-0 hover:scale-125 transition-transform duration-300"
              src={`/${product.images}`}
              alt={product.title}
            />
          </div>
        </Link>
      </div>
      <div className="">
        <div className="ml-10 w-[500px] flex justify-between">
          <div className="w-2/5 pr-3">{product.title}</div>
          <div className="flex w-1/5 h-{24px} justify-around items-center">
            <button onClick={remove} class="w-1/5 inline-block">
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                focusable="false"
              >
                <path
                  d="M2 12.8494H22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              className="inline-block text-center h-[24px] w-[56px]"
              value={nProduct}
            />
            <button onClick={add} class="b-stepper-button inline-block ">
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path
                  d="M12.75 4.85v16m-8-8h16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-1/5 text-end">{product.price / 100} €</div>
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
      </div>
    </div>
  );
};
