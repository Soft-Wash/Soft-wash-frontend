import React from 'react'
import ReactDOM from 'react-dom';
import ButtonIncDec from './ButtonIncDec';
function ClothesSelectCounter() {
    const initialQuantities = [0]; // Initial quantities for different items

  return (
    <div>
      {initialQuantities.map((quantity, index) => (
        <div key={index}>
            <ButtonIncDec initialQuantity={quantity} />
        </div>
      ))}
    </div>
  );
  
}

ReactDOM.render(<ClothesSelectCounter />, document.getElementById('root'));
export default ClothesSelectCounter