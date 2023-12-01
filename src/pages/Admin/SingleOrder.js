import AdminSidebar from "../../components/Admin/AdminSidebar";
import SingleOrderBody from "../../components/Admin/SingleOrderBody";

function SingleOrder(){
  return(
    <div className="d-flex">
<AdminSidebar/>
<SingleOrderBody/>
    </div>
  )
}

export default SingleOrder;

