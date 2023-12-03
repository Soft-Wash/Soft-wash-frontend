import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";


function WashmanLeaveForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reasons, setReasons] = useState("");
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || fullName=== "" || reasons=== "") {
      setErr(true);
    } else {
      setErr(false);
      const body = {
        email: email,
        fullName: fullName,
        reasons: reasons
      };
      try {
        const resp = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/leave/`,
          body
        );
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>LEAVE APPLICATION</h2>
        </div>
        <div>
          <Form className="centralize  mt-4" onSubmit={handleSubmit}>
            <Form.Group className="washman-edit-profile-input">
              <Form.Label htmlFor="fullName" className="reset-input-headers">
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {err && fullName === "" ? (
                <span className="reset-err-msg">Kindly enter your Full Name</span>
              ) : null}
              

              <Form.Label htmlFor="email" className="reset-input-headers">
                Email address
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

              <Form.Label htmlFor="reasons" className="reset-input-headers">
                Reasons
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={reasons}
                onChange={(e) => setReasons(e.target.value)}
              />
              {err && reasons === "" ? (
                <span className="reset-err-msg">Kindly enter your Reason For Leave</span>
              ) : null}
            </Form.Group>

            <Button className="edit-washman-profile-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default WashmanLeaveForm;