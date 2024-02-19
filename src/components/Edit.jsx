import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function Edit() {
  const { id } = useParams();
  const { Products, setProducts } = useContext(ProductsContext);

  const navigate = useNavigate();
  var [product, setProduct] = useState({
    id: null,
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value.trim() });
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    if (
      product.image === "" ||
      product.title === "" ||
      product.category === "" ||
      product.price === "" ||
      product.description === ""
    ) {
      alert("Please Fill all the Sections");
    } else {
      Products.filter((p) => p.id == id);
      console.log(Products);
      console.log(product);
      setProducts([...Products, product]);
      //   localStorage.setItem("products", JSON.stringify(Products))); --> why not this because you cannot acces state just after updating it.
      localStorage.setItem("products", JSON.stringify([...Products, product]));
      navigate("/");
    }
  }

  useEffect(() => {
    setProduct(Products.find((p) => p.id == id));
  }, []);

  return product.id != null ? (
    <form
      className="h-full w-full flex flex-col gap-[1rem] items-center pt-[5rem] "
      onSubmit={handleOnSubmit}
    >
      <h1 className="text-2xl w-[90%] font-medium md:w-[500px] lg:w-[700px]">
        Edit Existing Product
      </h1>
      <input
        type="url"
        className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[90%] md:w-[500px] lg:w-[700px]"
        placeholder="image Link"
        name="image"
        onChange={handleChange}
        value={product.image}
      />
      <input
        type="text"
        className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[90%] md:w-[500px] lg:w-[700px]"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={product.title}
      />
      <div className="w-[90%] flex justify-between md:w-[500px] lg:w-[700px]">
        <input
          type="text"
          className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[50%] "
          placeholder="Category"
          name="category"
          onChange={handleChange}
          value={product.category}
        />
        <input
          type="number"
          className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[40%]  "
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={product.price}
        />
      </div>
      <textarea
        className="w-[90%]  bg-zinc-100 rounded px-[1rem] py-[0.4rem] md:w-[500px] lg:w-[700px]"
        name="description"
        onChange={handleChange}
        cols="30"
        rows="8"
        placeholder="enter product description here..."
        value={product.description}
      ></textarea>
      <div className="w-[90%]  md:w-[500px]  lg:w-[700px]">
        <button
          className="border border-green-400 rounded px-[1rem] py-[0.4rem] border-2"
          type="submit"
        >
          Update Product
        </button>
      </div>
    </form>
  ) : (
    <Loader />
  );
}

export default Edit;
