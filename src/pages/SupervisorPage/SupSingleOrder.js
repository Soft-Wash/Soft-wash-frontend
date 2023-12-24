// import AdminSidebar from "../../components/Admin/AdminSidebar";
import SingleOrderBody from "../../components/Admin/SingleOrderBody";
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";

function SupSingleOrder(){
  return(
    <div className="d-flex">
        <SupervisorSideBar/>
        <SingleOrderBody/>
    </div>
  )
}

export default SupSingleOrder;
