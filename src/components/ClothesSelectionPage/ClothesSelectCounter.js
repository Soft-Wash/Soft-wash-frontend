import React from 'react'
import ReactDOM from 'react-dom';
// import ButtonIncDec from './ButtonIncDec';

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
      {initialQuantities.map((quantity, index) => (
        <div key={index}>
            {/* <ButtonIncDec initialQuantity={quantity} /> */}
        </div>
      ))}
    </div>
  );
  
}

export default ClothesSelectCounter