import React from 'react'
import SupervisorSideBar from '../../components/SupervisorComponents/SupervisorSideBar'
import SupervisorDashBody from '../../components/SupervisorComponents/SupervisorDashBody'

function SupervisorDashBoard() {
  return (
    // <div className=''>
    //     <div className="row flex-nowrap">
    //         <div className="col-md-3 col-xl-2 px-sm-2">
    //             <SupervisorSideBar/>
    //         </div>
    //         <div className="col">
                
    //         </div>
    //     </div>
    // </div>
    // <div className='d-flex overflow y-hidden supervisor-bg'>
    //     <div className="position-relative">
    //         <SupervisorSideBar/>
    //     </div>
    //     <div className="">
    //         <SupervisorDashBody/>
    //     </div>
    // </div>
   
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <SupervisorSideBar/>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <SupervisorDashBody/>
                </main>
            </div>
        </div>


  )
}

export default SupervisorDashBoard