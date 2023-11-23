import { useEffect } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/tableorder.css";
import { axiosInstance } from "../../services/AxiosInstance";
import {useState} from "react"

function OderTable() {

  const [orders,setorders]=useState()

  useEffect(()=>{
    axiosInstance.get('/order/')
    .then((resp)=>{
      setorders(resp.data)
      console.log(resp.data)
    })
  },[])


  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="ordertable-div">
          <table className="ordertbale-content-table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Branch</th>
                <th>Payment_method</th>
                <th>Addresss</th>
                <th>SubTotal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders&&orders.map((item)=>(
                              <tr>
                              <th>{item?._id}</th>
                              <th>{item?.branch}</th>
                              <th>{item?.payment_method}</th>
                              <th>{item?.deliveryAddress[0]?.FullAddress}</th>
                              <th>{item?.subtotal}</th>
                              <th>{item?.status}</th>
                            </tr>
              
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OderTable;
