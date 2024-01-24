import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Native from "../../assets/images/Native.png";
import Native2 from "../../assets/images/Native2.png";
import suits from "../../assets/images/suits.png";
import ClothesSelectCounter from "./ClothesSelectCounter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClothesSelectcart from "../../styles/ClothesSelectcart.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { variableManager } from "../../context/VariablesContext";

function ClothAccordian(prop,{initialQuantity}) {
  const [clothQuantity, setClothQuantity] = useState(initialQuantity);

    const increment = () => {
      setClothQuantity((prevQuantity) => prevQuantity + 1);
      sessionStorage.setItem("clothQuantity", JSON.stringify(clothQuantity));
    };
  
    const decrement = () => {
      setClothQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
      sessionStorage.setItem("clothQuantity", JSON.stringify(clothQuantity));
    };
  
    sessionStorage.setItem("clothQuantity", JSON.stringify(clothQuantity));
    const clothSelected=(clothId)=>{
      const selectedQuantity = sessionStorage.getItem('clothQuantity')
      const Quantity = JSON.parse(selectedQuantity)
      
      axiosInstance.put(`/cloth/${clothId}/updatequantity`,{Quantity})
      .then((resp)=>{
          console.log(resp.data)
  
      })
      .catch((err)=>{
          console.log(err)
      })
   }
  

  return (
    <div>
        <div className="">
          <div className="ImageContainer">
            <div className="d-flex align-items-center ">
              <div className="Image">
                <img
                  className="Imgselection"
                  src={prop.img}
                  alt="Native"/>
              </div>
              <div className="NamePrice">
                <h6>{prop.name}</h6>
                <span>&#8358;{`${prop.price} / per piece`}</span>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default ClothAccordian;
