import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";

import { HiShoppingCart, HiX } from "react-icons/hi";

import style from "./style.css";

function Header() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const getItemsCart = () => {
    console.log("works");
    const list = JSON.parse(localStorage.getItem("cart"));
    console.log(list);
    setCart(list);
  };
  const deleteItemCart = (id) => {
    const list = JSON.parse(localStorage.getItem("cart"));
    const newlist = list.filter((product) => product.id != id);
    console.log(newlist);
    localStorage.setItem("cart", JSON.stringify(newlist));
    setCart(newlist);
  };
  useEffect(() => {
    getItemsCart();
  }, [showCart]);
  return (
    <header>
      <span>INDITEX</span>
      <div
        className={style.shoppingcart}
        onClick={() => setShowCart(!showCart)}
      >
        <HiShoppingCart />
      </div>
      {showCart ? (
        <div className={style.listproducts}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className={style.itemproductcart}>
                <Link href={`/details/${item.id}`}>
                  <div className={style.itemtitle}>{item.title}</div>
                </Link>

                <div
                  className={style.deleteitem}
                  value={item.id}
                  onClick={(e) => deleteItemCart(e.target.getAttribute("value"))}
                >
                  x
                </div>
              </div>
            ))
          ) : (
            <div>There isn't any item</div>
          )}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
