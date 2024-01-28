import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import image from '../../assets/Orders/thanks-icon.png'
import { Row } from "react-bootstrap";


function ThankYou() {
  return (
    <>
    <Container className="mx-auto mb-5" >
    <Row>
    <img src={image} alt="delivery" className="img-fluid mx-auto" style={{width:"150px", heigh:"auto"}}/>
    </Row>
    <Row>
        <h4 className="mx-auto" style={{width:"auto"}}>Thank you for choosing us!</h4>
    </Row>
    <Row>
        <p className="mx-auto" style={{width:"auto"}}>Your Order has been confirmed</p>
    </Row>
    </Container>
    </>
  );
}

export default ThankYou;
