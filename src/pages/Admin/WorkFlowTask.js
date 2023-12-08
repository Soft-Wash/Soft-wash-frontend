import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/WorkFlowTask.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";

function WorkFlowTask() {
  return (
    <div>
      <div className="d-flex">
        <WorkFlowSideBar />
        <div className="workflow-content">
          <h4 className="">workflow dash </h4>
          <hr className="dashboard-line" />
          <div className="workflow-cards">
            <div className="workflow-container mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Total Task</p>
                <p>5</p>
              </div>
            </div>
            <div className="workflow-container mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Pending Task</p>
                <p>5</p>
              </div>
            </div>
            <div className="workflow-container mb-3">
              <div className="workflow-container-innerd1">
                <FaClipboardList className="workflow-clipboard-icon" />
              </div>
              <div className="workflow-container-innerd2">
                <p>Completed Task</p>
                <p>5</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WorkFlowTask;
