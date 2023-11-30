import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/NewExpenses.css"

function AddNewExpenses(){
  return(
    <div>
<div
className="new-expenses-container d-flex">
<AdminSidebar/>
<div className="new-expenses-container-innerd">
  <h4>Add Expense</h4>
  <hr className="addexpenses-hr" />
  <div className="addexpenses-table-content">
<div className="addexpenses-details-div">
<div className="expenses-details-div-header">
  <p>  Expenses Details</p>

</div>
<div className="expenses-details-div-form">
<div className="expenses-details-div-form-innerd1">
  <label htmlFor="">
    Date <br /> 
  <input type="date" className="expenses-details-div-form-innerd1-inpt1"/>
  </label>
  <label htmlFor="">
    Expense Amount <br /> 
  <input type="text" placeholder="Enter Expense Amount" className="expenses-details-div-form-innerd1-inpt2"/>
  </label>
</div>
<div className="expenses-details-div-form-innerd2">
<label htmlFor="">
  Expense Category <br />
<select name="" id="" className="expenses-details-div-form-innerd1-selct1">
<option value="" hidden>select category</option>
<option value="fuel">fuel</option>
<option value="rent">rent</option>
<option value="fuel">chemical</option>
<option value="rent">detergent</option>
</select>
</label>
<label htmlFor="" className="checkbox-label2">
  Payment Method <br />
<select name="" id="" className="expenses-details-div-form-innerd1-selct2">
<option value="" hidden>select payment</option>
<option value="fuel">card</option>
<option value="rent">Cash</option>
<option value="fuel">cheque</option>
<option value="rent">Bank Transfer</option>
</select>
</label>
<label htmlFor="" className="checkbox-label3" >
  Tax Include <br />
  <div className="checkbox-container">
  <div className="checkbox-div">
    <div>
    <input className="radio-inpt1" type="radio" />
    </div>

  <p className="checkbox-p1">No</p>
  </div>
  <div className="checkbox-div2">
  <div>
    <input className="radio-inpt2" type="radio" />
    </div>
  <p className="checkbox-p2">Yes</p>
  </div>
  </div>
 

</label>
</div>

<div className="`note-div"> 
  <label htmlFor="">
    Note <br />
    <textarea className="note-div-textarea" name="" id="" cols="30" rows="10"></textarea>
  </label>
</div>
</div>
</div>

<button className="submit-button">Sumit</button>
  </div>

</div>
</div>
    </div>
  )
}

export default AddNewExpenses;