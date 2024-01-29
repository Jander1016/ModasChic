import Navbar from "./components/Navbar/Navbar";
import ProductsFront from "./pages/frontProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsDashboard from "./pages/products";
import { ProductProvider } from "./context/productContext"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProductProvider>
          <Routes>
            <Route path="/" element={<ProductsFront />} />
            <Route path="/control-productos" element={<ProductsDashboard />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}
