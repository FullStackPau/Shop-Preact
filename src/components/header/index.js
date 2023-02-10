import { h } from "preact";
import { Link } from "preact-router/match";

import { HiShoppingCart } from "react-icons/hi";

import style from "./style.css";

const Header = () => {
  return (
    <header>
      <span>INDITEX</span>
      <div className={style.shoppingcart}>
        <HiShoppingCart />
      </div>
      <div className={style.listproducts}>
        <div className={style.itemproductcart}>1</div>
        <div className={style.itemproductcart}>2</div>
        <div className={style.itemproductcart}>3</div>
        <div className={style.itemproductcart}>4</div>
        <div className={style.itemproductcart}>5</div>
        <div className={style.itemproductcart}>6</div>
      </div>
    </header>
  );
};

export default Header;
