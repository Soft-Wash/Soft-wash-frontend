import Navigation from "../common/Navigation";
import { FaChevronRight } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import ServicerateBanner from "../assets/aboutpage/images/services-img.png";
import aboutsectionImg from "../assets/aboutpage/images/about-section-img.png";
import clients from "../assets/aboutpage/images/clients-icon.png";
import laundryIcon from "../assets/aboutpage/images/laundry-icon.png";
import teamIcon from "../assets/aboutpage/images/team-icon.png";
import pieceImage from "../assets/aboutpage/images/pieces-icon.png";
import Testimonial from "../common/Testimonial";
import testimonialIcon from "../assets/aboutpage/images/testimonial-icon.png";
import clientImage from "../assets/aboutpage/images/client1.png";
import "../styles/about.css";
import React, { Component } from "react";
import Slider from "react-slick";
import SectionSeven from "../components/HomePage/SectionSeven"
import Footer from "../common/Footer";
import "../styles/Services.css"
import { useState,useEffect } from "react";
import HeaderBanner from "../common/HeaderBanner";



function About() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);


  return (
    <div>
      <Navigation />
      <HeaderBanner
      pageTitle="About"
      currentPage="About"
      />
      <Container>
        <Row className="mt-5">
          <Col sm={12} md={6} lg={6}>
            <Card className={`animated-col-left border-0 ${animate? 'slide-in':''}`}>
              <p className="about-text-0 w-md-75 fs-2 ">
                We Provide <span className="fw-bold">Professional Care</span>{" "}
                That Is Reliable At{" "}
                <span className="fw-bold">Affordable Price</span>
              </p>
              <p className="about-text">
                Softwash Laundry is your trusted partner for all your laundry
                needs. With a commitment to quality and care, we take the hassle
                out of keeping your garments fresh and looking their best. Our
                professional team ensures that each item is treated with
                precision, whether it's washing, ironing, dry cleaning, or fold
                services. We understand that your clothes are more than just
                fabrics; they are an investment. That's why we handle them with
                the utmost attention and dedication. What sets us apart is our
                seamless, hassle-free experience, including convenient pick-up
                and delivery services.
              </p>
              <img
                src={ServicerateBanner}
                className="img-fluid service-img OurServicesCard"
                alt=""
              />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Card className="border-0 scale-out">
              <img
                src={aboutsectionImg}
                className="img-fluid about-sectionImg OurServicesCard"
                alt=""
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <section className="stats-container">
        <div className="stat-containter container-fluid">
          <div className="stat-row row">
            <div className="stat-div col-md-3 d-flex flex-column align-items-center mt-md-0">
              <div className="circle-border rounded-circle">
                <img src={clients} className="client-img" alt="" />
              </div>
              <h1 className="text-white">450+</h1>
              <p className="text-white">Clients per week</p>
            </div>

            <div className="col-md-3 d-flex flex-column align-items-center mt-md-0">
              <div className="circle-border rounded-circle">
                <img src={laundryIcon} className="client-img" alt="" />
              </div>
              <h1 className="text-white">12000+</h1>
              <p className="text-white">kg's of laundry per week</p>
            </div>

            <div className="col-md-3 d-flex flex-column align-items-center mt-md-0">
              <div className="circle-border rounded-circle">
                <img src={teamIcon} className="client-img" alt="" />
              </div>
              <h1 className="text-white">12000+</h1>
              <p className="text-white">kg's of laundry per week</p>
            </div>

            <div className="col-md-3 d-flex flex-column align-items-center mt-md-0">
              <div className="circle-border rounded-circle">
                <img src={pieceImage} className="client-img" alt="" />
              </div>
              <h1 className="text-white">12000+</h1>
              <p className="text-white">kg's of laundry per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Container fluid className="testimonial-container text-center pt-5">
        <p className="fs-4 text-info mt-5">Testimonials</p>
        <h1 className="fw-bold">What Are Customer Say About Us</h1>
        <p className="">
          At Softwash Laundry, our ultimate goal is to exceed customer
          expectations and deliver top-notch laundry services.
        </p>


      </Container> */}
      <SectionSeven/>
      <Footer/>

    </div>
  );
}

export default About;
