import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../../assets/HomePage/images/hero-img.png";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BranchModal from "../BranchModal";

function SectionOne() {
  const Navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [branch_id, setbranch_id] = useState();



  function handleSchedulePickup() {
    const userToken = JSON.parse(localStorage.getItem("softwashLoginToken"));
    if (!userToken) {
      Navigate("/userLogin");
    } else {
      handleShow();
    }
  }



  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSaveBranch = (branchId) => {
    setbranch_id(branchId);
    handleClose();
  };

  


  return (
    <div className="sec-1-bg py-4">
      <ToastContainer position="top-center"/>
      <>
<BranchModal
isOpen={showModal} 
onClose={handleClose}
SaveBranch={handleSaveBranch} 
/>
      </>
      <Container className=" container01 ">
        <Row className="pt-5 align-items-center">
          <Col sm={12} md={6} className="left-right ">
            <Card className="border border-0">
              <div className="card-div1">
                <h1 className="text-info fs-2 fw-normal">We Clean, A lot.</h1>
                <h1 className="cloth_theme fw-bold fs-1 mt-4">
                  Washing Clothes Was <br /> Never So Easy
                </h1>
                <p className="mt-4 fs-5">
                  Our professional and experienced cleaning <br />
                  staff does the job right the first time.
                </p>
                {/* <Link to=""> */}
                <Button
                  variant="outline-info"
                  className="textwhite-hover mt-4"
                  size="lg"
                  onClick={handleSchedulePickup}
                >
                  SCHEDULE PICKUP
                </Button>{" "}
                {/* </Link> */}
              </div>
            </Card>
          </Col>
          <Col sm={12} md={6} className="scale-out hover-up ">
            <Card className="border border-0 position-relative">
              <img
                src={image1}
                alt=""
                className="w-60 img-fluid translateY-20 duration-300"
              />
              <div className=""></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionOne;
