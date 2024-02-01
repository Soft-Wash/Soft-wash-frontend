import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";



function WashmanRequestSuppliesBody(){

    const [email, setEmail] = useState("");
    const [item, setItem] = useState("");

    const [err, setErr] = useState(false);
    const Navigate = useNavigate();

    return(
        <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>EDIT PROFILE</h2>
        </div>
        <div>
          <Form className="centralize  mt-4">
            <Form.Group className="washman-edit-profile-input">
              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Item
              </Form.Label>
              <select
                className="form-control" 
                value={item}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="">Select Item</option>
                <option value="detergent">Detergent</option>
                <option value="starch">Starch</option>               
              </select>

              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Current Quantity
              </Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              

              {err && email === "" ? (
                <span className="reset-err-msg">Kindly enter your email</span>
              ) : null}
            </Form.Group>

            <Button className="edit-washman-profile-btn" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
    )
}


export default WashmanRequestSuppliesBody;