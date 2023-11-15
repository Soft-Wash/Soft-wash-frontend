import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";

function SelectedCart() {
  const [selectedItems,setSelectedItems]= useState()
  let arrayObj=[]
  
  const getQuantity = () => {
    const clothQuantity = localStorage.getItem("clothQuantity");
    const clothQuantities = JSON.parse(clothQuantity);
    const keys = Object.keys(clothQuantities);
    const values = Object.values(clothQuantities);
    arrayObj = keys;
    let mainArr = keys.map((key, index) => ({ id: key, quantity: values[index] }));
    console.log(mainArr)
    axios.put(`${process.env.REACT_APP_BASE_URL}/cloth/updatequantity`, mainArr)
    .then((resp) => {
      setSelectedItems(resp.data)
     })

  };

  useEffect(() => {
    getQuantity()
  }, []);






  return (
    <Container>
      <div className="">
        <div className="d-flex justify-content-between border-bottom pb-3">
          <h3 className="date-headers">Selected Items</h3>
          <Button className="px-4 " variant="primary">
            Edit
          </Button>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mens Wear</Accordion.Header>
              <Accordion.Body>
                {selectedItems && selectedItems.map((item)=>(
                                  <div className="cart-item" key={item._id}>
                                  <div className="d-flex justify-content-between">
                                    <h5>{item.name}</h5>
                                    <h5>{item.price}</h5>
                                  </div>
                                  <p>{`${item.quantity} x ${item.price} / per piece`}</p>
                                </div>  
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
}

export default SelectedCart;
