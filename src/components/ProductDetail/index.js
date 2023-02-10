import { h } from "preact";
import { HiArrowLeft, HiOutlineStar } from "react-icons/hi";
import { Link } from "preact-router";
import style from "./style.css";
const ProductDetail = (props) => {
  const { details } = props;
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
          <img src={details.image}></img>
        </div>
      </div>
      <div className={style.column}>
        <div className={style.description}>
          <h4>{details.title}</h4>
          <p>{details.description}</p>
          <div className={style.price}>
            <span className={style.pricewhole}>{details.price}</span>

            <span className={style.pricesymbol}>€</span>
          </div>
        </div>
        <div className={style.actions}>
          <h4>Actions</h4>
          <div className={style.actionslist}>
            <div className={style.squareaction}></div>
            <div className={style.squareaction}></div>
            <div className={style.squareaction}></div>
            <div className={style.squareaction}></div>
            <div className={style.squareaction}></div>
            <div className={style.largeaction}>
              {[...Array(5)].map((_, index) => {
                return (
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
