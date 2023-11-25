import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Iventry.css"
import { FaClipboardList, FaListAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiCaretUp,BiCaretDown   } from "react-icons/bi";

function Iventry(){
  return(
    <div>
      <div className="d-flex">
<AdminSidebar/>
<div className="iventory-container">
<h4 className="">Order Management & Supplies </h4>
  <hr className="dashboard-line" />
  
<div className="category-container">
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p> Orders In</p>
        <p>0</p>

    </div>
    <div className="state-percent-divv">
    <BiCaretUp className="bicart-icon"/>
    <p className="state-percent-divv-p">35.2%</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link className="order-dashboard-link">
      <p> Declined Orders</p>
        <p>0</p>
      </Link>

    </div>
    <div className="state-percent-divv2">
    <BiCaretDown className="bicart-icon2"/>
    <p className="state-percent-divv2-p">35.2%</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link  className="order-dashboard-link" >
      <p>Total Sales</p>
        <p>0</p>
      </Link>

    </div>
    <div className="state-percent-divv2">
    <BiCaretDown className="bicart-icon2"/>
    <p className="state-percent-divv2-p">35.2%</p>
    </div>
  </div>

  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
      <Link  className="order-dashboard-link" >
      <p>Total Earnings</p>
        <p>0</p>
      </Link>

    </div>
    <div className="state-percent-divv2">
    <BiCaretDown className="bicart-icon2"/>
    <p className="state-percent-divv2-p">35.2%</p>
    </div>
  </div>
  <div className="icon-container mb-3">
    <div className="icon-container-innerd1">
    <FaClipboardList className="clipboard-icon"/>
    </div>
    <div className="icon-container-innerd2">
        <p>Growth</p>
        <p>0</p>
    </div>
  </div>  
  
  </div>
</div>
      </div>

    </div>
  )
}

export default Iventry;