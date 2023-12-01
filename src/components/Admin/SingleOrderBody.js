import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanSingleOrder.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";

function SingleOrderBody() {
  const [progress, setProgress] = useState(
    parseFloat(localStorage.getItem("orderProgress")) || 0
  );

  const [selectedOption, setSelectedOption] = useState("Order Placed");
  const [order, setOrder] = useState(null);
  const [indexFound, setIndexFound] = useState(0);

  const { _id } = useParams();
  console.log(_id)

  const orderStatusArray = [
    "Order Placed",
    "Confirmed",
    "Received",
    "Cleaning",
    "Ready",
    "Shipped",
    "Delivered",
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${_id}/order`)
      .then((resp) => {
        console.log(resp);
        setOrder(resp.data);
        setIndexFound(orderStatusArray.indexOf(resp.data.status));
        console.log(orderStatusArray.indexOf(resp.data.status));
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);



  const handleSeleectChange = async (e) => {
    setSelectedOption(e.target.value);

      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
          branch_id: "655debc4ec7b0b6e0f591bf7",
        })
        .then((resp) => {
          console.log(resp.data);
					setIndexFound(orderStatusArray.indexOf(selectedOption));
          localStorage.setItem("orderProgress", progress);
        });
  
  };

  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>ORDER DETAILS</h2>
        </div>
        <div className="washman-single-order-content">
          {order &&
            Object.entries(order).map(([key, value]) =>
              typeof value === "string" ? (
                <div key={key} className="washman-profile-field">
                  <h4>{key}</h4>
                  <h4>{value}</h4>
                </div>
              ) : null
            )}

          <div className="washman-profile-field">
            <h4>Order Status</h4>
            <select onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="" hidden>
                Select Status
              </option>
              <option value="Order Placed">ORDER PLACED</option>
              <option value="Confirmed">CONFIRMED</option>
              <option value="Received">RECEIVED</option>
              <option value="Cleaning">CLEANING</option>
              <option value="Ready">READY</option>
              <option value="Shipped">SHIPPED</option>
              <option value="Delivered">DELIVERED</option>
            </select>
          </div>
        </div>
        <Button
          className="edit-washman-profile-btn"
          onClick={handleSeleectChange}
        >
          Update Order
        </Button>
      </div>
      <div className="progress">
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
              className={`progress_bar ${
                indexFound >= index ? "progress_bar_active" : null
              }`}
            ></div>
            <p className="status-description">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleOrderBody;
