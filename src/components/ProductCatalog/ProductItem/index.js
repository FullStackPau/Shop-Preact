import { h } from "preact";

import { useQuery } from "react-query";

import { Link } from "preact-router";

import style from "./style.css";
const ProductItem = ({ product }) => {
  return (
    <Link href={`/details/${product.id}`}>
      <div key={product.id} className={style.item}>
        <img src={product.image}></img>
      </div>
    </Link>
  );
};

export default ProductItem;
