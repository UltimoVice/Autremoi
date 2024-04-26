import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Carica il carrello dal localStorage quando il componente viene montato
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h3>SHOPPING BAG</h3>
      <div>
        {cart.length === 0
          ? "Nessun prodotto nel carrello"
          : cart.map((item, i) => (
              <div key={i}>
                <img className="w-5 h-5" src={item.src} alt="" />
                <h4>{item.productName}</h4>
                <div>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
                <p>{`price: ${item.price}`}</p>
              </div>
            ))}
        <div>
          <div>
            <div>
              <div>Subtotal</div>
              <div>
                {" "}
                {cart.length === 0
                  ? ""
                  : cart.reduce((item, a) => (item.price + a, 0))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
