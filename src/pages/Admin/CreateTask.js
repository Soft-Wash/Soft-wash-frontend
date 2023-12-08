import WorkFlowSideBar from "../../components/Admin/WorkFlowSideBar";
import "../../styles/Admin/CreateTask.css"
import {useState} from "react"
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CreateTask(){


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


  return(
    <div>
<div className="d-flex">
<WorkFlowSideBar/>
<div className="new-task-container-innerd">
          <h4>Create Task</h4>
          <hr className="addtask-hr" />
          <div className="addtask-table-content">
            <div className="addtask-details-div">
              <div className="task-details-div-header">
                <p> Task form</p>
              </div>
              <div className="task-details-div-form">
                <div className="task-details-div-form-innerd1">
                  <label htmlFor="">
                    Customer <br />
                    <input
                      type="date"
                      name="date"
                      className="task-details-div-form-innerd1-inpt1"
                      onChange={HandleExpense} 
                    />
                  </label>
                  <label htmlFor="">
                    Expense Amount <br />
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter Expense Amount"
                      className="task-details-div-form-innerd1-inpt2"
                      onChange={HandleExpense} 
                    />
                  </label>
                </div>
                <div className="task-details-div-form-innerd2">
                  <label htmlFor="">
                    Expense Category <br />
                    <select
                      name="category"
                      id=""
                      className="task-details-div-form-innerd1-selct1"
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
                      className="task-details-div-form-innerd1-selct2"
                      onChange={HandleExpense} 
                    >
                      <option value="" hidden>
                        select payment
                      </option>
                      <option value="card">card</option>
                      <option value="cash">Cash</option>
                      <option value="cheque">cheque</option>
                      <option value="bank_transfer">Bank Transfe <button className="select-button">good</button></option>
                    </select>
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
  )
}

export default CreateTask;