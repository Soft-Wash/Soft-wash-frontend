import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Reviews.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import Table from 'react-bootstrap/Table'
import Sidebar from "../../components/FrontDesk/Sidebar";

export default function ReviewPage() {
  const [reviews, setReviews] = useState();

  const getReviews = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));

    axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/review/`).then((resp => {
      console.log(resp.data)
      setReviews(resp.data)
      if (!resp.data) {
        toast.error('Reviews download Failed')
      }
    }))
  };

  useEffect(() => {
    getReviews();
  }, []);




  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="review_content">
          <h4>Reviews</h4>
          <hr className="review_hr" />
          <div className="review_table_div">
            <Table className="review_table">
              <thead>
                <tr>
                  <th>fullName</th>
                  <th>Order_id</th>
                  <th>message</th>
                </tr>
              </thead>
              <tbody>
                {reviews?.length < 0 ? (
                  <tr>
                    <td colSpan="6" className="no-data-message">
                      No data available
                    </td>
                  </tr>
                ) : (
                  reviews?.map((item) => (
                    <tr key={item?._id}>
                      <td>{item?.user_id.fullName}</td>
                      <td>{item?.order_id?._id || 'null'}</td>
                      <td>{item?.message}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
};