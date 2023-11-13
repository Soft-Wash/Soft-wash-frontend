import { Dropdown } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import img from "../../assets/icons/linkedin.png";

function Navigation() {
  return (
    <div className="user-dashboard-nav  bg-body-white shadow-sm pe-3" style={{height:"55px"}}>
      <div className=" position-relative fs-6" style={{ top: "0px", right: "0px", height: "20px", width: "40px" }}>
        <small
          className=" d-flex align-items-center p-1 position-absolute bg-danger text-white fs-6 rounded-circle border border-white"
          style={{top:"-4px", right:"9px", height:"20px"}}
        >
          3
        </small>
        <BsBell className=" fs-4 mr-0" />
      </div>
      
      <div className="my-auto h-100">
        <Dropdown className="d-inline mx-2 my-auto h-100"
        align={{ lg: 'end', sm: "start"}}>
            
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="bg-transparent text-black border-0 p-0"
          >
            <img
              src={img}
              alt="profile"
              className="img-fluid "
              style={{ height: "36px", width: "auto" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="mt-4 me-2">
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navigation;
