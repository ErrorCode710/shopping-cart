import style from "./Checkout.module.css";

function CheckoutSum({ total = 0 }) {
  console.log(total);
  return (
    <div className={style["CheckoutSum"]}>
      <div className={style["CheckoutSum-content"]}>
        <h4>Total</h4>
        <p>${total}</p>
      </div>
      <button className={style["CheckoutSum-btn"]}>Checkout</button>
    </div>
  );
}

export default CheckoutSum;
