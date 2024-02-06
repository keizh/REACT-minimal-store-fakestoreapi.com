import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../utils/Context";

function Content() {
  const { Products } = useContext(ProductsContext);
  const { search } = useLocation();

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
    <div className="card-container h-full w-[85%] bg-zinc-100 p-5 flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/details/${product.id}`}
          className="card h-[35vh] rounded w-[18%] border border-zinc-400 p-[5px] flex flex-col"
        >
          <div
            style={{ backgroundImage: `url(${product.image})` }}
            className="card-img-top h-[60%] bg-contain bg-no-repeat bg-center"
          ></div>
          <h1 className="mt-2 text-regular font-bold text-center">
            {product.title}
          </h1>
        </Link>
      ))}
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
