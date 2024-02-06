import { useParams } from "react-router-dom";
import axios from "../utils/axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";

function Details() {
  const { id } = useParams();
  const [Product, setProduct] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await axios(`/products/${id}`);
      setProduct(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return Product ? (
    <>
      <div className=" h-full  mx-auto flex items-center justify-center gap-20  overflow-x-hidden overflow-y-hidden">
        <div className="image h-fit w-fit ">
          <img className="h-[60vh]" src={`${Product.image}`} alt="" />
        </div>
        <div className="detail w-[40%] h-fit">
          <h1 className="text-2xl font-bold mt-[-4rem]">{Product.title}</h1>
          <h6 className="category my-[1rem] text-sm text-zinc-400">
            {Product.category}
          </h6>

          <h5 className="price text-sm text-orange-400 mb-[1rem]">
            {Product.price}
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
    </>
  ) : (
    <Loader />
  );
}

export default Details;
