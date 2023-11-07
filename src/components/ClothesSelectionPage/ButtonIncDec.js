import React, { useState } from 'react';


function ButtonIncDec({ initialQuantity }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increment = () => {
      setQuantity(quantity + 1);
    };
  
    const decrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };

  return (
    <div className="d-flex text alaign " style={{height:"35px", marginLeft:"450px"}} >
        <button className='-ve' onClick={decrement}>-</button>
        <input
        type="text"
        step="1"
        min="0"
        max=""
        name="quantity"
        value={quantity}
        title="Qty"
        className="input-text qty text "
        size="4"
        pattern=""
        inputMode=""
        />
        <button className='pve' onClick={increment}>+</button>
    </div>
  )
}



  






export default ButtonIncDec