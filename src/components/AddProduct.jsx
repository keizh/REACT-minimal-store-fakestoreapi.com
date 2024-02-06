import { useState, useContext } from "react";
import { ProductsContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { Products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();
  //   const [image, setImage] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [description, setDescription] = useState("");
  const [product, setProduct] = useState({
    id: nanoid(),
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
      setProducts([...Products, product]);
      //   localStorage.setItem("products", JSON.stringify(Products))); --> why not this because you cannot acces state just after updating it.
      localStorage.setItem("products", JSON.stringify([...Products, product]));
      navigate("/");
    }
  }

  return (
    <form
      className="h-full w-full flex flex-col gap-[1rem] items-center pt-[5rem]"
      onSubmit={handleOnSubmit}
    >
      <h1 className="text-2xl w-2/5 font-medium">Add New Product</h1>
      <input
        type="url"
        className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-2/5"
        placeholder="image Link"
        name="image"
        onChange={handleChange}
      />
      <input
        type="text"
        className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-2/5"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <div className="w-2/5 flex justify-between">
        <input
          type="text"
          className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[50%]"
          placeholder="Category"
          name="category"
          onChange={handleChange}
        />
        <input
          type="number"
          className="bg-zinc-100  rounded px-[1rem] py-[0.4rem] w-[40%]"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
      </div>
      <textarea
        className="w-2/5  bg-zinc-100 rounded px-[1rem] py-[0.4rem]"
        name="description"
        onChange={handleChange}
        cols="30"
        rows="8"
        placeholder="enter product description here..."
      ></textarea>
      <div className="w-2/5 ">
        <button
          className="border border-green-400 rounded px-[1rem] py-[0.4rem] border-2"
          type="submit"
        >
          Add new Product
        </button>
      </div>
    </form>
  );
}

export default AddProduct;
