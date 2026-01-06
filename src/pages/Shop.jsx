import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { useProducts } from "../hooks/useProducts";
import style from "./shop.module.css";
import { useCart } from "../hooks/useCart";

function ShopPage({ products, addToCart, cartItems }) {
  //   const { data, loading, error } = useProducts();
  //   const { cartItems, addToCart } = useCart();

  console.log(products);
  return (
    <>
      <Header cartItems={cartItems} />
      <div className={style["product-container"]}>
        {products.map((product) => (
          <li key={product.id}>
            <Card
              productImg={product.image}
              productTitle={product.title}
              productPrice={product.price}
              onClick={() => addToCart(product.id)}
            ></Card>
          </li>
        ))}
      </div>
    </>
  );
}

export default ShopPage;
