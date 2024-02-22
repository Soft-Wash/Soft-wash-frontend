import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Reviews.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Review() {
  const [review, setReview] = useState();

  const getReview = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/review/`
      )
      .then((resp) => {
        setReview(resp.data);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="review_content">
          <h4>Reviews</h4>
          <hr className="review_hr" />
          <div className="review_table_div">
            <table className="review_table">
              <thead>
                <tr>
                  <th>fullName</th>
                  <th>Order_id</th>
                  <th>message</th>
                </tr>
              </thead>
              <tbody>
                {review?.length < 0 ? (
                  <tr>
                    <td colSpan="6" className="no-data-message">
                      No data available
                    </td>
                  </tr>
                ) : (
                  review && review.map((item) => (
                    <tr key={item._id}>
                      <th>{item.user_id.fullName}</th>
                      <th>{item.order_id._id}</th>
                      <th>{item.message}</th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
