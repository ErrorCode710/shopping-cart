import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./css/reset.css";
import "./css/global.css";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

function AppWrapper() {
  // Fetch products
  const { data: products, loading, error } = useProducts();

  // Cart state
  const { cartItems, addToCart, increment, setCartItems, updateQuantity, removeCartItem } = useCart();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={products} loading={loading} error={error} cartItems={cartItems} addToCart={addToCart} />,
    },
    {
      path: "/shop",
      element: <Shop products={products} loading={loading} error={error} cartItems={cartItems} addToCart={addToCart} />,
    },
    {
      path: "/cart",
      element: (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          products={products}
          increment={increment}
          setCartItems={setCartItems}
          updateQuantity={updateQuantity}
          removeCartItem={removeCartItem}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
