import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { axiosInstance } from "../../services/AxiosInstance";
import "../../styles/Admin/EditExpense.css";

function EditExpense() {
  const [paramsData,setParamsData]=useState()
  const DataId = useParams()
  const _id = DataId._id
  console.log(_id)

  useEffect(()=>{
axiosInstance.get(`/expense/${_id}`)
.then((resp)=>{
  console.log(resp.data)
  setParamsData({
    expenseId:resp.data._id,
    date:resp.data.date,
    amount:resp.data.amount,
    category:resp.data.category,
    payment_method:resp.data.payment_method,
    note:resp.data.note,
    tax_include:resp.data.tax_include
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

  console.log(paramsData);


  return (
    <div>
      <div className="edit-expenses-container d-flex">
        <AdminSidebar />
        <div className="edit-expenses-container-innerd">
          <h4>Add Expense</h4>
          <hr className="addexpenses-hr" />
          <div className="editexpenses-table-content">
            <div className="editexpenses-details-div">
              <div className="editexpenses-details-div-header">
                <p> Expenses Details</p>
              </div>
              <div className="editexpenses-details-div-form">
                <div className="editexpenses-details-div-form-innerd1">
                  <label htmlFor="">
                    Date <br />
                    <input
                      type="date"
                      name="date"
                      className="editexpenses-details-div-form-innerd1-inpt1"
                      onChange={HandleExpense}
                      value={paramsData?.date}
                    />
                  </label>
                  <label htmlFor="">
                    Expense Amount <br />
                    <input
                      type="text"
                      name="amount"
                      placeholder="Enter Expense Amount"
                      defaultValue={paramsData?.amount}
                      className="editexpenses-details-div-form-innerd1-inpt2"
                      onChange={HandleExpense}
                    />
                  </label>
                </div>
                <div className="editexpenses-details-div-form-innerd2">
                  <label htmlFor="">
                    Expense Category <br />
                    <select
                      name="category"
                      id=""
                      className="editexpenses-details-div-form-innerd1-selct1"
                      onChange={HandleExpense}
                      value={paramsData?.category}
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
                      className="editexpenses-details-div-form-innerd1-selct2"
                      onChange={HandleExpense}
                      value={paramsData?.payment_method}
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
                          <input
                            className="radio-inpt1"
                            type="radio"
                            name="tax_include"
                            value="no"
                            checked={paramsData?.tax_include === "no"}
                            onChange={HandleExpense}
                          />
                        </div>

                        <p className="checkbox-p1">No</p>
                      </div>
                      <div className="checkbox-div2">
                        <div>
                          <input
                            className="radio-inpt2"
                            type="radio"
                            name="tax_include"
                            value="yes"
                            onChange={HandleExpense}
                            checked={paramsData?.tax_include === "yes"}
                          />
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
                      defaultValue={paramsData?.note}
                    ></textarea>
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
  );
}

export default EditExpense;
