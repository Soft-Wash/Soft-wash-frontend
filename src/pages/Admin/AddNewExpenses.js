import { useState } from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { axiosInstance } from "../../services/AxiosInstance";
import "../../styles/Admin/NewExpenses.css";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddNewExpenses() {
  const [expenseDetails, setExpenseDetails] = useState({
  });

  const HandleExpense = (e) => {
    const value =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.type === "file"
      ? e.target.files[0]
      : e.target.value;

    setExpenseDetails({ ...expenseDetails, [e.target.name]: value});
  };

  const postExpense=()=>{
    axiosInstance.post('/expense/create',expenseDetails)
    .then((resp)=>{
      console.log(resp.data)
      toast.success('Expense created succesful')
    })
  }

  return (
    <div>
       <ToastContainer position="top-center" />
      <div className="new-expenses-container d-flex">
        <AdminSidebar />
        <div className="new-expenses-container-innerd">
          <h4>Add Expense</h4>
          <hr className="addexpenses-hr" />
          <div className="addexpenses-table-content">
            <div className="addexpenses-details-div">
              <div className="expenses-details-div-header">
                <p> Expenses Details</p>
              </div>
              <div className="expenses-details-div-form">
                <div className="expenses-details-div-form-innerd1">
                  <label htmlFor="">
                    Date <br />
                    <input
                      type="date"
                      name="date"
                      className="expenses-details-div-form-innerd1-inpt1"
                      onChange={HandleExpense} 
                    />
                  </label>
                  <label htmlFor="">
                    Expense Amount <br />
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter Expense Amount"
                      className="expenses-details-div-form-innerd1-inpt2"
                      onChange={HandleExpense} 
                    />
                  </label>
                </div>
                <div className="expenses-details-div-form-innerd2">
                  <label htmlFor="">
                    Expense Category <br />
                    <select
                      name="category"
                      id=""
                      className="expenses-details-div-form-innerd1-selct1"
                      onChange={HandleExpense} 
                    >
                      <option value="" hidden>
                        select category
                      </option>
                      <option value="fuel">fuel</option>
                      <option value="rent">rent</option>
                      <option value="chemical">chemical</option>
                      <option value="detergent">detergent</option>
                    </select>
                  </label>
                  <label htmlFor="" className="checkbox-label2">
                    Payment Method <br />
                    <select
                      name="payment_method"
                      id=""
                      className="expenses-details-div-form-innerd1-selct2"
                      onChange={HandleExpense} 
                    >
                      <option value="" hidden>
                        select payment
                      </option>
                      <option value="card">card</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">cheque</option>
                      <option value="bank_transfer">Bank Transfer</option>
                    </select>
                  </label>
                  <label htmlFor="" className="checkbox-label3">
                    Tax Include <br />
                    <div className="checkbox-container">
                      <div className="checkbox-div">
                        <div>
                          <input className="radio-inpt1" type="radio" name="tax_include" value="no" onChange={HandleExpense}  />
                        </div>

                        <p className="checkbox-p1">No</p>
                      </div>
                      <div className="checkbox-div2">
                        <div>
                          <input className="radio-inpt2" type="radio" name="tax_include" value="yes" onChange={HandleExpense} />
                        </div>
                        <p className="checkbox-p2">Yes</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="`note-div">
                  <label htmlFor="">
                    Note <br />
                    <textarea
                      className="note-div-textarea"
                      name="note"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={HandleExpense}
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>

            <button className="submit-button" onClick={postExpense}>Sumit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewExpenses;
