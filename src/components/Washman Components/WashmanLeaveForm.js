import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanEditProfile.css";
import Form from "react-bootstrap/Form";

function WashmanLeaveForm(){

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [err, setErr] = useState(false);
    const Navigate = useNavigate();


    const apiUrl = "http://localhost:8003";

    handleNewLeaveRequest = () => {
        const newLeaveData = {
            firstname: firstname,
            lastname: lastname,
            email: lastname,
            

        }
    }

    return(
        <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>LEAVE APPLICATION FORM</h2>
        </div>
        <div>
          <Form className="centralize  mt-4">
            <Form.Group className="washman-edit-profile-input">
              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />

              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

               <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Branch
              </Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

<Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Proposed Start date for Leave
              </Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

<Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Proposed end Date for Leave
              </Form.Label>
              <Form.Control
                type="date"
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

export default WashmanLeaveForm;