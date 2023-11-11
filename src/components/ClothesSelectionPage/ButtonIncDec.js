import React, { useState } from 'react';

function ButtonIncDec({ initialQuantity }) {
  const [clothQuantity, setClothQuantity] = useState(initialQuantity);

  const increment = () => {
    setClothQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setClothQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div className="d-flex text align" style={{ height: "35px", marginLeft: "450px" }}>
      <button className="-ve" onClick={decrement}>
        -
      </button>
      <input
        type="text"
        step="1"
        min="0"
        max=""
        name="quantity"
        value={clothQuantity}
        title="Qty"
        className="input-text qty text"
        size="4"
        pattern=""
        inputMode=""
        readOnly
      />
      <button className="pve" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default ButtonIncDec;
