

import { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function BookingPickUpMode() {

  const [empty, setEmpty] = useState(false);
  const [deliveryType, setDeliveryType] = useState(()=>{
    const storedItem = localStorage.getItem('deliveryType')
    return storedItem? JSON.parse(storedItem):storedItem
  })
  
  const handleChange =(e)=>{
    const value =
    e.target.type === "checkbox"
    ? e.target.checked
    : e.target.type === "file" 
    ? e.target.file[0]
    : e.target.value

    setDeliveryType({[e.target.name]:value })
    
  }

  useEffect(() => {
    localStorage.setItem("deliveryType", JSON.stringify(deliveryType));
  }, [deliveryType]);


  return (
    <Container>
     <div className='select-pickup-type'>
      <h3 className='date-headers'>Which service do you require?</h3>
          <Form>
        {['radio'].map((type) => (
          <div key={`reverse-${type}`} className="mb-3">
            <Form.Check            
              label="Pick Up only"
              onChange={(e) => {
                handleChange(e);
              }}
              name="pickUpOnly"
              type={type}
              id={`reverse-${type}-1`}
              checked={deliveryType === 'pickUpOnly'}
            />
            
            <Form.Check            
              label="Pick Up and Delivery"
              onChange={(e) => {
                handleChange(e);
              }}
              name="pickUpOnlyAndDelivery"
              type={type}
              id={`reverse-${type}-2`}
              checked={deliveryType === 'pickUpOnlyAndDelivery'}
            />          
          </div>
        ))}
      </Form>
      </div>
    </Container>
  );
}

export default BookingPickUpMode;