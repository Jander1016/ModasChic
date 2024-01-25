import Navbar from "./components/Navbar/Navbar";
import ProductsFront from "./pages/frontProducts";
// import ProductsDashboard from "./pages/products";
/* import { Products } from "./components/ProductList";
 */import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProductsComponent } from "./components/ProductList";





export default function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ProductsFront/>}/>
          <Route path='/control-productos' element={<ProductsComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
