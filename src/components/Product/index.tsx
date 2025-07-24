import "./style.scss";
import Count from "../Count";
import ButtonDelete from "../ButtonDelete";
import { useTransition } from "react";
import { deleteProduct } from "../../api/api.ts";

export interface ProductProps {
  name: string;
  price: number;
  imgProduct: string;
  id: string;
  refetchProduct: () => void;
}

const Product = ({
  name,
  price,
  imgProduct,
  id,
  refetchProduct,
}: ProductProps) => {
  const [isPending, startTransition] = useTransition();

  async function handleDelete() {
    startTransition(async () => {
      await deleteProduct(id);
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
        <Count />
      </div>
      <div className="product__price">{price} руб.</div>
      <div className="product__controls">
        <ButtonDelete handleDelete={handleDelete} />
      </div>
    </section>
  );
};

export default Product;
