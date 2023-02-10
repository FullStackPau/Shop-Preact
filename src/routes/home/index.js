import { h } from "preact";

import { useState } from "preact/hooks";

import ProductCatalog from "../../components/ProductCatalog";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <div className="headercontainer">
        <div className="titleheader">
          <h3>All Products</h3>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value.trim())}
          />
        </div>
      </div>
      <ProductCatalog search={search} />
    </div>
  );
};

export default Home;
