// no state change takers place over here for it to re-render
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../utils/Context";

function Nav() {
  const { Products } = useContext(ProductsContext);

  const { search } = useLocation();

  let uniquecategories = Products.map((product) => product.category);
  uniquecategories = [...new Set(uniquecategories)];

  const randomRGB = () =>
    `rgb(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${((Math.random() * 255).toFixed(), 0.4)})`;

  return (
    <>
      <nav className="h-full w-[15%] bg-zinc-200 flex flex-col items-center ">
        <Link
          to="/create"
          className="mt-4 mb-2  px-3  text-sm py-2 border rounded border-orange-400 text-orange-400"
        >
          Add New Product
        </Link>
        <hr className="w-[80%]  mb-3 border-orange-400" />
        <h1 className="w-[80%] font-bold mb-1">Category Filter</h1>
        <ul className="list-none w-[80%] ">
          {uniquecategories.map((category, index) => (
            <Link
              to={`/?category=${category}`}
              key={index}
              className="block hover:scale-110"
            >
              <span
                style={{ backgroundColor: `${randomRGB()}` }}
                className="inline-block h-[10px] w-[10px] rounded "
              ></span>{" "}
              {category}
            </Link>
          ))}
        </ul>
        {search !== "" && (
          <Link
            to="/"
            className=" mt-[2rem] px-4 py-1 rounded bg-pink-700 text-zinc-100 hover:scale-110 text-center font-bold border border-orange-600"
          >
            Home
          </Link>
        )}
      </nav>
    </>
  );
}

export default Nav;
