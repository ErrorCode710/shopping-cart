import style from "./Card.module.css";

function Card({ productImg, productTitle = "No Title", productPrice = "N/A", onClick }) {
  return (
    <div className={style["card"]}>
      {productImg ? (
        <div className={style["card-img"]}>
          <img src={productImg} alt="Product Image" />
        </div>
      ) : (
        <div>No image</div>
      )}

      <div className={style["card-info"]}>
        <p className={style["text-title"]}>{productTitle}</p>

        <div className={style["product-price-row"]}>
          <p className={style["product-price"]}>${productPrice}</p>
          <button className={style["product-btn"]} onClick={onClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
