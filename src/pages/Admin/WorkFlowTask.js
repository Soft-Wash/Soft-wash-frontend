import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/WorkFlowTask.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function WorkFlowTask() {
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
        <WorkFlowSideBar />
        <div className="workflow-content">
          <h4 className="">Workflow dash </h4>
          <hr className="dashboard-line" />
          <div className="workflow-cards">
            <div className="workflow-container mb-3">
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
            <div className="workflow-container mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Pending Task</p>
                <p>{pendingTask?.length || "0"}</p>
              </div>
            </div>
            <div className="workflow-container mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Completed Task</p>
                <p>{completedTask?.length || "0"}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WorkFlowTask;
