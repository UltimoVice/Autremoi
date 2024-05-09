import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data";

const Product = () => {
  const params = useParams();

  // aggiornare prodotto con più proprietà
  const product = products.find((p) => p.id == params.id);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const addProperty = (size) => {
    setUpdatedProduct({ ...product, size });
  };

  // per carrello
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Carica il carrello dal localStorage quando il componente viene montato
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    storedCart && setCart([...storedCart]);
  }, []);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  // salvarlo in locale
  useEffect(() => {
    // Salva il carrello nel localStorage quando viene aggiornato
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="mx-auto mt-6 mb-8 max-w-full px-6">
        <div className=" text-xs text-black leading-5">
          <ul className="flex m-0 p-0 list-none">
            <Link
              to={"/"}
              className="flex items-center whitespace-nowrap mr-2 hover:underline"
            >
              Home
            </Link>
            <span className="mr-2">/</span>
            <Link
              to={"/news"}
              className="flex items-center whitespace-nowrap mr-2 hover:underline"
            >
              Donna
            </Link>
            <span className="mr-2">/</span>
            <Link
              to={"/news"}
              className="flex items-center whitespace-nowrap mr-2 hover:underline"
            >
              Abbigliamento
            </Link>
            <span className="mr-2">/</span>
            <Link
              to={"/news"}
              className="flex items-center whitespace-nowrap mr-2 hover:underline"
            >
              Giacche
            </Link>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="mt-8 mb-32 p-0 mx-auto max-w-6xl">
          <div className="flex justify-between">
            <div className=" max-w-2xl w-3/5">
              <div className="relative">
                <div className="flex overflow-hidden w-full">
                  <img src={`/${product.images}`} className="cursor-zoom-in" />
                </div>
              </div>
            </div>
            <div className="relative w-1/3">
              <div className="flex items-start justify-between">
                <h2 className=" text-3xl leading-5 font-normal mb-4 pr-10">
                  {product.title}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-heart cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </div>
              <div className="">
                <div className=" items-baseline flex flex-wrap relative">
                  <span className="m-0 inline-block whitespace-nowrap">
                    {product.price / 100} €
                  </span>
                </div>
              </div>
              <div className=" my-10">
                <div className="relative font-normal text-base leading-5 mb-6">
                  <div className="flex mb-5">
                    <h2 className="font-normal text-sm leading-6 flex justify-between mr-1 text-gray-800">
                      Taglia:
                    </h2>
                    <div className="font-normal text-sm leading-6 block text-start text-gray-800">
                      seleziona
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <select
                      name=""
                      id=""
                      className="cursor-pointer"
                      // aggiungere proprietà al prodotto
                      onChange={(e) => addProperty(e.target.value)}
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  {/* aggiungere a carrello */}
                  <button
                    onClick={addToCart}
                    className="inline-block overflow-hidden cursor-pointer h-12 max-w-full bg-black border-solid border-[1px] border-black text-white font-normal text-sm px-12 hover:bg-white hover:text-black"
                  >
                    Aggiungi al Carrello
                  </button>
                </div>
              </div>
              <div className="">
                <div className="pt-7">
                  <div className="">
                    <h2 className=" font-normal text-sm leading-6 py-3">
                      DESCRIZIONE
                    </h2>
                    <div className=" h-96 block relative overflow-hidden font-normal leading-6 pt-4 text-sm">
                      <div className=" overflow-hidden pr-4 pb-5">
                        <p className=" mb-4">{product.description}</p>
                      </div>
                      <div className=" leading-6 mb-4">
                        <ul className="pl-4 mb-4 list-disc">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="mb-2">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="">
                        Codice: <span>{product.sku}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
