// no state change takers place over here for it to re-render
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../utils/Context";

function Nav({ isopen }) {
  const { Products } = useContext(ProductsContext);
  const { search } = useLocation();

  let uniquecategories = Products.map((product) => product.category);
  uniquecategories = [...new Set(uniquecategories)];

  const randomRGB = () => {
    return `rgb(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${((Math.random() * 255).toFixed(), 0.4)})`;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav
      className={`h-full  bg-zinc-200 flex flex-col items-center 
      ${
        window.innerWidth < 1024 &&
        "w-[500px] transition-all fixed top-0 left-0 z-20 "
      }  

      ${window.innerWidth >= 1024 && "w-[800px] "} 
    
      ${window.innerWidth < 1024 && isopen == true && "translate-x-0"}
      ${window.innerWidth < 1024 && isopen == false && "translate-x-[-100%]"}

    `}
    >
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
              style={{ backgroundColor: randomRGB() }}
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
  );
}

export default Nav;
