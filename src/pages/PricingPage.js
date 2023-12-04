import Navigation from "../common/Navigation";
import "../styles/Pricingpage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HeaderBanner from "../common/HeaderBanner";
import Footer from "../common/Footer";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {axiosInstance} from "../services/AxiosInstance"
import axios from "axios";



function PricingPage() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services,setServices] = useState()

const pricingContent=()=>{
  axiosInstance.get('/services/')
  .then((resp)=>{
    console.log(resp.data)
    setServices(resp.data)

  })
}
useEffect(()=>{
  pricingContent()
},[])




  const filteredData = services?.filter((item) => {
    if (selectedCategory === "All") {
      return true; 
    } else if (selectedCategory === "Wash & Fold") {
      return item.desc === "Washed & Fold";
    } else if(selectedCategory === "Washing"){
      return true;
    } else if (selectedCategory==="Iron"){
      return item.desc === "Dry Clean & Iron"
    }else if(selectedCategory==="Dry Clean"){
      return item.desc === "Dry Clean & Iron"
    }else if(selectedCategory === "Steam Iron"){
      return item.desc === "Dry Clean & Iron"
    } else if(selectedCategory === "Curtain Wash"){
      return item.desc === "Washed & Fold";
    }
  });


  

  return (
    <div>
      <Navigation />
      <HeaderBanner
      pageTitle="Pricing"
      currentPage="Pricing"
      />
      <div className="pricing-clothtype-header container text-center mt-5 pt-4">
        <p className="pricing-ptag fw-100 fs-4">Pricing</p>
        <h1 className="fw-bold">Check Our Affordable Prices</h1>
        <div className="cloth-title-div d-flex justify-content-center text-center mt-4">
          <ul className="cloth-title-div-ul flex-wrap">
          <li
            className={selectedCategory === "All" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </li>
          <li
            className={selectedCategory === "Washing" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Washing")}
          >
            Washing
          </li>
          <li
            className={selectedCategory === "Iron" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Iron")}
          >
            Iron
          </li>
          <li
            className={selectedCategory === "Wash & Fold" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Wash & Fold")}
          >
            Wash & Fold
          </li>
          <li
            className={selectedCategory === "Dry Clean" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Dry Clean")}
          >
            Dry Clean
          </li>
          <li
            className={selectedCategory === "Steam Iron" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Steam Iron")}
          >
            Steam Iron
          </li>
          <li
            className={selectedCategory === "Curtain Wash" ? "all-ptag selected" : ""}
            onClick={() => setSelectedCategory("Curtain Wash")}
          >
            Curtain Wash
          </li>

          </ul>

        </div>
      </div>
      <Container fluid className="price-container-0">
      <Row className="justify-content-center gap-0 column-gap-5">
      {filteredData?.map((item, index)=>(
        <Col xs={6} md={3} className={`price-container shadow text-center pt-5 pb-5 ${index >= 0 ? 'mt-5' : ''}`}>
        <img src={item.image} className="w-25" alt="" />
        <p className="fw-bold fs-5 mt-3">{item.name}</p>
        <p>{item.desc}</p>
        <h2 className="cloth-price-ptag fw-bold">{item.price}</h2>
        <Button className="pricing-order-button border-0 mt-2 fw-bold btn-md" size="lg" style={{ whiteSpace: 'nowrap' }}>
        ORDER NOW
      </Button>{' '}
      </Col>
        ))}

      </Row>

    </Container>

    <Footer/>



    
    </div>
  );
}

export default PricingPage;
