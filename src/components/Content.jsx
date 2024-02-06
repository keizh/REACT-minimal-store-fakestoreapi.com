import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../utils/Context";
// import { useEffect } from "react";

function Content() {
  const { Products } = useContext(ProductsContext);

  return (
    <>
      <div className="card-container h-full w-[85%] bg-zinc-100 p-5 flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto">
        {Products.map((Product) => (
          <Link
            key={Product.id}
            to={`/details/${Product.id}`}
            className="card h-[35vh] rounded w-[18%] border border-zinc-400 p-[5px] flex flex-col  "
          >
            <div
              style={{
                backgroundImage: `url(${Product.image})`,
              }}
              className="card-img-top h-[60%] bg-contain bg-no-repeat bg-center"
            ></div>
            <h1 className="mt-2 text-regular font-bold text-center">
              {Product.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Content;
