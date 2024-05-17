import React from "react";
import { CatalogueProduct } from "../CatalogueProduct";

const Scroll = ({ products, speed }) => {
  return (
    <div className="inner relative w-full overflow-hidden h-[528px]">
      <div className="wrapper absolute flex">
        <section
          className="scroll flex animate-[swipe_var(--speed)_linear_infinite_backwards]"
          style={{ "--speed": `${speed}ms` }}
        >
          {products &&
            products.map((product) => (
              <CatalogueProduct key={product.sku} id={product.id} />
            ))}
        </section>
        <section className="scroll flex animate-[swipe_var(--speed)_linear_infinite_backwards]" style={{ "--speed": `${speed}ms` }}>
          {products &&
            products.map((product) => (
              <CatalogueProduct key={product.sku} id={product.id} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default Scroll;
