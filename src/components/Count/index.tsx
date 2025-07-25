import "./style.scss";
import type { ProductElement } from "../Product";

interface CountProps {
  upCount: () => void;
  downCount: () => void;
  count: ProductElement["count"];
}

const Count = ({ upCount, downCount, count }: CountProps) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
        />
      </div>
      <div className="count__controls">
        <button className="count__up" type="button" onClick={upCount}>
          <img src="./img/icons/up.svg" alt="up" />
        </button>
        <button className="count__down" type="button" onClick={downCount}>
          <img src="./img/icons/down.svg" alt="down" />
        </button>
      </div>
    </div>
  );
};

export default Count;
