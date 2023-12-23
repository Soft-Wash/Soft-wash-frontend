import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css"

function CreateOrder(){
  return(
    <div>
<div className="d-flex">
  <AdminSidebar/>
  <div className="createorder-content-container">
    <div className="createorder-content">
    <h3>Add Order</h3>
    <hr  className="createorder-content-hr"/>
    <div className="cloth-card">
    <div className="cloth-card-div1">
<div className="cloth-border">

</div>
    </div>
    <div className="cloth-card-div2">

</div>
    </div>
    </div>


  </div>
</div>
    </div>
  )
}

export default CreateOrder;