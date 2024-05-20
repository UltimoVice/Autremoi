import React, { useEffect, useState } from "react";
import WishListProduct from "./WishListProduct";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    // Carica la wishList dal localStorage quando il componente viene montato
    const storedWish = JSON.parse(localStorage.getItem("wishList"));
    storedWish && setWishList([...storedWish]);
  }, []);

  const deleteFromWishList = (e) => {
    setWishList(wishList.filter((_, i) => i !== e));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  };

  useEffect(() => {
    // Salva il carrello nel localStorage quando viene aggiornato
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-4xl mb-3 flex">LISTA DEI DESIDERI</h3>
        <div className="flex w-full">
        {wishList < 1 && (
            <div className="my-10 w-full flex justify-center">
              Al momento la tua lista dei desideri è vuota
            </div>
        )}

        {wishList.length >= 1 &&
          wishList.map((product, i) => (
            <WishListProduct
              key={product.sku}
              id={product.id}
              del={() => deleteFromWishList(i)}
            /> //
          ))}
        </div>

        <Link to="/news">
          <button className="bg-black text-white h-[48px] px-5">
            Ritorna allo shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WishList;
