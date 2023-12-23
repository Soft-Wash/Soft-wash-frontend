import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateOrder() {
  const [clothTypes, setclothTypes] = useState();
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

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

  const handleInputChange = () => {};

  const AddService = () => {};

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const[activeBtn, setActiveBtn] = useState(1);

  const handleBtnClick = (btnNo,time) => {
      setActiveBtn(btnNo)
      handleTimeChange(time)
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
                  <input type="radio" />
                </div>
                <p>Wash</p>
              </div>
              <div className="radio-div">
                <div className="radio-div-innerd">
                  <input type="radio" />
                </div>

                <p>Iron</p>
              </div>
              <div className="radio-div">
                <div className="radio-div-innerd">
                  <input type="radio" />
                </div>
                <p>Steam Iron</p>
              </div>
            </Modal.Body>
            <div className="modal-addbtn">
              <button>Add</button>
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
                          onClick={() => setSmShow(true)}
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
            <Button className="booking-time-btn2 px-2 my-3" 
            variant={activeBtn === 1 ? 'lightblue' : 'light'}
            onClick={() => handleBtnClick(1,"08:00 - 10:00 AM")}
            >
              08:00-10:00 AM
            </Button>
            <Button className="booking-time-btn2 px-2 my-3" 
            variant={activeBtn === 2 ? 'lightblue' : 'light'}
            onClick={() => handleBtnClick(2,"04:00 - 07:00 PM")}
            >
              04:00-07:00 PM
            </Button>
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
