import "./style.scss";
import Count from "../Count";
import ButtonDelete from "../ButtonDelete";
import { useTransition } from "react";
import { deleteProduct, putProduct } from "../../api/api.ts";

export interface ProductElement {
  name: string;
  price: number;
  imgProduct: string;
  id: string;
  count: number;
}

export interface ProductProps extends ProductElement {
  refetchProduct: () => void;
}

export const Product = ({
  name,
  price,
  imgProduct,
  id,
  count,
  refetchProduct,
}: ProductProps) => {
  const [, startTransition] = useTransition();

  async function handleDelete() {
    startTransition(async () => {
      await deleteProduct(id);
      startTransition(async () => {
        await refetchProduct();
      });
    });
  }

  const ru = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(price * count);

  async function handlePutUp() {
    startTransition(async () => {
      await putProduct(id, {
        name,
        price,
        imgProduct,
        count: count + 1,
        id,
      });
      startTransition(async () => {
        await refetchProduct();
      });
    });
  }

  async function handlePutDown() {
    startTransition(async () => {
      await putProduct(id, {
        name,
        price,
        imgProduct,
        count: count > 0 ? count - 1 : 0,
        id,
      });
      startTransition(async () => {
        await refetchProduct();
      });
    });
  }

  return (
    <section className="product">
      <div className="product__img">
        <img src={imgProduct} alt="Apple MacBook Air 13" />
      </div>
      <div className="product__title">{name}</div>
      <div className="product__count">
        <Count count={count} upCount={handlePutUp} downCount={handlePutDown} />
      </div>
      <div className="product__price">{ru}</div>
      <div className="product__controls">
        <ButtonDelete handleDelete={handleDelete} />
      </div>
    </section>
  );
};

export default Product;
