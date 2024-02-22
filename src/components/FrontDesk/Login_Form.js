import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState(false);
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setErr(true);
      return;
    }
    const logBody = {
      email: email,
      password: password
    };
    console.log(logBody);
    try {
      console.log('here')
      let resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/employee/login`,
        logBody
      );
      if (resp.data.message === "login successful") {
        localStorage.setItem('softwashEmployeeLogin',JSON.stringify(resp.data.noPasswordUser._id))
        switch (resp.data.noPasswordUser.role.name) {
          case "frontdesk":
            navigate("/frontdesk/dash");
            break;
          case "admin":
            navigate("/admindashboard");
            break;
          case "supervisor":
            navigate("/SupervisorDash");
            break;
          case "washman":
            console.log("Navigating to washman dashboard");
            navigate("/washman-dashboard");
            break;
          default:
            setAuth(false);
            setTimeout(() => {
              setAuth(true);
            }, 3000);
            break;
        }
      } else {
        toast.error("operation failed")
      }
    } catch (e) {
      console.log({ e });
    }
  };

  
  return (
    <>
          <ToastContainer position="top-center" />
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
