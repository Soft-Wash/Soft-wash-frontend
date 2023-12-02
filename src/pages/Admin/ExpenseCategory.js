import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/ExpenseCategory.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { axiosInstance } from "../../services/AxiosInstance";
import { useEffect,useState } from "react";

function ExpenseCategory() {
  const [show, setShow] = useState(false);
  const [expenseData,setExpenseData]=useState({})
  const [expenses,setExpenses] = useState()
  const [expenseResp,setExpenseResp]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    axiosInstance.get('/expensecategory/')
    .then((resp)=>{
      setExpenses(resp.data)

    })
  },[])

  const handleInputChange=(e)=>{
    const value = 
    e.target.type ==="checkbox"
    ? e.target.checked
    : e.target.type === "file"
    ? e.target.files[0]
    : e.target.value

    setExpenseData({...expenseData, [e.target.name]:value});
  }


  const postExpense=()=>{
    axiosInstance.post('/expensecategory/create',expenseData)
    .then((resp)=>{
      setExpenseResp(resp.data)
    })
  }

  const DeleteExpense =(_id)=>{
    axiosInstance.delete(`/expensecategory/${_id}/delete`)
    .then((resp)=>{
      console.log(resp.data)
      setExpenses((prevItems) =>
      prevItems.filter((item) => item._id !== _id)
    );
    })
  }


  return (
    <div>
      <div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Expense Category Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Category Name"
                    name="name"
                    autoFocus
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Category Type</Form.Label>
                  <Form.Control as="select" autoFocus  onChange={handleInputChange} name="category_type">
                  <option value="" hidden>Select Category Type</option>
                    <option value="lability">Lability</option>
                    <option value="assets">Assets</option>

                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info text-white" onClick={postExpense}>
                Sumit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="expenses-container2">
          <div className="expenses-container-innerd2">
            <div className="header-tags2">
              <h3>Expense Category</h3>
              <button onClick={handleShow}>Add New</button>
            </div>

            <hr className="expenses-hr" />
            <div className="expenses-table-content2">
              <div className="show-container2">
                <p className="show-container2-p1">Show</p>
                <select name="" id="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <p className="show-container2-p2">entries</p>
              </div>
              <div className="table-content2">
                <table className="expenses-content-table2">
                  <thead>
                    <tr>
                      <th className="s-no">S No</th>
                      <th className="chemical-th">Chemical</th>
                      <th className="category-th">Category Type</th>
                      <th className="action-th">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses && expenses.map((item)=>(
                    <tr className="table-tr">
                    <th className="no-th2">1</th>
                    <th className="date-th">{item.name}</th>
                    <th className="assets-th">
                      <button className="tax-include2-btn1">{item.category_type}</button>
                    </th>
                    <th className="buttons-th">
                      <div className="d-flex">
                        <button className="action2-buttons-btn1">Edit</button>
                        <button className="action2-buttons-btn2" onClick={()=>DeleteExpense(item._id)}>
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

export default ExpenseCategory;
