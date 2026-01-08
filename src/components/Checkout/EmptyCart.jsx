import style from "./Checkout.module.css";
import { PiShoppingCartSimple } from "react-icons/pi";
function EmptyCart() {
  return (
    <div className={style["empty"]}>
      <div className={style["cart-imgwrapper"]}>
        <PiShoppingCartSimple size={64} />
      </div>
      <h3>Your cart is empty</h3>
      <p>Start shopping now and fill it with your favorites. </p>
    </div>
  );
}

export default EmptyCart;
