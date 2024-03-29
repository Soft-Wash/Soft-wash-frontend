import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSearch } from "react-icons/bi";

function CreateOrder() {
  const [clothTypes, setclothTypes] = useState();
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [clothDetails, setClothDetails] = useState();
  const [customerDetails, setcustomerDetails] = useState();
  const [clothId, setClothId] = useState([]);
  const [createdOrder, setcreatedOrder] = useState();
  const [sheduleDate, setsheduleDate] = useState();
  const [clothName, setclothName] = useState();
  const [clothPrice, setclothPrice] = useState();
  const [selectedItems, setSelectedItems] = useState();
  const [filteredResult, setfilteredResult] = useState();
  const [selectedUser,setSelectedUser]=useState()
  const [deliveryAddress, setdeliveryAddress] = useState({
    FullAddress: "",
  });
  const [clothQuantity, setclothQuantity] = useState(0);
  const [MiniClothCart, setMiniClothCart] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const [isModal, setIsModal] = useState(false);
  const [createdUser,setCreatedUser]=useState()

  const [selectedTime, setSelectedTime] = useState(() => {
    const storedTime = localStorage.getItem("AdminSelectedTime");
    return storedTime ? JSON.parse(storedTime) : "";
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isMounted = true;
    axiosInstance.get("cloth/").then((resp) => {
      if (isMounted) {
        setclothTypes(resp.data);
      }
    });
    return;
  }, []);

  const handleInputChange = (e) => {
    setClothDetails({
      ...clothDetails,
      serviceType: e.target.name,
    });
  };

  const handleCustomerData = (e) => {
    const value = e.target.value;
    setcustomerDetails({
      ...customerDetails,
      [e.target.name]: value,
    });
    handleAddress();
  };

  const getClothDetails = (id, name, price) => {
    if (!clothId?.includes(id)) {
      setClothId((prev) => [id]);
      setclothName(name);
      setclothPrice(price);
    } else {
      toast.error("Cloth already selected");
    }
  };

  useEffect(() => {
    AddClothesToContent();
    return;
  }, [clothId]);

  const AddClothesToContent = () => {
    if (clothId?.length > 0) {
      const existingCloth = MiniClothCart.find((item) => item._id === clothId);
      if (existingCloth) {
        return toast.error("item already in cart");
      } else {
        // Also initialize the quantity for the new cloth in the clothQuantity state:
        setclothQuantity((prevValue) => ({
          ...prevValue,
          [clothId]: 1,
        }));
        // If the cloth is not in the cart, add a new entry:
        setMiniClothCart((prevCart) => [
          ...prevCart,
          {
            service: clothName,
            amount: clothPrice,
            _id: clothId,
            quantity: clothQuantity,
          },
        ]);
      }
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleDate = (e) => {
    setsheduleDate(e.target.value);
  };

  const [activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNo, time) => {
    setActiveBtn(btnNo);
    handleTimeChange(time);
  };

  const CreateOrder = () => {
    const customerId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    const keys = Object.keys(clothQuantity);
    const values = Object.values(clothQuantity);
    const mainArr = keys.map((key, index) => ({
      id: key,
      quantity: values[index],
    }));
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/cloth/updatequantity`, mainArr)
      .then((resp) => {
        setSelectedItems(resp.data);
        const OrderDetails = {
          customer_id: selectedUser?selectedUser:createdUser?._id,
          clothtype_ids: resp.data,
          pickuptime: selectedTime,
          deliveryAddress: deliveryAddress,
          delivery_type: clothDetails?.serviceType,
          schedule_date: sheduleDate,
          subtotal: totalPrice,
        };
        if (
          OrderDetails.clothtype_ids === undefined ||
          OrderDetails.pickuptime === undefined ||
          OrderDetails.deliveryAddress === undefined ||
          OrderDetails.schedule_date === undefined
        ) {
          toast.error("Please select all fields");
        } else if (
          OrderDetails.customer_id === undefined
        ) {
          toast.error("please create a customer");
        } else {
          axios
            .post(
              `${process.env.REACT_APP_BASE_URL}/order/create`,
              OrderDetails
            )
            .then((resp) => {
              setcreatedOrder(resp.data);
              toast.success("Order created successfully");
              setMiniClothCart([]);
            })
            .catch((error) => {
              console.error("Error creating order:", error);
              toast.error("Failed to create order");
            });
        }
      });
  };

  const ClearOrderDetails = () => {
    setMiniClothCart([]);
    setclothQuantity(0);
    setClothDetails("");
    setsheduleDate("");
  };

  const Creatuser = () => {
    axiosInstance.post("/users/auth/register", customerDetails).then((resp) => {
      toast.success("user created succesfully");
      setCreatedUser(resp.data)
      setTimeout(() => {
        handleClose();
      }, 1000);
    });
  };

  const handleAddress = () => {
    setdeliveryAddress({
      FullAddress: customerDetails?.address || "",
    });
  };

  const AddQuantity = (clothId) => {
    setclothQuantity((prevValue) => {
      const newQuantity = (prevValue[clothId] || 0) + 1;
      return { ...prevValue, [clothId]: newQuantity };
    });
  };

  const Substract = (clothId) => {
    setclothQuantity((prevValue) => {
      const newQuantity = Math.max((prevValue[clothId] || 0) - 1, 0);
      return { ...prevValue, [clothId]: newQuantity };
    });
  };

  const calculateQuantity = (cartItems) => {
    const total = cartItems.reduce((accumulator, cartItem) => {
      const price = cartItem.amount || 0;
      const itemTotal = clothQuantity[cartItem._id] * price;
      return accumulator + itemTotal;
    }, 0);

    settotalPrice(total);
  };


  const handleSearch = (name) => {
    axiosInstance
      .get(`/users/users/search?fullName=${name}`)
      .then((resp) => {
        setfilteredResult(resp.data);
        setIsModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFoundUser=(id)=>{
    setSelectedUser(id)
    toast.success("customer selected")
    setIsModal(false)
  }

  console.log(selectedUser)

  useEffect(() => {
    calculateQuantity(MiniClothCart);
  }, [MiniClothCart, clothQuantity]);

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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter Name"
                  autoFocus
                  onChange={handleCustomerData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="Enter phone Number"
                  autoFocus
                  onChange={handleCustomerData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleCustomerData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  autoFocus
                  name="address"
                  onChange={handleCustomerData}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                  <input
                    type="radio"
                    name="PickUpAndDevlivery"
                    onChange={handleInputChange}
                    checked={clothDetails?.serviceType === "PickUpAndDevlivery"}
                  />
                </div>
                <p>Pick Up And Delivery</p>
              </div>
              <div className="radio-div">
                <div className="radio-div-innerd">
                  <input
                    type="radio"
                    name="PickUpOnly"
                    onChange={handleInputChange}
                    checked={clothDetails?.serviceType === "PickUpOnly"}
                  />
                </div>

                <p>Pick Up Only</p>
              </div>
            </Modal.Body>
            <div className="modal-addbtn">
              <button onClick={() => setSmShow(false)}>Add</button>
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
                      <div className="cloth-border" key={item._id}>
                        <img
                          src={item?.img}
                          alt=""
                          onClick={() =>
                            getClothDetails(item._id, item.name, item.price)
                          }
                        />
                        <p className="cloth-border-p">{item.name}</p>
                      </div>
                    </>
                  ))}
              </div>
              <div className="cloth-card-div2">
                <div className="cloth-card-div2-innerd1">
                  <div className="Bisearch_input_div">
                    <input
                      type="text"
                      placeholder="Search Customer Name"
                      onChange={(e) => handleSearch(e.target.value)}
                      className="Bisearch_input"
                    />
                    <div className="Bisearch_icon_div">
                      <BiSearch className="Bisearch_icon" />
                    </div>
                    {isModal? (
                      <div className="search_display_card">
                        <div>
                          {filteredResult?.length > 0 ? (
                            filteredResult &&
                            filteredResult.map((item) => (
                              <p onClick={()=>handleFoundUser(item?._id)}>{item?.fullName} </p>
                            ))
                          ) : (
                            <p>User not</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => handleShow()}
                      className="create_customer"
                    >
                      +Create
                    </button>
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
                    <input
                      type="date"
                      onChange={handleDate}
                      className="time-btn-input01"
                    />
                  </div>
                </div>
                <div className="cart-card">
                  <table className="cart-card-table">
                    <thead className="cart-card-thead">
                      <tr>
                        <th className="cart-card-thead-th1">Service</th>
                        <th className="cart-card-thead-th3">Qty</th>
                        <th className="cart-card-thead-th5">Price</th>
                        <button
                          className="choose-service-btn"
                          onClick={() => setSmShow(true)}
                        >
                          Add Service Type
                        </button>
                      </tr>
                    </thead>
                    <tbody className="cart-card-tbody">
                      {MiniClothCart &&
                        MiniClothCart.map((item) => (
                          <tr>
                            <th className="cart-card-thead-th1">
                              {item?.service}
                            </th>
                            <th className="cart-card2-thead-th3">
                              <div className="cart-card2-thead-th3-innerd">
                                <input
                                  type="text"
                                  value={clothQuantity[item?._id] || 0}
                                  className="quantity_amount"
                                />
                              </div>
                              <div className="cart-card2-thead-btn-div">
                                <div className="minus-btn">
                                  <button onClick={() => Substract(item?._id)}>
                                    -
                                  </button>
                                </div>
                                <div className="add-btn">
                                  <button
                                    onClick={() => AddQuantity(item?._id)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </th>
                            <th className="cart-card-thead-th5">
                              {item.amount}
                            </th>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="save-continue">
                    <button
                      className="save-continue-btn1"
                      onClick={() => CreateOrder()}
                    >
                      Save And Continue
                    </button>
                    <button
                      className="save-continue-btn2"
                      onClick={() => ClearOrderDetails()}
                    >
                      Clear All
                    </button>
                    <div className="total-div">
                      <h4>
                        Total: <span>{totalPrice}</span>
                      </h4>
                    </div>
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
