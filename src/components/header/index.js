import { h } from "preact";
import { Link } from "preact-router/match";

import { HiShoppingCart } from "react-icons/hi";

import style from "./style.css";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <header>
      <span>INDITEX</span>
      <div className={style.shoppingcart}>
        <HiShoppingCart />
      </div>
      {showCart ? (
        <div className={style.listproducts}>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
          <div className={style.itemproductcart}>as</div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
