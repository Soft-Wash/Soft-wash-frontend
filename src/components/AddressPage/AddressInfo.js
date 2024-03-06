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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import SelectedCart from "../../common/SelectedCart";

function AddressInfo() {
  const [selectedTime, setSelectedTime] = useState();
  const [customerId, setCustomerId] = useState();
  const [clothIds, setClothIds] = useState();
  let arrayObj = [];
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState();
  const [clicked, setClicked] = useState(false);
  const [err, setErr] = useState(false);
  const [customerDetails, setcustomerDetails] = useState();
  const [customerAddress, setcustomerAddress] = useState();



  // useEffect(() => {
  //   CheckUserAddress();
  //   const clothArray = JSON.parse(localStorage.getItem("softCart"))
  //   const calenderSelectedTime = localStorage.getItem("calenderSelectedTime");
  //   const parsedCalenderSelectedTime = calenderSelectedTime
  //     ? JSON.parse(calenderSelectedTime)
  //     : null;
  //   setSelectedTime(parsedCalenderSelectedTime);
  //   const calenderSetDate = localStorage.getItem("calenderStartDate");
  //   const storedDate = new Date(JSON.parse(calenderSetDate));
  //   const parsedCalenderSetDate = storedDate;
  //   setSelectedDate(parsedCalenderSetDate);
  //   const clothQuantity = localStorage.getItem("clothQuantity");
  //   const parsedClothQuantity = clothQuantity
  //     ? JSON.parse(clothQuantity)
  //     : null;
  //   if (parsedClothQuantity) {
  //     let keys = Object.keys(parsedClothQuantity);
  //     const values = Object.values(parsedClothQuantity);
  //     setClothIds(clothArray);
  //   }
  // }, []);

  const [selectedAddress, setSelectedAddress] = useState({
    contactNumber: "",
    FullAddress: "",
    SearchedAddress: "",
    AddressType: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.name.startsWith("AddressType")) {
      setSelectedAddress({ ...selectedAddress, AddressType: e.target.name });
    } else {
      setSelectedAddress({ ...selectedAddress, [e.target.name]: value });
    }
  };

  function postOrderAddress() {
    if (
      selectedAddress.contactNumber === "" ||
      selectedAddress.FullAddress === "" ||
      selectedAddress.SearchedAddress === "" ||
      selectedAddress.AddressType === ""
    ) {
      setErr(true);
      return;
    }

    const customer_id = localStorage.getItem("softwashLoginUser");
    const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
    const branch_id = JSON.parse(localStorage.getItem('branch_id'))
    localStorage.setItem("customerAddress",JSON.stringify(customerAddress))
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));


    // axiosInstance.post("/order/create", orderPostObj).then((resp) => {
    //   const orderId = resp.data._id;


    // });

     navigate(`/paymentpage`);
  }

  useEffect(() => {
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress) {
      setSelectedAddress(JSON.parse(storedAddress));
    }
  }, []);


  const handleCustomerAddress = (e) => {
    setClicked(true);
    if (e && e.target) {
      const value =
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.type === "file"
          ? e.target.file[0]
          : e.target.value;
      setcustomerAddress({ ...customerAddress, address: e.target.value });
    }
  };


  return (
    <Container>
       <Row lg={12} className="">
        <Col lg={8} md={12} sm={12}>
          <div className="w-100 border border-2 shadow-sm rounded py-4 px-3 ">
            <h4 className="text-primary mb-3 fw-semibold ps-2 text-capitalize">
              Choose your address
            </h4>
            {customerDetails?.address?.length ? (
              <div
                className={`w-100 d-flex justify-content-between gap-3 shadow-sm rounded py-4 mx-auto mx-0 ps-4 ${
                  clicked
                    ? "border bg-primary-subtle  shadow-sm border border-primary border-2 "
                    : null
                }`}
                style={{ width: "90%" }}
              >
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="address"
                  value={customerDetails?.address}
                  onChange={(e) => handleCustomerAddress(e)}
                />
                <Row className="w-100">
                  <p className="w-100 text-black fs-5 fw-semibold my-auto ">
                    {customerDetails?.address}
                  </p>
                </Row>
                <BsFillTrashFill
                  className="me-2 p-1 h-100 my-auto  border border-info rounded-circle text-info"
                  style={{ width: "30px", heigth: "auto" }}
                />
              </div>
            ) : (
              <p style={{ margin: "10px" }}>No Address Added Yet!</p>
            )}
          </div>
          <Row className="w-100 text-center my-4">
            <h3>Or</h3>
          </Row>
          <Row className="border border-2 shadow-sm rounded py-4 mx-1">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1"> 
                <Accordion.Header>Add Address</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter Contact Number"
                        aria-label="Enter Contact Number"
                        aria-describedby="basic-addon1"
                        name="contactNumber"
                        onChange={handleChange}
                        value={selectedAddress.contactNumber}
                      />
                    </InputGroup>
                    <p
                      className={`text-danger fw-semibold ${
                        err === true && selectedAddress.contactNumber === ""
                          ? ""
                          : "d-none"
                      }`}
                    >
                      Field Required
                    </p>
                  </Row>
                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter Full Address"
                        aria-label="Enter Full Address"
                        aria-describedby="basic-addon1"
                        name="FullAddress"
                        onChange={handleChange}
                        value={selectedAddress.FullAddress}
                      />
                    </InputGroup>
                    <p
                      className={`text-danger fw-semibold ${
                        err === true && selectedAddress.FullAddress === ""
                          ? ""
                          : "d-none"
                      }`}
                    >
                      Field Required
                    </p>
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
                    <p
                      className={`text-danger fw-semibold ${
                        err === true && selectedAddress.SearchedAddress === ""
                          ? ""
                          : "d-none"
                      }`}
                    >
                      Field Required
                    </p>
                  </Row>
                  <Row>
                    <img src={mapSample} alt="maps" />
                  </Row>
                  <Row className="d-flex">
                    <h5>Address Type</h5>
                    <Row>
                      <Form.Group className="d-flex gap-2">
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          onChange={handleChange}
                          name="AddressTypeHome"
                          checked={
                            selectedAddress.AddressType === "AddressTypeHome"
                          }
                        />
                        <Form.Label>Home</Form.Label>
                      </Form.Group>
                      <Form.Group className="d-flex gap-2">
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          onChange={handleChange}
                          name="AddressTypeWork"
                          checked={
                            selectedAddress.AddressType === "AddressTypeWork"
                          }
                        />
                        <Form.Label>Work</Form.Label>
                      </Form.Group>
                      <Form.Group className="d-flex gap-2">
                        <Form.Check
                          type="radio"
                          aria-label="radio 1"
                          onChange={handleChange}
                          name="AddressTypeOther"
                          checked={
                            selectedAddress.AddressType === "AddressTypeOther"
                          }
                        />
                        <Form.Label>Other</Form.Label>
                      </Form.Group>
                      <p
                        className={`text-danger fw-semibold ${
                          err === true && selectedAddress.AddressType === ""
                            ? ""
                            : "d-none"
                        }`}
                      >
                        Field Required
                      </p>
                    </Row>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>
        <div className="select-pickup-type date-body-right mx-1">
          <SelectedCart/>
          </div>
      </Row>

      <Container className="d-flex justify-content-center gap-3 w-100 text-center my-5">
        <Col lg={2} md={5} sm={5}>
          <Link to="/date">
            <Button
              variant="outline-primary"
              className="mx-auto px-3 w-100 text-center"
            >
              Previous
            </Button>
          </Link>
        </Col>
        <Col lg={2} md={5} sm={5}>
          {/* <Link to="/PaymentPage"> */}
          <Button
            variant="primary"
            className={`mx-auto px-4 w-100 text-center `}
            onClick={postOrderAddress}
          >
            Next
          </Button>
          {/* </Link> */}
        </Col>
      </Container>
    </Container>
  );
}

export default AddressInfo;
