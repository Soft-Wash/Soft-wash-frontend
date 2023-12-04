import axios from "axios"
import { useEffect,useState } from "react"
import AdminSidebar from "../../components/Admin/AdminSidebar"
import { axiosInstance } from "../../services/AxiosInstance"
import "../../styles/Admin/Customer.css"
import { Link } from "react-router-dom"

function Customer(){

const [customers, setCustomers]=useState()
const GetData=()=>{
  axiosInstance.get('/users/')
  .then((resp)=>{
    console.log(resp.data)
    setCustomers(resp.data)
  })
}

useEffect(()=>{
  GetData()
},[customers])

  return(
    <div>
      <div className="d-flex">
    <AdminSidebar/>
    <div className="customer-container">
      <div className="customer-container-innerd">
      <h4>Customers</h4>
       <hr className="addexpenses-hr" />
       <div>
       <div className="customer-table-content">
              <div className="show-container">
                <p className="show-container-p1">Show</p>
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <p className="show-container-p2">entries</p>
              </div>
              <div className="customer-content">
                <table className="customer-content-table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
  {customers?.length < 1 ? (
    <tr>
      <td colSpan="6" className="no-data-message">No data available</td>
    </tr>
  ) : (
    customers &&
    customers.map((item) => (
      <tr key={item?._id}>
        <th>{item?._id.substring(0, item?._id.length / 2)}</th>
        <th>{item?.fullName}</th>
        <th>{item?.email}</th>
        <th>{item?.phone}</th>
        <th>
          <Link to={`/editcustomer/${item._id}`}>
          <button className="customer-edit-tbtn">Edit</button>
          </Link>

        </th>
      </tr>
    ))
  )}
</tbody>

                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
       </div>
      </div>

    </div>
      </div>
    </div>
  )
}

export default Customer;