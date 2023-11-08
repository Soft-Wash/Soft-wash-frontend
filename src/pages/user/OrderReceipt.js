import { Col, Container, Button } from "react-bootstrap";
import Banner from "../../components/AddressPage/Banner";
import Receipt from "../../components/OrdersPage/Receipt";
import ThankYou from "../../components/OrdersPage/ThankYou";
import { useNavigate } from "react";
import { Link } from "react-router-dom";

export default function OrderReceipt() {
  // const Navigate = useNavigate();
  return (
    <>
      <Banner />
      <ThankYou />
      <Receipt />

      <Container className="mt-5 pt-4 d-flex justify-content-center w-100 text-center my-5">
        <Col lg={4} md={5} sm={5}>
          <Link to="/">
            <Button
              variant="outline-primary"
              className="me-auto w-75 text-center"
            >
              Back Home
            </Button>
          </Link>
        </Col>
        <Col lg={4} md={5} sm={5}>
          <Link to="/my-orders">
            <Button variant="primary" className="me-auto w-75 text-center">
              Check order update
            </Button>
          </Link>
        </Col>
      </Container>
    </>
  );
}
