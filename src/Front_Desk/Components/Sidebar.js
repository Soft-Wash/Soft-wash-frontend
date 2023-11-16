import { Tooltip } from "bootstrap";
import { BsColumnsGap, BsCalendar4 } from "react-icons/bs";
import {useState, useEffect, UseNavigate} from 'react'

export default function Sidebar() {
  const [toolTip, setToolTip] = useState(0);

  const showToolTip = () => {
    setToolTip(true);
  };
  const hideToolTip = () => {
    setToolTip(0);
  };

  return (
    <div
      className=" list-unstyled border border-top-0 pt-4"
      style={{ width: "50px", height: "80vh" }}
    >
      <li className="flex gap-4 mb-4">
        <span className="duration-500 position-relative" onMouseOver={() => setToolTip(1)} onMouseLeave={hideToolTip}>
          <BsColumnsGap className="col-12 fs-5" />
          {toolTip === 1 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Dashboard
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span className="position-relative" onMouseOver={() => setToolTip(2)} onMouseLeave={hideToolTip}>
          <BsCalendar4 className="col-12 fs-5" />
          {toolTip === 2 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Orders
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span className="position-relative" onMouseOver={() => setToolTip(3)} onMouseLeave={hideToolTip}>
          <BsCalendar4 className="col-12 fs-5" />
          {toolTip === 3 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Orders
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span className="position-relative" onMouseOver={() => setToolTip(4)} onMouseLeave={hideToolTip}>
          <BsCalendar4 className="col-12 fs-5" />
          {toolTip === 4 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Orders
            </div>
          )}
        </span>
      </li>
      <li className="flex gap-4 mb-4">
        <span className="position-relative" onMouseOver={() => setToolTip(5)} onMouseLeave={hideToolTip}>
          <BsCalendar4 className="col-12 fs-5" />
          {toolTip === 5 && (
            <div className="position-absolute  top-0 start-100 p-2 bg-secondary text-white  duration-500">
              Orders
            </div>
          )}
        </span>
      </li>
    </div>
  );
}
