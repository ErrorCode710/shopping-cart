import Header from "../components/Header";
import Hero from "../components/Hero";
import CheckoutList from "../components/Checkout/CheckoutList";
import CheckoutSum from "../components/Checkout/CheckoutSum";
import EmptyCart from "../components/Checkout/EmptyCart";
import { useProducts } from "../hooks/useProducts";
import style from "./Cart.module.css";
import { useEffect, useState } from "react";

function CartPage({ cartItems, products, updateQuantity, removeCartItem }) {
  // i need something to lookup to products get the id on the cartItems and refer to products details
  const productMap = new Map(products.map((product) => [product.id, product]));
  console.log(cartItems);
  const checkoutItems = cartItems.map((cartItem) => productMap.get(cartItem.productId));

  //utils
  const findCartQuantity = (id) => {
    const cartItem = cartItems.find((item) => item.productId === id);
    return cartItem?.quantity;
  };
  const totalAmount = () => {
    return cartItems.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      if (!product) return sum;
      return sum + product.price * item.quantity;
    }, 0);
  };

  //render logic
  const isCartEmpty = cartItems.length === 0;

  useEffect(() => {
    console.log("FINDCART FUNCTION", findCartQuantity(1));
  }, [cartItems]);

  useEffect(() => {
    console.log("Total Amount", totalAmount());
  });

  return (
    <>
      <Header cartItems={cartItems} />
      <div className={style["cart-wrapper"]}>
        <h2>Your Cart</h2>
        {isCartEmpty ? (
          <EmptyCart></EmptyCart>
        ) : (
          <div className={style["wrapper"]}>
            <ul className={style["item-wrapper"]}>
              {checkoutItems.map((item) => (
                <li key={item.id}>
                  <CheckoutList
                    productImg={item.image}
                    productPrice={item.price}
                    productTitle={item.title}
                    onClick={() => removeCartItem(item.id)}
                    itemValue={findCartQuantity(item.id)}
                    onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                  />
                </li>
              ))}
            </ul>

            <CheckoutSum total={totalAmount()} className={style["checkout-summary"]}></CheckoutSum>
          </div>
        )}
      </div>
    </>
  );
}
// <Checkout productImg={p.image} productPrice={p.price} productTitle={p.title}></Checkout>

export default CartPage;
