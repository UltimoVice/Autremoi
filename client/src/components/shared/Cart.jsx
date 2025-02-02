import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartProduct } from "./CartProduct";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Carica il carrello dal localStorage quando il componente viene montato
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    storedCart && setCart([...storedCart]);
  }, []);

  const [noItems, setNoItems] = useState(1);

  const deleteFromCart = (e) => {
    setCart(cart.filter((_, i) => i !== e));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    // Salva il carrello nel localStorage quando viene aggiornato
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(cart &&   `${cart.reduce((a, prod) => a + prod.price/100, 0)} €`)
  }, [cart])
  useEffect(() => { 
    console.log(subTotal);
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        {cart.length < 1 && 
        <div className="flex justify-center flex-col items-center">
          <h3 className="text-4xl mb-3">IL TUO CARRELLO È VUOTO</h3>
          <Link to={`/news`}>
          <button class="bg-black text-white h-[48px] px-5">Ritorna allo shopping</button>
          </Link>
        </div>
        }
        {cart.length >= 1 && (
          <div>
            <h3 className="text-4xl mb-3">Carrello</h3>
            <div className="mb-3">
              {cart.map((product, i) => (
                <CartProduct
                  key={product.sku}
                  id={product.id}
                  del={() => deleteFromCart(i)}
                /> //
              ))}
              <div>
                <div>
                  <div>
                    <hr />
                    <div>RIEPILOGO DELL'ORDINE</div>
                    <div className="mb-4">Totale {subTotal}</div>
                    <Link to={`/payment`} className="">
                    <button class="bg-black text-white h-[48px] px-5">Vai al Pagamento</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
