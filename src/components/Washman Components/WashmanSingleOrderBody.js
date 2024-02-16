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

function WashmanSingleOrderBody() {
  const [progress, setProgress] = useState(
    parseFloat(localStorage.getItem("orderProgress")) || 0
  );

  const [selectedOption, setSelectedOption] = useState("Order Placed");
  const [task, setTask] = useState(null);
  const [indexFound, setIndexFound] = useState(0);

  const { _id } = useParams();



  const taskStatusArray = [
    "pending",
    "inprogress",
    "completed",
  ];

  useEffect(() => { 
    const getSingleTask = () => {
      axios
    .get(`${process.env.REACT_APP_BASE_URL}/task/${_id}/task`)
      .then((resp) => {
        setTask(resp.data);
        console.log(resp.data)
        setIndexFound(taskStatusArray.indexOf(resp.data.status));
        console.log(taskStatusArray.indexOf(resp.data.status));
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
    }
    getSingleTask();
  }, []);



  

  const handleSeleectChange = async (e) => {
    setSelectedOption(e.target.value);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/task/${_id}/update`, {
          status: selectedOption,
        })
        .then((resp) => {
          setIndexFound(taskStatusArray.indexOf(selectedOption));
          localStorage.setItem("orderProgress", progress);
        });
        console.log(selectedOption)
  
  };

  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>ORDER DETAILS</h2>
        </div>
        <div className="washman-single-order-content">
          {task &&
            Object.entries(task).map(([key, value]) =>
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
              <option value="pending">PENDING</option>
              <option value="inprogress">INPROGRESS</option>
              <option value="completed">COMPLETED</option>              
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
      <div className="progress" style={{width: "22%"}}>
        {taskStatusArray.map((status, index) => (
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

export default WashmanSingleOrderBody;
