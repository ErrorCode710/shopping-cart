import { PiShoppingCartSimple } from "react-icons/pi";
import style from "./Header.module.css";

function Header() {
  return (
    <nav className={style.header}>
      <div className={style.logo}>
        <h1>
          Random<span className={style["title-highlight"]}>Store.</span>
        </h1>
      </div>
      <div className={style.navListWrapper}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>
            <PiShoppingCartSimple />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
