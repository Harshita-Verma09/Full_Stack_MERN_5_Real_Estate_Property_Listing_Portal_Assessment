import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProperty />} />
          <Route path="/edit/:id" element={<EditProperty />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;