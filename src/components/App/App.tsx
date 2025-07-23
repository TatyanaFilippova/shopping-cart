import "./_vars.scss";
import "./_reset.scss";
import "./_base.scss";
import "./_section-cart.scss";
import Title from "../Title/Title.tsx";
import Cart from "../Cart";
import { getProduct } from "../../api/api.ts";
import { Suspense, useEffect, useState } from "react";

function App() {
  const [productPromise, setProductPromise] = useState(getProduct());

  function refetchProduct(): void {
    setProductPromise(getProduct());
  }

  useEffect(() => {
    console.log("sgv");
  }, []);

  return (
    <section className="section-cart">
      <header className="section-cart__header">
        <div className="container">
          <Title />
        </div>
      </header>
      <div className="section-cart__body">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Cart product={productPromise} refetchProduct={refetchProduct} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default App;
