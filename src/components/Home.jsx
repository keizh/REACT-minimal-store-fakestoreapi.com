import Content from "./Content";
import Nav from "./Nav";
import Loader from "./Loader";
import { useContext } from "react";
import { ProductsContext } from "../utils/Context";

function Home() {
  const { Products } = useContext(ProductsContext);

  return Products ? (
    <>
      <Nav />
      <Content />
    </>
  ) : (
    <Loader />
  );
}

export default Home;
