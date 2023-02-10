import { h } from "preact";

import { Link } from "preact-router";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { HiHome } from "react-icons/hi";

import ProductDetail from "../../components/ProductDetail";

const Details = ({ id }) => {
  async function getDetailProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }
  const { data, status } = useQuery("detailsproduct", getDetailProduct, {
    refetchInterval: 1000 * 60 * 60,
  });
  console.log(data);
  if (status === "loading") {
    return (
      <div className="loader">
        <ClipLoader
          className="loading"
          color={"blue"}
          loading={true}
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

  return (
    <div className="container">
      <div className="headercontainer">
        <div className="titleheader">
          <Link to={`/`}>
            <h3>
              <HiHome className="home" /> > {data.category}
            </h3>
          </Link>
        </div>
      </div>
      {status === "loading" ? (
        <div className="loader">
          <ClipLoader
            className="loading"
            color={"blue"}
            loading={true}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ProductDetail details={data} />
      )}
    </div>
  );
};

export default Details;
