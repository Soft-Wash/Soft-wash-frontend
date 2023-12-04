import Navigation from "../common/Navigation";
import "../styles/Services.css";
import { FaChevronRight } from "react-icons/fa";
import { Container, Col, Row, Card } from "react-bootstrap";
import OurServicesCard from "../components/OurServices/OurServiceCard";
import washingmachineImg from "../assets/Services/Images/washing-icon.png";
import ironImg from "../assets/Services/Images/iron-icon.png";
import foldClothImg from "../assets/Services/Images/wash-fold-icon.png";
import dryClean from "../assets/Services/Images/dry-clean-icon.png";
import steamIron from "../assets/Services/Images/steam-iron-icon.png";
import CurtainsWash from "../assets/Services/Images/curtains-icon.png";
import whyUsImg from "../assets/Services/Images/why-us-img.png";
import Button from "react-bootstrap/Button";
import Footer from "../common/Footer";
import { useState,useEffect } from "react";
import HeaderBanner from "../common/HeaderBanner";
import { useNavigate } from "react-router-dom";

function Services() {

  const Navigate = useNavigate()
  const userToken = JSON.parse(localStorage.getItem("softwashLoginToken"))

function checkLogin(){
  if (!userToken){
    Navigate('/userLogin')
  } else{
    Navigate('/ClothesSelection')
  }
}
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);



  return (
    <div>
      <Navigation />
      <HeaderBanner
      pageTitle="Services"
      currentPage="Services"/>
      <Container fluid className="servicebg-container">
        <Col className="service-title-div align-center pt-5 pb-5">
          <p className="title-ptag fs-5">Stay Clean And Dress Well</p>
          <h1 className=" fw-bold">Our Services</h1>
        </Col>
        <Container>
          <Row className="gap-0 ">
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={washingmachineImg}
                title={"Washing"}
                text={"Our washing service takes care of your clothes, ensuring they are clean and fresh"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={ironImg}
                title={"Iron"}
                text={"For that crisp, polished look, trust our ironing service. "}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="md-text-align">
              <OurServicesCard
                image={foldClothImg}
                title={"Wash and Fold"}
                text={"Need your clothes washed and neatly folded? Our wash and fold services"}
              />
            </Col>
          </Row>
          <Row className="gap-0 ">
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={dryClean}
                title={"Dry Clean"}
                text={" Our dry cleaning service is tailored to handle these items with precision"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={steamIron}
                title={"Steam Iron"}
                text={"When it comes to ironing, we don't just press your clothes; we do it with finesse"}
              />
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="md-align-center md-text-align"
            >
              <OurServicesCard
                image={CurtainsWash}
                title={"Curtains Wash"}
                text={"Curtains need love too! Our curtain wash service ensures your curtains are clean"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col xs={12} md={6}     className={`animated-col-left ${animate ? "slide-in" : ""}`}>
            <Card className="bg-Img_Card border-0 mt-5">
              <img src={whyUsImg} className="image-fluid" alt="" />
            </Card>
          </Col>
          <Col xs={12} md={6}       className={`animated-col-right mt-5 ${animate ? "slide-in" : ""}`}>
            <Card className="border-0 mt-5">
              <h1 className="fw-bold">Why Choose Us</h1>
              <p className="w-75">
                 At Soft Wash Laundry, we're committed to
                providing you with the highest quality laundry services. Your
                clothes are not just garments; they are an investment. We handle
                each item with utmost care, ensuring they look as good as new.
                 Say goodbye to the hassles of doing
                laundry yourself. We offer a seamless, hassle-free experience.
                With our pick-up and delivery services, you can enjoy your free
                time while we take care of your laundry needs.
              </p>
              <div>
                <Button variant="info" className=" text-white" size="lg" onClick={checkLogin}>
                  SCHEDULE PICKUP
                </Button>{" "}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
