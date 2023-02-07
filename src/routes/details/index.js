import { h } from "preact";

import { Link } from "preact-router";
import { useQuery } from "react-query";

import ProductDetail from "../../components/ProductDetail";

const Details = ({ id }) => {
  async function getDetailProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }
  const { data, status } = useQuery("detailsproduct", getDetailProduct, {
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
    <div className="container">
      <div className="headercontainer">
        <Link to={`/`}>
          <h3>/{data.category}</h3>
        </Link>
      </div>
      <ProductDetail details={data} />
    </div>
  );
};

export default Details;
