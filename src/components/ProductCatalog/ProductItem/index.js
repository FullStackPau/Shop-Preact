import { h } from "preact";

import { useQuery } from "react-query";

import { HiShoppingCart } from "react-icons/hi";

import { Link } from "preact-router";

import style from "./style.css";

function ProductItem({ product }) {
  const setItemCart = (item) => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      const list = JSON.parse(localStorage.getItem("cart"));
      const newlist = [...list, item];
      localStorage.setItem("cart", JSON.stringify(newlist));
      return;
    }
    localStorage.setItem("cart", JSON.stringify([item]));
  };
  return (
    <div className={style.wrapitem}>
      <div key={product.id} className={style.item}>
        <img src={product.image} alt="Product Item" />
        <h3>{product.title.slice(0, 20)}</h3>
        <div className={style.description}>
          {product.description.slice(0, 90)}
          {" "}
          read more...
        </div>
        <div
          className={style.rowoptions}
          key={product.id}
          onClick={() => setItemCart(product)}
        >
          <HiShoppingCart size={30} className="cart" />
          <Link href={`/details/${product.id}`}>
            <button type="button">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
