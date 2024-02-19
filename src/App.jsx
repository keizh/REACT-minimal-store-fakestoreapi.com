import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import AddProduct from "./components/AddProduct";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="h-screen w-screen  flex flex-row overflow-x-hidden overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
