import { h } from "preact";

import { useQuery } from "react-query";

import ProductItem from "./ProductItem";

import style from "./style.css";
const ProductCatalog = () => {
  async function getProducts() {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/electronics`
    );
    return response.json();
  }

  const { data, status } = useQuery("products", getProducts, {
    refetchInterval: 60000,
  });
  console.log(data);

  if (status === "loading") {
    return <p>Loading Products</p>;
  }
  if (status === "error") {
    return <p>Error Getting Products</p>;
  }

  return (
    <div className={style.catalog}>
      {data.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default ProductCatalog;
