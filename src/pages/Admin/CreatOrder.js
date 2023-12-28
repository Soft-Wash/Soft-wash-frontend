import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import axios from "axios";

function CreateOrder() {
  const [clothTypes, setclothTypes] = useState();
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [clothDetails,setClothDetails] = useState()
  const [clothid,setClothid]=useState()
  const [singleCloth,setsingleCloth]=useState()

  const [selectedTime, setSelectedTime] = useState(() => {
    const storedTime = localStorage.getItem("AdminSelectedTime");
    return storedTime ? JSON.parse(storedTime) : "";
  });

  useEffect(() => {
    axiosInstance.get("cloth/").then((resp) => {
      console.log(resp.data);
      setclothTypes(resp.data);
    });
  }, []);

  const handleInputChange = (e) => {
    // const value = e.target.value
    setClothDetails({
       ...clothDetails ,serviceType: e.target.name
    })
  };

  console.log(clothDetails);

  const getClothDetails =(id)=>{
    setSmShow(true)
    setClothid(id)
  }
  console.log(clothid)

  const AddService = () => {

  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const [activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNo, time) => {
    setActiveBtn(btnNo);
    handleTimeChange(time);
  };

  const getSingleOrder=()=>{
    axios.post(`${process.env.REACT_APP_BASE_URL}/order/create`)
    .then((resp)=>{
      console.log(resp.data)
      setsingleCloth(resp.data)

    })
  }

  return (
    <div>
      <div>
        <>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Add Service Type
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="radio-div">
                <div className="radio-div-innerd">
                  <input type="radio" name="PickUpAndDevlivery" onChange={handleInputChange} checked={clothDetails?.serviceType === "PickUpAndDevlivery"}/>
                </div>
                <p>Pick Up And Delivery</p>
              </div>
              <div className="radio-div">
                <div className="radio-div-innerd">
                  <input type="radio" name="PickUpOnly" onChange={handleInputChange} checked={clothDetails?.serviceType === "PickUpOnly"}/>
                </div>

                <p>Pick Up Only</p>
              </div>
            </Modal.Body>
            <div className="modal-addbtn">
              <button onClick={()=>getSingleOrder()}>Add</button>
            </div>
          </Modal>
        </>
      </div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="createorder-content-container">
          <div className="createorder-content">
            <h3>Add Order</h3>
            <hr className="createorder-content-hr" />
            <div className="cloth-card">
              <div className="cloth-card-div1">
                {clothTypes &&
                  clothTypes.map((item) => (
                    <>
                      <div className="cloth-border">
                        <img
                          src={item?.img}
                          alt=""
                          onClick={() =>getClothDetails(item._id) }
                        />
                        <p className="cloth-border-p">{item.name}</p>
                      </div>
                    </>
                  ))}
              </div>
              <div className="cloth-card-div2">
                <div className="cloth-card-div2-innerd1">
                  <div>
                    <input type="text" placeholder="Enter Customer Name" />
                  </div>

                  <div>
                    <button>+Add</button>
                  </div>
                </div>

                <div className="time-btns">
                  <Button
                    className="booking-time-btn2 px-2 my-3"
                    variant={activeBtn === 1 ? "info" : "light"}
                    onClick={() => handleBtnClick(1, "08:00 - 10:00 AM")}
                  >
                    08:00-10:00 AM
                  </Button>
                  <Button
                    className="booking-time-btn2 px-2 my-3"
                    variant={activeBtn === 2 ? "info" : "light"}
                    onClick={() => handleBtnClick(2, "04:00 - 07:00 PM")}
                  >
                    04:00-07:00 PM
                  </Button>
                  <div className="time-btn-input01-div">
                    <input type="date" className="time-btn-input01" />
                  </div>
                </div>
                <div className="cart-card">
                  <table className="cart-card-table">
                    <thead className="cart-card-thead">
                      <tr>
                        <th className="cart-card-thead-th1">Service</th>
                        <th className="cart-card-thead-th2">Color</th>
                        <th className="cart-card-thead-th3">Qty</th>
                        <th className="cart-card-thead-th4">Rate</th>
                        <th className="cart-card-thead-th5">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="cart-card-tbody">
                      <tr>
                        <th className="cart-card-thead-th1">
                          Shirt <span>[Wash]</span>
                        </th>
                        <th className="cart-card-thead-th2">Black</th>
                        <th className="cart-card2-thead-th3">
                          <div className="cart-card2-thead-th3-innerd">
                            <input type="text" />
                          </div>
                        </th>
                        <th className="cart-card-thead-th4">25</th>
                        <th className="cart-card-thead-th5">25</th>
                      </tr>

                    </tbody>

                  </table>
                  <div className="save-continue">
                        <button className="save-continue-btn1">Save And Continue</button>
                        <button className="save-continue-btn2">Clear All</button>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
