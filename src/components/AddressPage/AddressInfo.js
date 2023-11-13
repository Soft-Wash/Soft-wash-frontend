import "../../styles/Address.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import mapSample from "../../assets/AddressPage/map-sample.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";

function AddressInfo() {

  const [cartItems, setCartItems] = useState();
  let arrayObj=[]

  useEffect(() => {
    const clothQuantity = localStorage.getItem("clothQuantity");
    const clothQuantities = JSON.parse(clothQuantity);
    const keys = Object.keys(clothQuantities);
    const values = Object.values(clothQuantities);
    arrayObj=keys
  }, []);





  const handleSubmit = () => {
        let data = {ids:arrayObj}
    if(arrayObj?.length){
        axiosInstance
        .post(`/cloth/clothtypes/ids`, data)
        .then((resp) => {
        //   console.log(arrayObj);
          console.log(resp.data);
          setCartItems(resp.data);
        });
    }

  };

  useEffect(()=>{
 handleSubmit();
  },[]) 

const [selectedAddress, setSelectedAddress] = useState({
  contactNumber:"",
  FullAddress:"",
  SearchedAddress:"",
  AddressTypeHome:false,
  AddressTypeWork:false,
  AddressTypeOther:false

})

const handleChange =(e)=>{
  const value =
  e.target.type === "checkbox"
  ? e.target.checked
  : e.target.value

  setSelectedAddress({...selectedAddress, [e.target.name]:value })
  
}

const handleAddress=()=>{
  localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
  console.log(selectedAddress)
}

useEffect(() => {
  const storedAddress = localStorage.getItem("selectedAddress");

  if (storedAddress) {
    setSelectedAddress(JSON.parse(storedAddress));
  }
}, []);


  return (
    <Container>
      <Row className="justify-content-between">
        <Col lg={7} md={12} sm={12}>
          <Row className="border border-2 shadow rounded py-4">

          </Row>
          <Row className="w-100 text-center my-4">
            <h3>Or</h3>
          </Row>
          <Row className="border border-2 shadow rounded py-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Add Address</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <InputGroup className="mb-3">
                      {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                      <Form.Control
                        placeholder="Enter Contact Number"
                        aria-label="Enter Contact Number"
                        aria-describedby="basic-addon1"
                        name="contactNumber"
                        onChange={handleChange}
                        value={selectedAddress.contactNumber}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup className="mb-3">
                      {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                      <Form.Control
                        placeholder="Enter Full Address"
                        aria-label="Enter Full Address"
                        aria-describedby="basic-addon1"
                        name="FullAddress"
                        onChange={handleChange}
                        value={selectedAddress.FullAddress}
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <h5 className="text-capitalize">Pin your location</h5>
                    <p>
                      Note: If your address not found on map then search
                      landmark location and drag drop the pin on your location
                    </p>
                  </Row>

                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search Address or Landmark location"
                        aria-label="Search Address or Landmark location"
                        aria-describedby="basic-addon1"
                        name="SearchedAddress"
                        onChange={handleChange}
                        value={selectedAddress.SearchedAddress}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <img src={mapSample} alt="maps" />
                  </Row>
                  <Row className="d-flex">
                    <h5>Address Type</h5>
                    <Row>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" onChange={handleChange} name="AddressTypeHome"/>
                      <Form.Label>Home</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1"     onChange={handleChange} name="AddressTypeWork"/>
                      <Form.Label>Work</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1"     onChange={handleChange} name="AddressTypeOther"/>
                      <Form.Label>Other</Form.Label>
                    </Form.Group>
                    </Row>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>

        <Col lg={4} md={12} sm={12} className="border border-2 shadow pb-3 mt-3">
          <Row className="d-flex justify-content-between  mt-3 mx-auto">
            {/* <Col lg={7} md={6} sm={6}> */}
              <h4 className="text-primary my-auto">Selected Items</h4>
            {/* </Col> */}
            {/* <Col lg={5} md={5} sm={6} className="text-end"> */}
              <Button variant="primary" className="w-50 my-auto">
                Edit
              </Button>
            {/* </Col> */}
          </Row>
          <hr />
          <h4 className="text-capitalize ms-1">dry wash</h4>
          <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mens Wear</Accordion.Header>
                        <Accordion.Body>
                        {cartItems && cartItems.map((item)=>(
                                  <div className="cart-item" key={item._id}>
                                  <div className="d-flex justify-content-between">
                                    <h5>{item.name}</h5>
                                    <h5>{item.price}</h5>
                                  </div>
                                  <p>2 x N2,000 / per piece</p>
                                </div>  
                ))}
                        </Accordion.Body>
                    </Accordion.Item>      
                </Accordion>
        </Col>
      </Row>

      <Container className="d-flex justify-content-center w-100 text-center my-5">
        <Col lg={4} md={5} sm={5}>
          <Link to="/date">
          <Button  variant="outline-primary" className="me-auto w-75 text-center">Prev</Button>
          </Link>

        </Col>
        <Col lg={4} md={5} sm={5}>
          <Link to="/PaymentPage">
          <Button variant="primary" className="me-auto w-75 text-center" onClick={handleAddress}>Next</Button>
          </Link>
</Col>
      </Container>

    </Container>
  );
}

export default AddressInfo;
