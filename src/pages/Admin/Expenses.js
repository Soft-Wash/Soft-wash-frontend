import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Expenses.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";

function Expenses() {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    axiosInstance.get("/expense/").then((resp) => {
      setExpenses(resp.data);
    });
  }, []);

  const getStatusColorClass = (tax_include) => {
    switch (tax_include) {
      case "yes":
        return "tax-include-btn2";
      case "no":
        return "tax-include-btn1";
      default:
        return "";
    }
  };

  const DeleteExpense = (_id) => {
    axiosInstance.delete(`/expense/${_id}/delete`).then((resp) => {
      console.log(resp.data);
      setExpenses((prevItems) => prevItems.filter((item) => item._id !== _id));
      toast.success("Expense deleted succesful");
    });
  };

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="expenses-container">
          <div className="expenses-container-innerd">
            <div className="header-tags">
              <h3>Expenses</h3>
              <Link to="/newexpenses">
                <button>Add New</button>
              </Link>
            </div>

            <hr className="expenses-hr" />
            <div className="expenses-table-content">
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
              <div className="table-content">
                <table className="expenses-content-table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Towards</th>
                      <th>Tax Include?</th>
                      <th>Payment Method</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses &&
                      expenses.map((item) => (
                        <tr key={item._id}>
                          <th>1</th>
                          <th>{item.date}</th>
                          <th>{item.amount}</th>

                          <th>{item.category}</th>
                          <th>
                            <button
                              className={`tax-include-btn1 ${getStatusColorClass(
                                item?.tax_include
                              )}`}
                            >
                              {item.tax_include}
                            </button>
                          </th>
                          <th>{item.payment_method}</th>
                          <th>
                            <div className="d-flex">
                              <Link to={`/editexpense/${item._id}`}>
                                <button className="action-buttons-btn1">
                                  Edit
                                </button>
                              </Link>

                              <button
                                className="action-buttons-btn2"
                                onClick={() => DeleteExpense(item._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <p>showing 1 0f 1 of 1 entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
