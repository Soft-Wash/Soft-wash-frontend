import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/SingleTaskPage.css"
import SingleTaskBody from "../../components/Admin/SingleTaskBody";

function SingleTaskPage(){
  return(
    <div>
      <div className="d-flex">
<WorkFlowSideBar/>
<SingleTaskBody/>
      </div>
    </div>
  )
}

export default SingleTaskPage;