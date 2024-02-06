import { createContext, useState, useEffect } from "react";
import axios from "./axios";

export const ProductsContext = createContext();

function Context(props) {
  // eslint-disable-next-line no-unused-vars
  const [Products, setProducts] = useState(null);

  async function fetchProducts() {
    try {
      const { data } = await axios("/products");
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(function () {
    fetchProducts();
  }, []);

  useEffect(
    function () {
      console.log(Products);
    },
    [Products]
  );

  return (
    <ProductsContext.Provider value={{ Products }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default Context;
