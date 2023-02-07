import { h } from "preact";

import { HiSearch } from "react-icons/hi";

import ProductCatalog from "../../components/ProductCatalog";

const Home = () => {
  return (
    <div className="container">
      <div className="headercontainer">
        <div className="titleheader">All Products</div>
        <div className="search">
          <input type="text" placeholder="search" />
          <HiSearch />
        </div>
      </div>
      <ProductCatalog />
    </div>
  );
};

export default Home;
