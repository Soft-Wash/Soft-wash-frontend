import { BsBell } from "react-icons/bs";
import user from "../../assets/FrontDesk/user.png";
import logo from "../../assets/images/SoftWash.png";
import { Dropdown } from "react-bootstrap";
import "../../styles/orderNavigation.css";

function DashNav() {
  return (
    <div
      className="w-100  bg-body-white shadow-sm px-4 d-flex justify-content-between"
      style={{ height: "55px" }}
    >
      <div className="my-auto ">
        <img src={logo} alt="logo" className="img-fluid my-auto" />
      </div>

      <div className="d-flex my-auto ">
        <div
          className=" position-relative fs-6"
          style={{ top: "0px", right: "0px", height: "20px", width: "40px" , marginTop: "-5px" }}
        >
          <small
            className=" d-flex align-items-center position-absolute bg-danger text-white rounded-circle"
            style={{
              top: "-1px",
              right: "12px",
              height: "15px",
              width: "15px",
              fontSize: "10px",
              paddingLeft: "5px",
              paddingBottom: "2px",
            }}
          >
            3
          </small>
          <BsBell className=" fs-4 mr-0" />
        </div>

        <div className="my-auto h-100" style={{ width: "50px" }}>
          <Dropdown
            className="d-inline mx-2 my-auto h-100"
            align={{ lg: "start" }}
          >
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className="bg-transparent text-black border-0 p-0"
            >
              <img
                src={user}
                alt={"profile"}
                className="fluid img-fluid rounded-circle"
                style={{ width: "40px", height: "40px", marginTop: "-14px" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-2 me-2" style={{marginLeft: "-110px"}}>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
