import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Leave.css";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import userImage from "../../assets/images/bovi.jpeg";
import { useEffect, useState } from "react";
import ApprovedLeave from "../../components/Admin/ApprovedLeave";
import RejectedLeave from "../../components/Admin/RejectedLeave";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Leave() {
  const [toggleRejection2, setToggleRejection2] = useState(true);
  const [toogleEmployeeInput2, settoggleEmployeeInput2] = useState(false);
  const [toggleApproved, settoggleApproved] = useState(false);
  const [toggleLeaveManagement, settoggleLeaveManagement] = useState(true);
  const [rejectedLeave, setrejectedLeave] = useState(false);
  const [pendingleaves, setpendingleaves] = useState();
  const [employeeID, setEmployeeID] = useState(null);
  const [approveLeave,setApproveLeave]=useState()
  const [rejectedReason,setrejectedReason]=useState({
    status:"rejected",
    adminApproval:"rejected"

  })

  function ToggleTextArea2() {
    setToggleRejection2(!toggleRejection2);
    settoggleEmployeeInput2(false);
    setEmployeeID(null);
  }

  function toogleEmployeeMessage2(itemId) {
    setEmployeeID(itemId);
    setToggleRejection2(false);
  }

  function toggleApprovedData() {
    settoggleApproved(!toggleApproved);
    settoggleLeaveManagement(false);
    setrejectedLeave(false);
    if (toggleApproved) {
      settoggleApproved(true);
    }
  }

  function toggleLeaveManage() {
    settoggleLeaveManagement(!toggleLeaveManagement);
    settoggleApproved(false);
    setrejectedLeave(false);
    if (toggleLeaveManagement) {
      settoggleLeaveManagement(true);
    }
  }

  function toggleRejectedLeave() {
    setrejectedLeave(!rejectedLeave);
    settoggleLeaveManagement(false);
    settoggleApproved(false);
    if (rejectedLeave) {
      setrejectedLeave(true);
    }
  }

  const handleRejection =(e)=>{
    const value = e.target.value
    setrejectedReason({...rejectedReason, [e.target.name]:value})

  }

  const handleApproval=(Id)=>{
    const leaveApproved={
      adminApproval:"approved"
    }
    axiosInstance.put(`/leave/${Id}/adminApproval`, leaveApproved)
    .then((resp)=>{
      console.log(resp.data)
      toast.success('Approved succesful')

    })
  }


  const HandleRejectLeave =(Id)=>{
    axiosInstance.put(`/leave/${Id}/adminApproval`, rejectedReason)
    .then((resp)=>{
      console.log(resp.data)
      toast.error('Leave Rejected')

    })
  }

  useEffect(() => {
    axiosInstance.get("/leave/status?status=pending").then((resp) => {
      setpendingleaves(resp.data);
    });
  }, []);



  const calculateDaysInterval = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const interval = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    return interval;
  };

  return (
    <div>
                  <ToastContainer position="top-center" />
      <div className="d-flex">
        <AdminSidebar />
        <div className="leave-container">
          <div className="leave-process-div">
            <p onClick={toggleLeaveManage} style={{ cursor: "pointer" }}>
              pending
            </p>
            <p onClick={toggleApprovedData} style={{ cursor: "pointer" }}>
              approved
            </p>
            <p style={{ cursor: "pointer" }} onClick={toggleRejectedLeave}>
              rejected
            </p>
          </div>
          <hr className="leave-hr" />
          {toggleLeaveManagement ? (
            <div className="d-flex">
              <Row>
                <div className="pending-leave-div">
                  {pendingleaves &&
                    pendingleaves.map((item) => (
                      <Card className="card-container" key={item._id}>
                        <div className="card-innerdiv">
                          <div className="user-profile-container">
                            <div className="user-profile-container-innercont">
                              <div>
                                <img src={userImage} alt="" />
                              </div>

                              <div className="user-profile-container-innerd">
                                <p className="user-profile-container-p1">
                                  {item?.fullName}
                                </p>
                                <p className="user-profile-container-p2">
                                  {item.employee_id?.role?.name}
                                </p>
                              </div>
                            </div>

                            <p>
                              {new Date(item.date_created).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "2-digit",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="date-container">
                          <div className="date-container-innerd">
                            <div>
                              <input
                                type="text"
                                value={new Date(
                                  item?.startDate
                                ).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              />
                            </div>
                            <div className="hrtag-ptag">
                              <hr className="date-container-innerd-hr" />
                              <p className="days-interval-p">
                                {calculateDaysInterval(
                                  item.startDate,
                                  item.endDate
                                )}
                                D
                              </p>
                            </div>
                            <div>
                              <input
                                type="text"
                                value={new Date(
                                  item?.endDate
                                ).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        {employeeID != item._id ? (
                          <div>
                            <Card
                              border="grey"
                              style={{
                                width: "20rem",
                                margin: "0 auto",
                                height: "200px",
                              }}
                            >
                              <Card.Header>{item.leaveType}</Card.Header>
                              <Card.Body>
                                <Card.Text>{item.reasons}</Card.Text>
                              </Card.Body>
                            </Card>
                            <div className="leave-count-div">
                              <p className="leave-count-div-p1">10</p>
                              <b className="leave-count-div-p2">
                                Leaves Available
                              </b>
                            </div>

                            <div className="leave-button-divs">
                              <div>
                                <button className="leave-button-divs-btn1" onClick={()=>handleApproval(item._id)}>
                                  Approve
                                </button>
                              </div>
                              <div>
                                <button
                                  className="leave-button-divs-btn2"
                                  onClick={() =>
                                    toogleEmployeeMessage2(item._id)
                                  }
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Card
                            border="grey"
                            style={{
                              width: "auto",
                              height: "auto",
                              position: "absolute",
                              top: "200px",
                              left: "14px",
                            }}
                          >
                            <Card.Header>Reasons for rejection</Card.Header>
                            <Card.Body>
                              <textarea
                                className="card-textinput"
                                placeholder="Reasons for rejection"
                                name="rejectReason"
                                onChange={handleRejection}
                              ></textarea>
                            </Card.Body>

                            <div className="leave-button-divs">
                              <div>
                                <button className="leave-button-divs-btn1" onClick={()=>HandleRejectLeave(item._id)}>
                                  Send
                                </button>
                              </div>
                              <div>
                                <button
                                  className="leave-button-divs-btn2"
                                  onClick={ToggleTextArea2}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </Card>
                        )}
                      </Card>
                    ))}
                </div>
              </Row>

              <Col className="onleave-table">
                <Card className="card-container3">
                  <div className="card-container3-innerd1-cover">
                    <div className="card-container3-innerd2">
                      <h6 className="card-container3-innerd2-h6">
                        Who's On Leave
                      </h6>
                      <hr className="card-container3-innerd2-hr" />
                      <p className="card-container3-innerd2-p1">Today</p>
                      <div className="user-profile-container-innercont">
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            Gerald Fakaa
                          </p>
                          <p className="user-profile-container2-p2">
                            Front Desk
                          </p>
                        </div>
                      </div>
                      <p className="card-container3-innerd2-p1">This week</p>
                      <div className="user-profile-container-innercont">
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            Gerald Fakaa
                          </p>
                          <p className="user-profile-container2-p2">
                            Front Desk
                          </p>
                        </div>
                      </div>
                      <div className="user-profile-container-innercont">
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            Gerald Fakaa
                          </p>
                          <p className="user-profile-container2-p2">
                            Front Desk
                          </p>
                        </div>
                      </div>
                      <p className="card-container3-innerd2-p1">Next week</p>
                      <div className="user-profile-container-innercont">
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            Gerald Fakaa
                          </p>
                          <p className="user-profile-container2-p2">
                            Front Desk
                          </p>
                        </div>
                      </div>
                      <div className="user-profile-container-innercont">
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            Gerald Fakaa
                          </p>
                          <p className="user-profile-container2-p2">
                            Front Desk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="no-leave">
                    No one is taking leave on the selected date
                  </p>
                </Card>
              </Col>
            </div>
          ) : (
            ""
          )}

          {toggleApproved ? <ApprovedLeave /> : ""}
          {rejectedLeave ? <RejectedLeave /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Leave;
