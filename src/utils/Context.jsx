import { createContext, useState, useEffect } from "react";
import axios from "./axios";

export const ProductsContext = createContext();

function Context(props) {
  // eslint-disable-next-line no-unused-vars
  const [Products, setProducts] = useState(null);

  // WE ARE NOW USING LOCAL STORAGE BUT AT ININITAL MOUNT WE STILL WANT THE DATA SO WE ARE NOT DISABLEING THE DATA;
  // async function fetchProducts() {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //     // console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(function () {
    // fetchProducts();
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  return (
    <ProductsContext.Provider value={{ Products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default Context;
