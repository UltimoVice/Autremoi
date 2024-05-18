import React, { useEffect, useState } from "react";
// import {products} from "../data"

const useFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return { products };
};

export default useFetch;
