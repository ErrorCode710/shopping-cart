import style from "./Card.module.css";

function Card({ productImg, productTitle, productDecs, productPrice }) {
  return (
    <div className={style["card"]}>
      <div className={style["card-img"]}>
        <img src={productImg} alt="Product Image" />
      </div>
      <div className={style["card-info"]}>
        <p className={style["text-title"]}>{productTitle}</p>
       
        <div className={style["product-price-row"]}>
          <p className={style["product-price"]}>${productPrice}</p>
          <button className={style["product-btn"]}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
