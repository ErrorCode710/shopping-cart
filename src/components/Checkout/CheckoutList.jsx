import style from "./Checkout.module.css";
import img from "../../assets/mock.png";

function Checkout({ productImg, productTitle, productPrice, onQuantityChange, itemValue, onClick }) {
  // console.log("CHECKOUT DETAILS", productImg, productTitle, productPrice);

  console.log("ITEMVALUE", itemValue);
  const isQuantityZero = itemValue === "0";
  return (
    <div className={style["checkout"]}>
      <div className={style["product-imagewrapper"]}>
        <img src={productImg} alt="" />
      </div>
      <div className={style["product-content"]}>
        <p className={style["product-title"]}>{productTitle}</p>
        <p className={style["product-price"]}>${productPrice}</p>
        <div className={style["product-quantity-container"]}>
          <input
            className={style["product-quantity"]}
            type="number"
            min="0"
            value={itemValue}
            onChange={(e) => onQuantityChange(e.target.value)}
          />
          {isQuantityZero && (
            <button className={style["remove-btn"]} onClick={() => onClick()}>
              Remove
            </button>
          )}
        </div>
      </div>
      <div className={style["product-wholePrice"]}>
        <p className={style["product-price"]}>${productPrice * itemValue}</p>
      </div>
    </div>
  );
}

export default Checkout;
