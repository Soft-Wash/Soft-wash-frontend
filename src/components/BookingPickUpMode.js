

import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function BookingPickUpMode() {
  return (
    <Container>
     <div className='select-pickup-type'>
      <h3 className='date-headers'>Which service do you require?</h3>
          <Form>
        {['radio'].map((type) => (
          <div key={`reverse-${type}`} className="mb-3">
            <Form.Check            
              label="Pick Up only"
              name="group1"
              type={type}
              id={`reverse-${type}-1`}
            />
            <Form.Check            
              label="Pick Up and Delivery"
              name="group1"
              type={type}
              id={`reverse-${type}-2`}
            />          
          </div>
        ))}
      </Form>
      </div>
    </Container>
  );
}

export default BookingPickUpMode;