import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateOrder() {
  const [clothTypes, setclothTypes] = useState();
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [clothDetails,setClothDetails] = useState()
  const [customerDetails,setcustomerDetails]=useState()
  const [clothId,setClothId]=useState()
  const [createdOrder,setcreatedOrder]=useState()
  const [sheduleDate,setsheduleDate]=useState()
  const [deliveryAddress,setdeliveryAddress]=useState({
    FullAddress:""
  })

  const [selectedTime, setSelectedTime] = useState(() => {
    const storedTime = localStorage.getItem("AdminSelectedTime");
    return storedTime ? JSON.parse(storedTime) : "";
  });

  const customerId = JSON.parse(localStorage.getItem('UserId'))

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axiosInstance.get("cloth/").then((resp) => {
      setclothTypes(resp.data);
    });
  }, []);

  const handleInputChange = (e) => {
    // const value = e.target.value
    setClothDetails({
       ...clothDetails ,serviceType: e.target.name
    })
  };



  const handleCustomerData=(e)=>{
    const value = e.target.value
    setcustomerDetails({
      ...customerDetails, [e.target.name]:value 
    })
    handleAddress()
  }


  const getClothDetails =(id)=>{
    setSmShow(true)
    setClothId((prev) => [...(prev || []), id]);
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleDate=(e)=>{
    setsheduleDate(e.target.value)
  }

  console.log(sheduleDate)

  const [activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNo, time) => {
    setActiveBtn(btnNo);
    handleTimeChange(time);
  };



  const OrderDetails = {
    customer_id:customerId,
    clothtype_ids:clothId,
    pickuptime:selectedTime,
    deliveryAddress:deliveryAddress,
    delivery_type:clothDetails?.serviceType,
    schedule_date:sheduleDate,
    subtotal:""

  }

  console.log(OrderDetails)



  const CreateOrder=()=>{
    axios.post(`${process.env.REACT_APP_BASE_URL}/order/create`,OrderDetails)
    .then((resp)=>{
      console.log(resp.data)
      setcreatedOrder(resp.data)
      toast.success('order created succesfully')
    })
  }

  

  const Creatuser=()=>{
    axiosInstance.post('/users/auth/register',customerDetails)
    .then((resp)=>{
      toast.success('user created succesfully')
      setTimeout(() => {
        handleClose()
      }, 1000);

    })
  }

  const handleAddress = () => {
    setdeliveryAddress({
      FullAddress: customerDetails?.address || ""
    });
  };
  

  console.log(deliveryAddress)


  return (
    <div>
      <ToastContainer position="top-center" />
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Name"
                autoFocus
                onChange={handleCustomerData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter phone Number"
                autoFocus
                onChange={handleCustomerData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleCustomerData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                autoFocus
                name="address"
                onChange={handleCustomerData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                name="password"
                onChange={handleCustomerData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info text-white" onClick={Creatuser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
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
              <button onClick={()=>setSmShow(false)}>Add</button>
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
                    <button onClick={handleShow}>+Add</button>
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
                    <input type="date" onChange={handleDate} className="time-btn-input01" />
                  </div>
                </div>
                <div className="cart-card">
                  <table className="cart-card-table">
                    <thead className="cart-card-thead">
                      <tr>
                        <th className="cart-card-thead-th1">Service</th>
                        <th className="cart-card-thead-th2">Date</th>
                        <th className="cart-card-thead-th3">Qty</th>
                        <th className="cart-card-thead-th4">Time</th>
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
                        <button className="save-continue-btn1" onClick={()=>CreateOrder()}>Save And Continue</button>
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
