/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { productsList } from "../services/productsList";

const ProductContext = createContext({
  loading: false,
  error: null,
  products: [],
  productById: {},
  getProducts: () => {},
  getProductById: () => {},
});

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productById, setProductById] = useState({});

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newProducts = await productsList("https://fakeapi-dusky.vercel.app/product/");

      setProducts(newProducts);
    } catch (e) {
      setError(e.errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProductsById = useCallback(async (idProduct) => {
    if (idProduct === undefined || idProduct === null || idProduct === "") {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const newProduct = await productsList(
        "https://fakeapi-dusky.vercel.app/product/" + idProduct
      );
      setProductById(newProduct);
    } catch (e) {
      setError(e.errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      loading,
      error,
      getProducts,
      products,
      getProductsById,
      productById,
    }),
    [loading, error, getProducts, products, getProductsById, productById]
  );
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
