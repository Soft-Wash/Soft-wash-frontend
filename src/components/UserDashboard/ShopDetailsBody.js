import "../../styles/ShopDetailsBody.css";
import {
  FaCircleInfo,
  FaHotTubPerson,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function ShopDetailsBody() {

  const [orderdetails, setorderDetails] = useState();
  const [pickUpDateValue, setpickUpDate] = useState();
  const [indexFound, setIndexFound] = useState(0);
  const orderStatusArray = [
    "Order Placed",
    "Confirmed",
    "Shipped",
    "Delivered",
  ];


  useEffect(() => {
    const orderplaced = "order placed"
    const cartOrderId = JSON.parse(localStorage.getItem("CartOrderDetailsId"));
    axios.get(`${process.env.REACT_APP_BASE_URL}/cartorder/${cartOrderId}/cartorder`).then((resp) => {
      console.log(resp.data);
      const statusIndex = orderStatusArray.indexOf(resp.data.status);
      setIndexFound(statusIndex >= 0 ? statusIndex : 0);
      console.log(resp.data.status)
      setorderDetails(resp.data);
    });
  }, []);

  console.log(indexFound)

  return (
    <div className="dashboard-bg">
      <h4 className="order-details-tag">Order Details</h4>

      <div className="user-dashboard-contact-body">
        <div className="order-header">
          <FaCircleInfo className="green-icon" />
          <h4>Order info</h4>
        </div>
        <div className="order-field">
          <h3>Order Id </h3>
          <p>{orderdetails?._id?.substring(0, orderdetails?._id?.length / 2)}</p>
        </div>
        <div className="order-field">
          <h3>Pickup Duration </h3>
          <p>3-4 working days</p>
        </div>
        <div className="order-field">
          <h3>Status</h3>
          <p>{orderdetails?.status}</p>
        </div>
        <div className="order-header">
          <FaHotTubPerson className="green-icon" />
          <h4>Item Detail</h4>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mini Wear</Accordion.Header>
            <Accordion.Body>
              {orderdetails?.cart_ids &&
                orderdetails?.cart_ids.map((item) => (
                  <div className="cart-item">
                    <div className="d-flex justify-content-between">
                      <h5>{item.product_id.name}</h5>
                      <h5>N{item.product_id.price}</h5>
                    </div>
                    <p>{`2 x N${item.product_id.price} / per piece`}</p>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="order-header">
          <FaMoneyCheckDollar className="green-icon" />
          <h4>Total Price</h4>
        </div>
        <div className="order-field">
          <h3>Sub-total Price</h3>
          <p>N{orderdetails?.total}</p>
        </div>
        <div className="order-field">
          <h3>VAT</h3>
          <p>7.5%</p>
        </div>
        <div className="order-field">
          <h3>Total</h3>
          <p>N{orderdetails?.total}</p>
        </div>
        <div className="progress001">
          {orderStatusArray.map((status, index) => (
            <div className="progress_content" key={index}>
              <div
                className={`progress_circle ${
                  indexFound >= index ? "progress-fill" : null
                }`}
              >
                {indexFound >= index && (
                  <FaCheck className="progress-check" />
                )}
              </div>
              <div
                className={`progress_bar1 ${
                  indexFound >= index ? "progress_bar_active" : null
                }`}
              ></div>
              <p className="status-description">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopDetailsBody;
