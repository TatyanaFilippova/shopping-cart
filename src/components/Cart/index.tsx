import CartHeader from "../CartHeader";
import Product from "../Product";
import CartFooter from "../CartFooter";
import { use } from "react";

interface PProps {
  product: () => Promise<any>;
}

const Cart = ({ product }: PProps) => {
  const content = use(product);
  console.log(content);
  return (
    <section className="cart">
      <CartHeader />
      {content.map((item) => (
        <Product
          key={item.id}
          price={item.price}
          imgProduct={item.imgProduct}
          name={item.name}
        />
      ))}

      <CartFooter />
    </section>
  );
};

export default Cart;
