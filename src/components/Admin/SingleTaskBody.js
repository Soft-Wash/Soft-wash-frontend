import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Admin/SingleTaskPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

function SingleTaskBody() {
  const [progress, setProgress] = useState(
    parseFloat(localStorage.getItem("orderProgress")) || 0
  );

  const [selectedOption, setSelectedOption] = useState("Order Placed");
  const [task, setTask] = useState(null);
  const [indexFound, setIndexFound] = useState(0);

  const { _id } = useParams();
  console.log(_id)

  const taskStatusArray = [
    "pending",
    "inprogress",
    "completed",,
  ];

  useEffect(() => {
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
  }, []);



  const handleSeleectChange = async (e) => {
    setSelectedOption(e.target.value);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/task/${_id}/update`, {
          status: selectedOption,
          // branch_id: "655debc4ec7b0b6e0f591bf7",
        })
        .then((resp) => {
					setIndexFound(taskStatusArray.indexOf(selectedOption));
          localStorage.setItem("orderProgress", progress);
        });
  
  };

  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>TASK DETAILS</h2>
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
              <option value="pending">Pending</option>
              <option value="inprogress">Inprogress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <Button
          className="edit-washman-profile-btn"
          onClick={handleSeleectChange}
        >
          Update Task
        </Button>
      </div>
      <div className="progress2">
        {taskStatusArray.map((status, index) => (
          <div className="progress_content2" key={index}>
            <div
              className={`progress_circle2 ${
                indexFound >= index ? "progress-fill2" : null
              }`}
            >
              {indexFound >= index && (
                <FaCheck className="progress-check2" />
              )}
            </div>
            <div
              className={`progress_bar2 ${
                indexFound >= index ? "progress_bar_active2" : null
              }`}
            ></div>
            <p className="status-description">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleTaskBody;
