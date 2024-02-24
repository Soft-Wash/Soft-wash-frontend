import { Tooltip } from "bootstrap";
import {
  BsColumnsGap,
  BsCalendar4,
  BsCalendar2Plus,
  BsBox,
  BsChatSquareText,
  BsPower,
} from "react-icons/bs";
import { useState, useEffect, UseNavigate } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [toolTip, setToolTip] = useState(0);
  const navigate = useNavigate();

  const showToolTip = () => {
    setToolTip(true);
  };
  const hideToolTip = () => {
    setToolTip(0);
  };

  const handleLogout = () => {
    localStorage.removeItem("softwashLoginUser");
    localStorage.removeItem("softwashUserToken");
    navigate("/employeeLogin");
  };

  return (
    <div
      className=" list-unstyled pt-4"
      style={{ width: "50px", height: "80vh" }}
    >
      <li className="flex gap-4 mb-4">
        <span
          className="duration-500 position-relative"
          onMouseOver={() => setToolTip(1)}
          onMouseLeave={hideToolTip}
        >
          <BsColumnsGap className="col-12 fs-5" />
          {toolTip === 1 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Dashboard
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span
          className="position-relative"
          onMouseOver={() => setToolTip(2)}
          onMouseLeave={hideToolTip}
          onClick={() => navigate("/frontdesk/assign-task")}
        >
          <BsCalendar2Plus className="col-12 fs-5" />
          {toolTip === 2 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Assign order
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span
          className="position-relative"
          onMouseOver={() => setToolTip(3)}
          onMouseLeave={hideToolTip}
          onClick={() => navigate('/frontdesk/inventory')}
        >
          <BsBox className="col-12 fs-5" />
          {toolTip === 3 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Inventory
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span
          className="position-relative"
          onMouseOver={() => setToolTip(4)}
          onMouseLeave={hideToolTip}
          onClick={() => navigate('/frontdesk/reviews')}
        >
          <BsChatSquareText className="col-12 fs-5" />
          {toolTip === 4 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Reviews
            </div>
          )}
        </span>
      </li>
      <li
        className="flex gap-4 mb-4"
        onClick={() => {
          handleLogout();
        }}
      >
        <span
          className="position-relative"
          onMouseOver={() => setToolTip(5)}
          onMouseLeave={hideToolTip}
        >
          <BsPower className="col-12 fs-5" />
          {toolTip === 5 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Logout
            </div>
          )}
        </span>
      </li>
    </div>
  );
}
