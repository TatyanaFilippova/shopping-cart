import "./style.scss";

const Count = () => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value="1"
        />
      </div>
      <div className="count__controls">
        <button className="count__up" type="button">
          <img src="./img/icons/up.svg" alt="up" />
        </button>
        <button className="count__down" type="button">
          <img src="./img/icons/down.svg" alt="down" />
        </button>
      </div>
    </div>
  );
};

export default Count;
