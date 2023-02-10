import { h } from "preact";

import { useState, useEffect } from "preact/hooks";

import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

import ProductItem from "./ProductItem";

import style from "./style.css";

function ProductCatalog({ search }) {
  const [catalog, setCatalog] = useState([]);
  async function getProducts() {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics",
    );
    return response.json();
  }

  const { data, status } = useQuery("products", getProducts, {
    refetchInterval: 60000,
  });
  const filterData = () => {
    if (search !== "" && data.length > 0) {
      const filtered = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
      setCatalog(filtered);
      return;
    }
    setCatalog(data);
  };
  if (status === "loading") {
    return (
      <div className="loader">
        <ClipLoader
          className="loading"
          color="blue"
          loading
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if (status === "error") {
    return <p>Error Getting Products</p>;
  }

  useEffect(() => {
    console.log(search);
    filterData();
  }, [search]);

  return (
    <div className={style.catalog}>
      {catalog.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
