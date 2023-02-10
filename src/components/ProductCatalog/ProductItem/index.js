import { h } from "preact";

import { useQuery } from "react-query";

import { Link } from "preact-router";

import style from "./style.css";
const ProductItem = ({ product }) => {
  return (
    <Link href={`/details/${product.id}`}>
      <div className={style.wrapitem}>
        <div key={product.id} className={style.item}>
          <img src={product.image}></img>
          <h3>{product.title.slice(0, 20)}</h3>
          <div className={style.description}>
            {product.description.slice(0, 90)} read more...
          </div>
          <button>Buy</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
