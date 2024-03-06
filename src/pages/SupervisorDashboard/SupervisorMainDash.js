// import React, { useState } from "react";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import SupervisorMain from "../../styles/SupervisorMain.css"
// import UserSidebar from '../../components/UserDashboard/UserSidebar'
import softwashlogo from "../../assets/images/SoftWashLogo.png"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import DevicesIcon from '@mui/icons-material/Devices';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SoftWashLogo  from '../../assets/images/SoftWashLogo.png';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorSidebar from './SupervisorCards';
import SupervisorCards from './SupervisorCards';


function SupervisorMainDash() {

    const getTimeOfDay = () => {
      const currentHour = moment().hour();
  
      if (currentHour >= 5 && currentHour < 12) {
        return 'morning';
      } else if (currentHour >= 12 && currentHour < 17) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    };

  // Get the time of day
  const timeOfDay = getTimeOfDay();
  
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-grey" style={{backgroundColor:"#ECF0F5"}}>
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
              <Link href="/" class="d-flex align-items-center mt-5 pb-3 mb-md-0 me-md-auto text-white text-decoration-none active">
                  <span class="fs-5 d-none d-sm-inline">
                    <img src={SoftWashLogo} alt="" />
                  </span>
              </Link>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5" id="menu">
                  <li class="nav-item">
                      <Link href="#" class="nav-link align-middle px-0">
                        <AddHomeWorkIcon />
                          <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">DashBoard</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <PersonAddAltIcon/>
                          <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Users</span> </Link>
                      <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                          <li class="w-100">
                              <Link href="#" class="nav-link px-4"> <span class="d-none d-sm-inline">FrontDesk</span> <DevicesIcon/> </Link>
                          </li>
                          <li>
                              <Link href="#" class="nav-link px-4"> <span class="d-none d-sm-inline">WashMan</span><DryCleaningIcon/> </Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                    <Link href="#" class="nav-link px-0 align-middle">
                      <BorderColorIcon/>
                      <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">View Orders</span></Link>
                  </li>
                  <li>
                    <Link href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                      <InventoryIcon/>
                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Inventory</span></Link>
                      <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                          <li class="w-100">
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</Link>
                          </li>
                          <li>
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                          <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> 
                      </Link>
                          <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                          <li class="w-100">
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</Link>
                          </li>
                          <li>
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</Link>
                          </li>
                          <li>
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</Link>
                          </li>
                          <li>
                              <Link href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                    <Link href="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </Link>
                  </li>
              </ul>
          </div>
        </div>
        <div class="col py-3">
          <div class="RightsideLJ">
            <div class="NavRightLJ">
              <div>
                <h3 class="NavRightLeftLJ">Good {timeOfDay}! Jane Doe</h3>
              </div>
              <div class="dropdown pb-4">
                <Link href="#" class="d-flex align-items-center text-primary text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="" height="50" class="rounded-circle"/> */}
                    <PersonIcon/>
                    <span class="d-none d-sm-inline mx-1 text-primary "></span>
                </Link>
                <ul class="dropdown-menu dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                  <li><Link class="dropdown-item" href="#">Profile</Link></li>
                  <li>
                      <hr class="dropdown-divider"/>
                  </li>
                  <li><Link class="dropdown-item" href="#">Sign out</Link></li>
                </ul>
              </div>
            </div>
            <div class="MainDashContent pt-3">
              <SupervisorCards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SupervisorMainDash
