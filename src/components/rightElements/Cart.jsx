import React, { useState } from 'react'

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
            <img src={item.src} alt="" />
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
              <div>{items.reduce((item, a) => (item.price + a, 0))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart