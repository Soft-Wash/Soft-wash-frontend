import "../styles/Pricingpage.css"
import { FaChevronRight } from "react-icons/fa";

function HeaderBanner(props){
  return(
    <div>
      <div className="below-navbar container-fluid d-flex pt-4 pb-3">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="fs-3 fw-bold text-white">{props.pageTitle}</p>
          <div className="d-flex">
            <p className="fs-5 text-white">Home</p>
            <FaChevronRight className="greatherthan-Icon" />
            <p className="fs-5 text-white">{props.currentPage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner;