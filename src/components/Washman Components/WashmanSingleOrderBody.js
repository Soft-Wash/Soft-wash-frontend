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
  const [order, setOrder] = useState(null);
	const [orderPlaced, setOrderPlaced]=useState()
	const [confirmed,setConfirmed]=useState()
	const [recieved,setRecieved]=useState()
	const [cleaning,setCleaning]=useState()
	const [ready,setReady]=useState()
	const [shipped,setShipped]=useState()
	const [delivered,setDelivered]=useState()
	
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/${_id}/order`)
      .then((resp) => {
        console.log(resp);
        setOrder(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);

  const handleButtonClick = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 14.29, 100.03));
  };

  const handleSeleectChange = async (e) => {
    setSelectedOption(e.target.value);

    if (selectedOption === "Order Placed") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					handleButtonClick()
					localStorage.setItem("orderProgress", progress);
					setOrderPlaced(resp.data)
        });
		
    } else if (selectedOption === "Confirmed") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setConfirmed(resp.data)
        });

    } else if (selectedOption === "Recieved") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setRecieved(resp.data)
        });
    } else if (selectedOption === "Cleaning") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setCleaning(resp.data)
        });
    } else if (selectedOption === "Ready") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setReady(resp.data)
        });
    } else if (selectedOption === "Shipped") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setShipped(resp.data)
        });
    } else if (selectedOption === "Delivered") {
      console.log(selectedOption);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {
          status: selectedOption,
					branch_id:"655debc4ec7b0b6e0f591bf7"
        })
        .then((resp) => {
          console.log(resp.data);
					localStorage.setItem("orderProgress", progress);
					handleButtonClick()
					setDelivered(resp.data)
        });
    }
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
						<option value="" hidden>Select Status</option>
              <option value="Order Placed">ORDER PLACED</option>
              <option value="Confirmed">CONFIRMED</option>
              <option value="Recieved">RECEIVED</option>
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
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 14.29 ? "progress-fill" : null}`}>
					{progress >= 14.29 && (<FaCheck className="progress-ckeck" />)}

				</div>
        <div className={`progress_bar ${progress >= 28.58? "progress_bar_active" : null}`}></div>
        <p className="">Order placed</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 28.58 ? "progress-fill" : null}`}>
				{progress >= 28.58 && (				<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 42.87 ? "progress_bar_active" : null}`}></div>
        <p>confirmed</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 42.87 ? "progress-fill" : null}`}>
				{progress >= 42.87 && (<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 57.16 ? "progress_bar_active" : null}`}>
				</div>
        <p>Recieved</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 57.16 ? "progress-fill" : null}` }>
				{progress >= 57.16 && (<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 71.45 ? "progress_bar_active" : null}`}></div>
        <p>Cleaning</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 71.45 ? "progress-fill" : null}` }>
				{progress >= 69.45 && (<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 85.74 ? "progress_bar_active" : null}` }></div>
        <p>ready</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 85.74 ? "progress-fill" : null}` }>
				{progress >= 82.74 && (<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 100.03 ? "progress_bar_active" : null}` }></div>
        <p>shipped</p>
      </div>
      <div className="progress_content">
        <div className={`progress_circle ${progress >= 100.03 ? "progress-fill" : null}` }>
				{progress >= 97.03 && (<FaCheck className="progress-ckeck" />)}
				</div>
        <div className={`progress_bar ${progress >= 100.03 ? "progress_bar_active" : null}` }></div>
        <p>delivered</p>
      </div>
    </div>
      <button className="btn" onClick={() => handleButtonClick()}>
        Next
      </button>
    </div>
  );
}

export default WashmanSingleOrderBody;
