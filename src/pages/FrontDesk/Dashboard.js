import DashNav from "../../components/FrontDesk/DashNav";
import Sidebar from "../../components/FrontDesk/Sidebar";
import DashInfo from "../../components/FrontDesk/DashInfo";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container fluid className="m-0 p-0 w-100" style={{height:"100vh"}}>
      <DashNav />
      <Container fluid className="d-flex m-0 p-0 w-100">
        <Sidebar />
        <DashInfo className="w-100" />
      </Container>
    </Container>
  );
}
