import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/ExpenseCategory.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ExpenseCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Category Type</Form.Label>
                  <Form.Control as="select" autoFocus>
                  <option value="" hidden>Select Category Type</option>
                    <option value="option1">Lability</option>
                    <option value="option2">Assets</option>

                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info text-white" onClick={handleClose}>
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
                    <tr className="table-tr">
                      <th className="no-th2">1</th>
                      <th className="date-th">Chemical</th>
                      <th className="assets-th">
                        <button className="tax-include2-btn1">Asset</button>
                      </th>
                      <th className="buttons-th">
                        <div className="d-flex">
                          <button className="action2-buttons-btn1">Edit</button>
                          <button className="action2-buttons-btn2">
                            Delete
                          </button>
                        </div>
                      </th>
                    </tr>
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
