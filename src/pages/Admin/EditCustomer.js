import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/EditCustomer.css"
import { axiosInstance } from "../../services/AxiosInstance";
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom";

function EditCustomer(){

  const [paramsData,setParamsData]=useState()
  const DataId = useParams()
  console.log(DataId)
  const _id = DataId.id
  console.log(_id)

  useEffect(()=>{
axiosInstance.get(`/users\/${_id}`)
.then((resp)=>{
  console.log(resp.data)
  setParamsData({
    customerId:resp.data._id,
    fullName:resp.data.fullName,
    phone:resp.data.phone,
    email:resp.data.email,
    address:resp.data.address,
    status:resp.data.status,
  })

})
  },[])



  const HandleExpense = (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;

        setParamsData({ ...paramsData, [e.target.name]: value });
  };

  const postExpense = () => {
    axiosInstance.put(`/expense/${_id}/update`, paramsData).then((resp) => {
      console.log(resp.data);
    });
  };

  return(
    <div>
<div className="d-flex">
  <AdminSidebar/>
        <div className="edit-customer-container-innerd">
        <h4>Add Expense</h4>
        <hr className="addexpenses-hr" />
        <div className="editcustomer-table-content">
          <div className="editcustomer-details-div">
            <div className="editcustomer-details-div-header">
              <p> Expenses Details</p>
            </div>
            <div className="editcustomer-details-div-form">
              <div className="editcustomer-details-div-form-innerd1">
                <label htmlFor="">
                Customer Name<br />
                  <input
                    type="text"
                    name="fullName"
                    className="editcustomer-details-div-form-innerd1-inpt1"
                    onChange={HandleExpense}
                    placeholder="Customer Name"
                    value={paramsData?.fullName}
                  />
                </label>
                <label htmlFor="">
                Phone Number <br />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={paramsData?.phone}
                    className="editcustomer-details-div-form-innerd1-inpt2"
                    onChange={HandleExpense}
                  />
                </label>
              </div>
              <div className="editcustomer-details-div-form-innerd2">
                <label htmlFor="">
                  Email <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={paramsData?.email}
                    className="editcustomer-details-div-form-innerd1-inpt2"
                    onChange={HandleExpense}
                  />
                  
                </label>
                <label htmlFor="" className="checkbox-label2">
                  Address <br />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={paramsData?.Address}
                    className="editcustomer-details-div-form-innerd1-inpt2"
                    onChange={HandleExpense}
                  />
                </label>
              </div>

              <div className="note-div">
                <label htmlFor="">
                  Status <br />
                  <select
                      name="status"
                      id=""
                      className="editcustomer-details-div-form-innerd1-selct2"
                      onChange={HandleExpense}
                      value={paramsData?.status}
                    >
                      <option value="" hidden>
                        Select Status
                      </option>
                      <option value="Active">Active</option>
                      <option value="Active">inActive</option>

                    </select>
                </label>
              </div>
            </div>
          </div>

          <button className="submit-button" onClick={postExpense}>
            Sumit
          </button>
        </div>
      </div>
</div>
    </div>
  )
}

export default EditCustomer;