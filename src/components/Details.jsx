import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useState, useEffect, useContext } from "react";
import Loader from "./Loader";
import { ProductsContext } from "../utils/Context";

function Details() {
  const { id } = useParams();
  const [Product, setProduct] = useState(null);
  const { Products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();

  // console.log("INSDE OUT", Products);
  // console.log(id);
  // console.log(Products.filter((p) => p.id == id)); TYPE_COERSION WAS THE REASON YOU WERE ARE NOT ABLE TO FIND ID

  //    WE ARE NOW GONNA JUST FILTER OUR product NO MORE FETCHING
  // const fetchDetails = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchDetails();
    setProduct(Products.filter((p) => p.id == id)[0]);
  });

  // return <div>hello</div>;

  function handleDelete() {
    const remainingAfterDelete = Products.filter((p) => p.id != id);
    // console.log(remainingAfterDelete);
    setProducts([...remainingAfterDelete]);
    localStorage.setItem("products", JSON.stringify([...remainingAfterDelete]));
    navigate("/");
  }

  return Product ? (
    <>
      <div
        className="DETAIL relative h-fit w-full overflow-y-auto overflow-x-hidden  mx-auto flex flex-col items-center justify-center gap-10 py-20 px-[10%]
      lg:flex-row"
      >
        <div className="image h-fit w-full mt-36 m-x-auto overflow-x-hidden">
          <img
            className="w-[50%] mx-auto lg:w-[50%]"
            src={`${Product.image}`}
            alt=""
          />
        </div>
        <div className="detail w-[80vw] mx-auto  overflow-x-hidden overflow-x-hidden ">
          <h1 className="text-xl font-bold mt-[-4rem] w-[80vw] overflow-x-hidden">
            {Product.title}
          </h1>
          <h6 className="category  my-[1rem] text-sm text-zinc-400 overflow-x-hidden">
            {Product.category}
          </h6>

          <h5 className="price   text-lg text-orange-400 mb-[1rem] overflow-x-hidden">
            ${Product.price}
          </h5>

          <div className=" overflow-x-hidden">
            <p className="text-sm md:text-2xl font-medium overflow-x-hidden">
              {Product.description}
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            {" "}
            <Link
              to={`/edit/${id}`}
              className="inline-block  px-[15px] py-[2.5px] rounded  border border-orange-200 text-orange-500 overflow-x-hidden"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="inline-block   px-[15px] py-[2.5px] rounded   border border-blue-500 text-blue-500 overflow-x-hidden"
            >
              Delete
            </button>
          </div>
        </div>
        <Link
          to="/"
          className=" overflow-x-hidden   absolute top-[0%] left-[50%] -translate-x-1/2 mt-[2rem]  px-4 py-1 rounded bg-pink-700 text-zinc-100 hover:scale-110 text-center font-bold border border-orange-600"
        >
          Home
        </Link>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Details;
