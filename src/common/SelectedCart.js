import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";

function SelectedCart() {
  const [selectedItems, setSelectedItems] = useState();
  let arrayObj = [];

  const getQuantity = () => {
    const clothQuantity = localStorage.getItem("clothQuantity");
    const clothQuantities = JSON.parse(clothQuantity);
    const keys = Object.keys(clothQuantities);
    const values = Object.values(clothQuantities);
    // let sum = 0;
    // 0 += Number(item.quantity * item.price)
    arrayObj = keys;
    let mainArr = keys.map((key, index) => ({
      id: key,
      quantity: values[index],
    }));
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/cloth/updatequantity`, mainArr)
      .then((resp) => {
        setSelectedItems(resp.data);
        localStorage.setItem("softCart", JSON.stringify(resp.data));
      });
  };

        // Calculate Sub Total
        const [subTotal, setSubtotal] = useState()
        const [total, setTotal] = useState()
        function calcSubTotal(arr){
            let sub_total = 0;
            let deliveryFee = 1500
            arr?.map((item) => {
                let item_price = parseInt(item.price) * item.quantity
                sub_total += item_price
                const total =sub_total + deliveryFee 
                setTotal(total)
            })
            setSubtotal(sub_total)
        
        }


  useEffect(() => {
    getQuantity();
    calcSubTotal(JSON.parse(localStorage.getItem('softCart')))
  }, []);

  return (
    <Container fluid>
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
              <Accordion.Header>Mini Cart</Accordion.Header>
              <Accordion.Body>
                {selectedItems &&
                  selectedItems.map((item) => (
                    <div className="cart-item" key={item._id}>
                      <div className="d-flex justify-content-between">
                        <h5 className="fs-6">{item.name}</h5>
                        <h5 className="fs-6">{`N${(
                          item.quantity * item.price
                        ).toFixed(2)}`}</h5>
                      </div>
                      <p>{`${item.quantity} x ${item.price} / per piece`}</p>
                     
                    </div>
                  ))}
                   <div className="d-flex justify-content-between">
                        <b className="fs-6">Sub Total: </b>
                        <b className="fs-6">{subTotal}</b>
                      </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
}

export default SelectedCart;
