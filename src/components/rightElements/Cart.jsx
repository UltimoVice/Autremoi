import {React,  useState } from 'react'
import { Link } from "react-router-dom";


const Cart = (items) => {
  const products = [
  {
    src: "",
    productName: "",
    id: "",
    price: "",
  },
  ]

  const [noItems, setNoItems] = useState(0)

  return (
    <div>
      <h3>SHOPPING BAG</h3>
      <div>
        {products.map((item, i) => (
          <div key={i}>
            <img className="w-5 h-5" src={item.src} alt="" />
            <h4>{item.productName}</h4>

            <Link to={item.id}>{`Go to the product`}</Link>
            <div>
              <button onClick={setNoItems(noItems + 1)}>+</button>
              <div>{noItems}</div>
              <button onClick={setNoItems(noItems - 1)}>-</button>
            </div>
            <p>{`price: ${item.price}`}</p>
          </div>
        ))}
        <div>
          <div>
            <div>
              <div>Subtotal</div>
              <div>{products.reduce((item, a) => (item.price + a, 0))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart