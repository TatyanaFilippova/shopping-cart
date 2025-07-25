import "./style.scss";
import { postProduct } from "../../api/api.ts";
import { startTransition, useMemo } from "react";
import type { ProductProps } from "../Product";
import pluralize from "pluralize-ru";

interface FooterProps {
  refetchProduct: () => void;
  content: ProductProps[];
}

const CartFooter = ({ refetchProduct, content }: FooterProps) => {
  async function handleReset() {
    startTransition(async () => {
      await postProduct();
      startTransition(async () => {
        await refetchProduct();
      });
    });
  }

  const result = useMemo(() => {
    let i = 0;
    content.forEach((content) => {
      i += content.price * content.count;
    });
    return i;
  }, [content]);

  const ru = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(result);

  const sumCountProduct = useMemo(() => {
    let sum = 0;
    content.forEach((content) => {
      sum += content.count;
    });
    return sum;
  }, [content]);

  return (
    <footer className="cart-footer">
      {content.length === 0 && (
        <button className="button" onClick={handleReset}>
          Сбросить
        </button>
      )}
      <div className="cart-footer__count">
        {pluralize(
          sumCountProduct,
          "нет товаров",
          "%d товар",
          "%d товара",
          "%d товаров",
        )}
      </div>
      <div className="cart-footer__price">{ru}</div>
    </footer>
  );
};

export default CartFooter;
