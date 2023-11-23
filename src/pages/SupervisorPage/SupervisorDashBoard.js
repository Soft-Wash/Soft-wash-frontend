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
    <div className='row d-flex'>
        <div className="col">
            <SupervisorSideBar/>
        </div>
        <div className="col">
            <SupervisorDashBody/>
        </div>
       
        
    </div>
  )
}

export default SupervisorDashBoard