import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Loader from "../common/Loader"



function BookingPickUpMode() {
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [checkedOption, setCheckedOption] = useState(() => {
    // Check local storage for existing value
    const storedOption = localStorage.getItem('deliveryType');
    return storedOption ? JSON.parse(storedOption) : null;
  });

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setCheckedOption(selectedOption);

    if (!selectedOption) {
      setIsOptionSelected(false);
    } else {
      setIsOptionSelected(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('deliveryType', JSON.stringify(checkedOption));
  }, [checkedOption]);



  return (
    <Container>

      <div className="booking-pickup-mode select-pickup-type">
        <h3 className="section-header">Which service do you require?</h3>
        <Form>
          <div className="mb-3">
            <Form.Check
              label="Pick Up only"
              onChange={handleChange}
              name="deliveryType"
              type="radio"
              id="pickup-only"
              value="pickUpOnly"
              checked={checkedOption === 'pickUpOnly'}
            />

            <Form.Check
              label="Pick Up and Delivery"
              onChange={handleChange}
              name="deliveryType"
              type="radio"
              id="pickup-delivery"
              value="pickUpDelivery"
              checked={checkedOption === 'pickUpDelivery'}
            />
          </div>
        </Form>

        
      </div>
    </Container>
  );
}

export default BookingPickUpMode;