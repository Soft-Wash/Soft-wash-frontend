import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

function ClothesSelectCounter({initialQuantity}) {
  

    const [quantity, setQuantity] = useState(initialQuantity);

    const increment = () => {
setQuantity((prevquantity=>prevquantity+1))
    };
  
    const decrement = () => {
      setQuantity(prevquantity=>Math.mix(prevquantity-1,0))
    };

  return (
    <div>
      <div className="d-flex text alaign " style={{height:"35px", marginLeft:"450px"}} >
        <button className='-ve' onClick={decrement}>-</button>
        <input
  type="text"
  step="1"
  min="0"
  name="quantity"
  value={quantity}
  title="Qty"
  className="input-text qty text"
  size="4"
  pattern=""
  inputMode=""
/>

        <button className='pve' onClick={increment}>+</button>
      </div>
    </div>
  );
  
}

export default ClothesSelectCounter