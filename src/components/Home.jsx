import Content from "./Content";
import Nav from "./Nav";
import Loader from "./Loader";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../utils/Context";

function Home() {
  const { Products } = useContext(ProductsContext);
  const [isopen, setisopen] = useState(false);

  return Products ? (
    <>
      <Nav isopen={isopen} setisopen={setisopen} />

      <Content isopen={isopen} setisopen={setisopen} />
    </>
  ) : (
    <Loader />
  );
}

export default Home;
