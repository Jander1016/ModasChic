import Navbar from "./components/Navbar/Navbar";
import ProductsFront from "./pages/frontProducts";
// import ProductsDashboard from "./pages/products";

export default function App() {
  return (
    <>
        <Navbar/>
      <main>
        {
            <ProductsFront />
        }
      </main>
    </>
  );
}
