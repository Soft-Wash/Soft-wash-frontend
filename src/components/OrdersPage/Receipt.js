import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import image from '../../assets/Orders/thanks-icon.png'
import { Row,  } from "react-bootstrap";


export default function Receipt() {
  return (
    <>
    <Container className="mx-auto mb-5 shadow w-50 rounded-5 p-4 px-4" >
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Order Id</h5>
        </div>
        <div lg={3} >
        <p>ORDA73FADO7RD9SF</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup Date</h5>
        </div>
        <div lg={3} >
        <p>08 Nov</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 mb-2">
        <div lg={3}>
        <h5>Pickup time</h5>
        </div>
        <div lg={3} >
        <p>18:00 - 21:00</p>
        </div>
    </div>
    <div className="d-flex justify-content-between gap-3 ">
        <div lg={3}>
        <h5>Final Amount</h5>
        </div>
        <div lg={3} >
        <p>₦5,000</p>
        </div>
    </div>
    </Container>
    <Row className="mb-5"></Row>
    </>
  );
}