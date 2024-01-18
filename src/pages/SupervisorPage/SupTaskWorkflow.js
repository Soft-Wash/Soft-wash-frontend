// import SupworkflowSidebar from "../../components/SupervisorComponents/SupworkflowSidebar";
import "../../styles/SupervisorStyles/SupTaskworkflow.css";
import { FaClipboardList } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";

function SupTaskWorkflow() {
const [allTask,setAllTask]=useState()
const [pendingTask,setPendingTask]=useState()
const [completedTask,setCompletedTask]=useState()

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/task/`).then((resp) => {
      setAllTask(resp.data);
      
    });
    axios.get(`${process.env.REACT_APP_BASE_URL}/task/status?status=pending`).then((resp) => {
      setPendingTask(resp.data);
    });
    axios.get(`${process.env.REACT_APP_BASE_URL}/task/status?status=completed`).then((resp) => {
      setCompletedTask(resp.data);
    });
  },[])

  return (
    <div>
      <div className="d-flex">
        {/* <SupworkflowSidebar/> */}
        <SupervisorSideBar />
        <div className="workflow-content">
            <div className="workflowHeader">
                <div>
                    <h4 className="">Task Workflow </h4>
                </div>
                <div className="d-flex gap-4">
                    <Link to="/SupTaskTable">
                        <h4 style={{color:"#0DCAF0"}}>View Task</h4>
                    </Link>
                    <Link to="/SupCreateTask">
                        <h4 style={{color:"#0DCAF0"}}>Create New Task</h4>
                    </Link>
                </div>
                
            </div>
          
          <hr className="dashboard-line" />
          <div className="workflow-cards">
            <div className="workflow-container-L mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <Link to="/tasktable" className="order-dashboard-link">
                <p>Total Task</p>
                </Link>

                <p>{allTask?.length|| "0"}</p>
              </div>
            </div>
            <div className="workflow-container-M mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Pending Task</p>
                <p>{pendingTask?.length || "0"}</p>
              </div>
            </div>
            <div className="workflow-container-R mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Completed Task</p>
                <p>{completedTask?.length || "0"}</p>
              </div>
            </div>
          </div>

          {/* <hr className="dashboard-line" /> */}
          
        </div>
      </div>
    </div>
  );
}

export default SupTaskWorkflow;
