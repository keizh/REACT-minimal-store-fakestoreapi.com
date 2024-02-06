import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="h-screen w-screen  flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
