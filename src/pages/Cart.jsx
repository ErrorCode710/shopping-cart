import Header from "../components/Header";
import Hero from "../components/Hero";
import CheckoutList from "../components/Checkout/CheckoutList";
import CheckoutSum from "../components/Checkout/CheckoutSum";
import { useProducts } from "../hooks/useProducts";
import style from "./Cart.module.css";
import { useEffect, useState } from "react";

function CartPage({ cartItems, useProducts, products, increment, updateQuantity }) {
  // i need something to lookup to products get the id on the cartItems and refer to products details
  const productMap = new Map(products.map((product) => [product.id, product]));
  console.log(cartItems);
  const checkoutItems = cartItems.map((cartItem) => productMap.get(cartItem.productId));

  const [itemValue, setItemValue] = useState(1);

  //utils
  const findCartQuantity = (id) => {
    const cartItem = cartItems.find((item) => item.productId === id);
    return cartItem?.quantity;
  };

  useEffect(() => {
    console.log("FINDCART FUNCTION", findCartQuantity(1));
  }, [cartItems]);

  // itemValue is based on the cartITtem

  return (
    <>
      <Header cartItems={cartItems} />
      <div className={style["cart-wrapper"]}>
        <h2>Your Cart</h2>
        <div className={style["wrapper"]}>
          <ul className={style["item-wrapper"]}>
            {checkoutItems.map((item) => (
              <li key={item.id}>
                <CheckoutList
                  productImg={item.image}
                  productPrice={item.price}
                  productTitle={item.title}
                  itemValue={findCartQuantity(item.id)}
                  onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                />
              </li>
            ))}
          </ul>
          <CheckoutSum className={style["checkout-summary"]}></CheckoutSum>
        </div>
      </div>
    </>
  );
}
// <Checkout productImg={p.image} productPrice={p.price} productTitle={p.title}></Checkout>

export default CartPage;
