import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { CartProduct } from "./CartProduct";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Carica il carrello dal localStorage quando il componente viene montato
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    storedCart && setCart([...storedCart]);
  } ,[cart]);


  const [subTotal, setSubTotal] = useState(0);

  // useEffect(() => {
  //   setSubTotal(cart && cart.reduce((a, item) => (a + item.price/100, 0)))
  // }, [cart])

 

  const removeFromCart = (e) => {
    setCart(cart.filter((_, i) => i !== e));
    localStorage.setItem("cart", JSON.stringify(cart));
  };


  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        <h3 className="text-4xl mb-3">Carrello</h3>
        <div className="">
          {cart &&
            cart.map((product, i) => (
              <CartProduct key={product.sku} id={product.id}  /> //del={removeFromCart(i)}
            ))
          }
          <div>
            <div>
              <div>
                <hr />
                <div>Riepilogo dell'ordine</div>
                <div>Subtotal</div>
                <div>
                  {" "}
                  {subTotal}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
