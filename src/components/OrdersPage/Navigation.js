import { Dropdown } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import logo from '../../assets/Orders/SoftWash.png'
import img from "../../assets/icons/linkedin.png";
import '../../styles/orderNavigation.css'

function Navigation() {
  return (
    <div
      className="w-100 user-dashboard-nav d-flex  bg-body-white shadow-sm pe-3"
      style={{ height: "55px", display: "flex" }}
    >
      <div className=" mx-auto d-flex lg-display-none">
        <img src={logo} alt="img-fluid my-auto" />
      </div>

      <div className="d-flex ">
        <div
          className=" position-relative fs-6"
          style={{ top: "0px", right: "0px", height: "20px", width: "40px" }}
        >
          <small
            className=" d-flex align-items-center p-1 position-absolute bg-danger text-white fs-6 rounded-circle border border-white"
            style={{ top: "-4px", right: "9px", height: "20px" }}
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
                src={img}
                alt="profile"
                className="img-fluid "
                style={{ height: "30px", width: "auto" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-4 me-2">
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
     </div>
  );
}

export default Navigation;
