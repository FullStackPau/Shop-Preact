import { h } from "preact";
import { HiArrowLeft, HiOutlineStar, HiShoppingCart } from "react-icons/hi";
import { Link } from "preact-router";

import style from "./style.css";

function ProductDetail(props) {
  const { details } = props;

  const setItemCart = (product) => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      const list = JSON.parse(localStorage.getItem("cart"));
      const newlist = [...list, product];
      localStorage.setItem("cart", JSON.stringify(newlist));
      return;
    }
    localStorage.setItem("cart", JSON.stringify([product]));
  };

  return (
    <div className={style.detail}>
      <div className="back">
        <Link href="/">
          <div className="buttonback">
            <HiArrowLeft />
            Go Back
          </div>
        </Link>
      </div>
      <div className={style.column}>
        <div className={style.image}>
          <img src={details.image} alt="Detail Product" />
        </div>
      </div>
      <div className={style.column}>
        <div className={style.description}>
          <h4>{details.title}</h4>
          <p>{details.description}</p>
          <div className={style.price}>
            <span className={style.pricewhole}>{details.price}</span>
            <span className={style.pricesymbol}>€</span>
            <div className={style.largeaction}>
              {[...Array(5)].map((_, index) => (
                <HiOutlineStar
                  size={25}
                  style={{
                    color: "black",
                    fill:
                      details.rating.rate >= index + 1
                        ? "rgb(255, 230, 0)"
                        : "white",
                  }}
                />
              ))}
            </div>
          </div>
          <button type="button">Buy</button>
        </div>
        <div className={style.actions}>
          <h4>Actions</h4>
          <div className={style.actionslist}>
            <div
              className={style.squareaction}
              onClick={() => setItemCart(details)}
            >
              <HiShoppingCart size={30} className="cart" />
            </div>
            <div className={style.squareaction} />
            <div className={style.squareaction} />
            <div className={style.squareaction} />
            <div className={style.squareaction} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
