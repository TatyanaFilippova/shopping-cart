import "./style.scss";

const CartFooter = () => {
  return (
    <footer className="cart-footer">
      <button className="button">Сбросить</button>
      <div className="cart-footer__count">3 единицы</div>
      <div className="cart-footer__price">329 000 руб.</div>
    </footer>
  );
};

export default CartFooter;
