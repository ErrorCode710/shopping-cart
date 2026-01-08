import style from "./Checkout.module.css";
import img from "../../assets/mock.png";

function Checkout({ productImg, productTitle, productPrice, increment, onQuantityChange, itemValue }) {
  // console.log("CHECKOUT DETAILS", productImg, productTitle, productPrice);

  return (
    <div className={style["checkout"]}>
      <div className={style["product-imagewrapper"]}>
        <img src={productImg} alt="" />
      </div>
      <div className={style["product-content"]}>
        <p className={style["product-title"]}>{productTitle}</p>
        <p className={style["product-price"]}>${productPrice}</p>
        <input
          className={style["product-quantity"]}
          min="1"
          type="number"
          value={itemValue}
          onChange={(e) => onQuantityChange(e.target.value)}
        />
      </div>
      <div className={style["product-wholePrice"]}>
        <p className={style["product-price"]}>${productPrice * itemValue}</p>
      </div>
    </div>
  );
}

export default Checkout;
