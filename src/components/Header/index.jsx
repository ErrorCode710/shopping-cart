import { PiShoppingCartSimple } from "react-icons/pi";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router";
import { useCart } from "../../hooks/useCart";

function Header({ cartItems }) {
  const cartCount = cartItems.length;
  return (
    <nav className={style.header}>
      <div>
        <h1 className={style.logo}>
          <NavLink to="/" className={style.logoLink}>
            Random<span className={style["title-highlight"]}>Store.</span>
          </NavLink>
        </h1>
      </div>
      <ul className={style.navListWrapper}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li className={style.cartWrapper}>
          <NavLink to="/cart">
            <PiShoppingCartSimple size={21} />
            {cartCount > 0 && <span className={style.cartBadge}>{cartCount}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
