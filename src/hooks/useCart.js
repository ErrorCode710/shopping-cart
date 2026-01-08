import { useState, useEffect } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState();

  const cartCount = cartItems.length;

  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);

  function addToCart(id) {
    // if id is alread on the cartItems just add quantity
    const newItem = {
      productId: id,
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const itemExits = prevItems.find((item) => item.productId === id);

      if (itemExits) {
        return prevItems.map((item) => (item.productId === id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        const newItem = {
          productId: id,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });
  }

  function updateQuantity(id, quantityValue) {
    console.log("QUANTITY VALUE UPDATE USECART", quantityValue);
    // find the id and update it the rest the same
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.productId === id ? { ...item, quantity: quantityValue } : item))
    );
  }
  function increment(id) {
    // find the id on the cartItems copy the chaneg the quantity by 1
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.productId === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  }
  return { cartItems, addToCart, cartCount, increment, setCartItems, updateQuantity };
}
