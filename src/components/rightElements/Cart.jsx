import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";

const Cart = () => {
  const [cart, setCart] = useState([]);
  // useEffect(setCart([...products]),[])

  // useEffect(() => {
  //   // Carica il carrello dal localStorage quando il componente viene montato
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  // const removeFromCart = (index) => {
  //   const updatedCart = [...cart];
  //   updatedCart.splice(index, 1);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // classi
  const carrello = ""
  const img_container = "h-[264px] w-[228px]";
  const img = "h-full";

  return (
    <div className="">
      <div className={carrello}>
        <h3>SHOPPING BAG</h3>
        <div>
          {products.length === 0
            ? "Nessun prodotto nel carrello"
            : products.map((item, i) => (
                <div key={i}>
                  <div className={img_container}>
                    <img className={img} src="../../assets/A-Line of Liberty.jpg" alt="" />
                  </div>
                  <h4>{item.productName}</h4>
                  <div>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
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
                  {products.length === 0
                    ? ""
                    : products.reduce((item, a) => (item.price + a, 0))}
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
