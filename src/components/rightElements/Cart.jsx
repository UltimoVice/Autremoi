import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { CartProduct } from "./CartProduct";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    setSubTotal(cart && cart.reduce((a, item) => (a + item.price/100, 0)))
  }, [products])

  useEffect(() => {
    // Carica il carrello dal localStorage quando il componente viene montato
    const storedCart = localStorage.getItem("cart");
    storedCart && setCart(JSON.parse(storedCart));
  } ,[cart]);

  // const removeFromCart = (index) => {
  //   const updatedCart = [...cart];
  //   updatedCart.splice(index, 1);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };


  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        <h3 className="text-4xl mb-3">Carrello</h3>
        <div className="">
          {cart &&
            cart.map((product) => (
              <CartProduct key={product.sku} id={product.id} />
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
