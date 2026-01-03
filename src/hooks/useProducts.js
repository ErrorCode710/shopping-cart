import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(setData)
      .catch(error)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
