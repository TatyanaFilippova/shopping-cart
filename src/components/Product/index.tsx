import "./style.scss";
import Count from "../Count";
import ButtonDelete from "../ButtonDelete";

const Product = ({ name, price, imgProduct }) => {
  return (
    <section className="product">
      <div className="product__img">
        <img src={imgProduct} alt="Apple MacBook Air 13" />
      </div>
      <div className="product__title">{name}</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">{price}</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
