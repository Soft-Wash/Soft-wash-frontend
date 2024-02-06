import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState(false);
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setErr = true;
      return;
    }
    const logBody = {
      email: email,
      password: password,
      role: role,
    };
    console.log(logBody);
    try {
      let resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/user/login`,
        logBody
      );
      console.log(resp.data.message, resp.data.noPasswordUser.role);

      if (
        resp.data.message == "login successful" &&
        resp.data.noPasswordUser.role == "frontdesk"
      ) {
        // alert("should navigate")
        navigate("/frontdesk/dash");
      } 
       else if (
        resp.data.message == "login successful" &&
        resp.data.noPasswordUser.role == "supervisor"
      ) {
        alert("should navigate")
        navigate("/frontdesk/dash");
      } 
      else {
        setAuth(false);
        setTimeout(() => {
          setAuth(true);
        }, 3000);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <>
      <div
        className={`${
          !auth ? "show" : "hide"
        } fade border-5 border-start ps-3 border-danger`}
      >
        <p className="alert alert-danger text-danger">Unauthorized</p>
      </div>
      <Form className="border rounded p-5">
        <Form.Text className="fw-bold fs-5 col-12 d-flex justify-content-center mb-5">
          Employee Login
        </Form.Text>
        <Form.Group className="mb-3  " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={`${err ? "border border-danger" : null}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className={`${err ? "border border-danger" : null}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Role</Form.Label>
          <Form.Select
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className={`${err ? "border border-danger" : null}`}
            value={role}
          >
            <option value="frontdesk">FrontDesk</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Admin</option>
            <option value="supplier">Supplier</option>
            <option value="washman">Washman</option>
          </Form.Select>
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          className={` col-12 ${
            email === "" || password === "" || role === "" ? "disabled" : null
          }`}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
