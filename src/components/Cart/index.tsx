import Product, { type ProductProps } from "../Product";
import CartFooter from "../CartFooter";
import { use } from "react";

interface PProps {
  product: Promise<ProductProps[]>;
  refetchProduct: () => void;
}

const Cart = ({ product, refetchProduct }: PProps) => {
  const content = use(product);

  return (
    <section className="cart">
      {content.map((item: ProductProps) => (
        <Product
          key={item.id}
          price={item.price}
          imgProduct={item.imgProduct}
          name={item.name}
          id={item.id}
          refetchProduct={refetchProduct}
        />
      ))}

      <CartFooter refetchProduct={refetchProduct} content={content} />
    </section>
  );
};

export default Cart;
