import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function PriceCard(props) {
  return (
    <Card className=" mb-5 shadow border-0 mx-auto" style={{height:"350px", width:"260px"}}>
      <Card.Img variant="top" src={props.image} className="img-fluid mx-auto mt-4" style={{height:"100px", width:"100px"}}/>
      <Card.Body className="text-center">
        <Card.Title className="fs-2">{props.title}</Card.Title>
        <Card.Text className="fw-semibold text-secondary">
          {props.text}
        </Card.Text>
        <Card.Text className="fs-3 text-info">
            {props.price}
        </Card.Text>
        <Button variant="info " className="text-white textwhite-hover"> ORDER NOW</Button>
      </Card.Body>
    </Card>
  );
}
