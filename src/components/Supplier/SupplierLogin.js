import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SupplierLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [authError, setAuthError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
        if ( email === "" || password === "") {
            setErr(true);
            return;
        }
    fetch("http://localhost:8003/suppliers/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error occurred while fetching user data');
            }
        })
        .then((data) => {
            const foundUser = data.find((user) => user.email === email  &&  user.password === password);
            if (foundUser) {
                // Login successful
                alert("Login successful");
                console.log('Login successful:', foundUser);
                alert("👍✔")
            } else {
                // Login failed
                alert('Login failed: Invalid email or password');
                // Handle the login failure, display error message, etc.
            }
        })
        .catch((error) => {
            console.log('Error occurred during login:', error);
            // Handle the error, display error message, etc.
        });
};
      

  return (
    <>
      <div
        className={`${
          authError ? "show" : "hide"
        } fade border-5 border-start ps-3 border-danger`}
      >
        <p className="alert alert-danger text-danger">Incorrect email or password</p>
      </div>
      <Form className="border rounded p-5">
        <Form.Text className="fw-bold fs-5 col-12 d-flex justify-content-center mb-5">
          Supplier Login
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // className={`${err ? "border border-danger" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // className={`${err ? "border border-danger" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          // className={`col-12 ${email === "" || password === "" ? "disabled" : ""}`}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default SupplierLogin;
