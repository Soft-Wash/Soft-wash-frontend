import LoginForm from "../../components/FrontDesk/Login_Form";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center " style={{height:"90vh"}}>
      <div className="col-6 ">
        <LoginForm/>
      </div>
    </div>
  );
}
