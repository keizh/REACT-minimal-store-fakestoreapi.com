/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../utils/Context";

function Content({ isopen, setisopen }) {
  const { Products } = useContext(ProductsContext);
  const { search } = useLocation();
  console.log("state", isopen);
  // Parse category from the search query string
  const category = search !== "" && decodeURIComponent(search.split("=")[1]);

  // Filter products based on category
  var filteredProducts = Products.filter(
    (product) => category && product.category === category
  );

  if (category == false) {
    filteredProducts = Products;
  }

  useEffect(() => {}, [category, search]);

  return (
    <div className="flex flex-col h-full w-full lg:w-[80%] lg:shrink-0 lg:z-0 lg:block">
      <div
        className={`relative bg-[#666] h-[8vh] w-full fixed z-10 top-0 left-0 flex items-center px-10 lg:hidden`}
      >
        {isopen === false && (
          <i
            className="ri-menu-line text-white text-xl absolute top-[50%] right-[10%] cursor-pointer"
            onClick={() => setisopen(true)}
          ></i>
        )}

        {isopen === true && (
          <i
            className="ri-close-line text-white text-xl absolute top-[50%] right-[10%] cursor-pointer"
            onClick={() => setisopen(false)}
          ></i>
        )}
      </div>

      <div className="card-container h-full w-full bg-zinc-100 p-5 flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="card  rounded w-[300px] h-[300px] mx-auto border border-zinc-400 p-[5px] flex flex-col items-center justify-between overflow-y-auto"
          >
            <div className="card-img-top  w-[150px] h-fit mx-auto bg-contain bg-no-repeat bg-center">
              <img
                src={`${product.image}`}
                className="inline-block mx-auto "
                alt=""
              />
            </div>
            <h1 className="mt-2 text-sm font-bold text-center">
              {product.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Content;

// WE ARE COMMENTING THIS CODE , TO MANUALLY FILTER THEM
// function fetchCategoryProduct(category) {
//   try {
//     fetch(`https://fakestoreapi.com/products/category/${category}`)
//       .then((raw_data) => raw_data.json())
//       .then((data) => {
//         // console.log("category data fetch is executed");
//         setfilteredProducts([...data]);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

// if (category !== false) {
// fetchCategoryProduct(category);
// } else if (category === false && search === "") {
// console.log("setting filtered back to products ...................");
// setfilteredProducts([...Products]);
