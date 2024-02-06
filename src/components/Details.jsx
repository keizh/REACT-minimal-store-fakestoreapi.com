import { useParams, Link } from "react-router-dom";
import axios from "../utils/axios";
import { useState, useEffect, useContext } from "react";
import Loader from "./Loader";
import { ProductsContext } from "../utils/Context";

function Details() {
  const { id } = useParams();
  const [Product, setProduct] = useState(null);
  const { Products } = useContext(ProductsContext);
  console.log("INSDE OUT", Products);
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

  return Product ? (
    <>
      <div className=" h-full  mx-auto flex items-center justify-center gap-20  overflow-x-hidden overflow-y-hidden">
        <div className="image h-fit w-fit ">
          <img className="w-[300px]" src={`${Product.image}`} alt="" />
        </div>
        <div className="detail w-[40%] h-fit">
          <h1 className="text-2xl font-bold mt-[-4rem]">{Product.title}</h1>
          <h6 className="category my-[1rem] text-sm text-zinc-400">
            {Product.category}
          </h6>

          <h5 className="price text-sm text-orange-400 mb-[1rem]">
            ${Product.price}
          </h5>
          <p className="text-xs font-medium">{Product.description}</p>

          <a
            href="#"
            className="inline-block px-[15px] py-[2.5px] rounded mt-[1rem] mr-[2rem] border border-orange-200 text-orange-500"
          >
            Edit
          </a>
          <a
            href=""
            className="inline-block px-[15px] py-[2.5px] rounded  border border-blue-500 text-blue-500"
          >
            Delete
          </a>
        </div>
      </div>

      <Link
        to="/"
        className=" absolute top-[4%] right-[90%]  mt-[2rem]  px-4 py-1 rounded bg-pink-700 text-zinc-100 hover:scale-110 text-center font-bold border border-orange-600"
      >
        Home
      </Link>
    </>
  ) : (
    <Loader />
  );
}

export default Details;
