import AdminSidebar from "../../components/Admin/AdminSidebar";
import { Link } from "react-router-dom";
import "../../styles/SupervisorStyles/supleave.css";
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
import SupervisorSideBar from "../../components/SupervisorComponents/SupervisorSideBar";
import StaffOnLeave from "../../components/SupervisorComponents/StaffOnLeave";

function SupLeave() {
  const [toggleRejection2, setToggleRejection2] = useState(true);
  const [toogleEmployeeInput2, settoggleEmployeeInput2] = useState(false);
  const [toggleApproved, settoggleApproved] = useState(false);
  const [toggleLeaveManagement, settoggleLeaveManagement] = useState(true);
  const [rejectedLeave, setrejectedLeave] = useState(false);
  const [pendingleaves, setpendingleaves] = useState();
  const [employeeID, setEmployeeID] = useState(null);
  const [todayLeave,setTodayLeave]=useState()
  const [thisWeek,setThisWeek]=useState()
  const [nextWeek,setNextWeek]=useState()
  const [rejectedReason,setrejectedReason]=useState({
    status:"rejected",
    supervisorApproval:"rejected"
  })

  const [toggleStaffOnLeave, setToggleStaffOnLeave] = useState(false); 

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
    setToggleStaffOnLeave(false);
    if (toggleLeaveManagement) {
      settoggleLeaveManagement(true);
    }
  }

  function toggleRejectedLeave() {
    setrejectedLeave(!rejectedLeave);
    settoggleLeaveManagement(false);
    settoggleApproved(false);
     setToggleStaffOnLeave(false);
    if (rejectedLeave) {
      setrejectedLeave(true);
    }
  }
  function toggleStaffsonLeave() {
    setToggleStaffOnLeave(!toggleStaffOnLeave);
    settoggleLeaveManagement(false);
    setrejectedLeave(false);
    settoggleApproved(false);
    if (toggleStaffOnLeave) {  // Corrected condition here
      setToggleStaffOnLeave(true);
    }
  }
  const handleRejection =(e)=>{
    const value = e.target.value
    setrejectedReason({...rejectedReason, [e.target.name]:value})

  }

  const handleApproval=(Id)=>{
    const leaveApproved={
      supervisorApproval:"approved"
    }
    axiosInstance.put(`/leave/${Id}/supervisorApproval`, leaveApproved)
    .then((resp)=>{
      console.log(resp.data)
      toast.success('Approved succesful')

    })
  }


  console.log(rejectedReason)

  const HandleRejectLeave =(Id)=>{
    axiosInstance.put(`/leave/${Id}/supervisorApproval`, rejectedReason)
    .then((resp)=>{
      console.log(resp.data)
      toast.error('Leave Rejected')

    })
  }

  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axiosInstance.get("/leave/status?status=pending").then((resp) => {
      setpendingleaves(resp.data);
    });
    axiosInstance.get(`leave/today?startDate=${currentDate}`)
    .then((resp)=>{
      setTodayLeave(resp.data)
    })
    axiosInstance.get(`leave/this-week`)
    .then((resp)=>{
      setThisWeek(resp.data)
    })
    axiosInstance.get(`leave/next-week`)
    .then((resp)=>{
      setNextWeek(resp.data)
    })
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
        <SupervisorSideBar />
        <div className="leave-container">
          <div className="leave-process-div">
            <div className="d-flex">
                <p role="button" onClick={toggleLeaveManage} className={`${toggleLeaveManagement?'leave-process-div-p':''}`} style={{ cursor: "pointer" }}>
                pending
                </p>
                <p onClick={toggleApprovedData}  className={`${toggleApproved ? 'leave-process-div-p':''}`} style={{ cursor: "pointer" }}>
                approved
                </p>
                <p style={{ cursor: "pointer" }}  className={`${rejectedLeave ? 'leave-process-div-p':''}`} onClick={toggleRejectedLeave}>
                rejected
                </p>
                <p onClick={toggleStaffsonLeave} className={`${toggleStaffOnLeave ? 'leave-process-div-p':''}`} style={{ cursor: "pointer" }}>
                Staff On Leave
                </p>
            </div>

            <Link to="/SupCreateLeave" className="create-leave-link">
                Create Leave
            </Link>
            
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
                            <div className="user-profile-container-innercont2">
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
                        {todayLeave?.length<1?(
                                            <p colSpan="6" className="no-data-message1">
                                            No employee on leave today 
                                          </p>
                        ):( todayLeave && todayLeave.map((item)=>(
                        <div className="onleave-div">
                        
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            {item?.employee_id?.fullName}
                          </p>
                          <p className="user-profile-container2-p2">
                          {item?.employee_id.role?.name}
                          </p>
                        </div>
                        </div>
                        )))}

                      </div>
                      <p className="card-container3-innerd2-p1">This week</p>
                      <div className="user-profile-container-innercont">
                      {thisWeek?.length<1?(
                                          <p colSpan="6" className="no-data-message1">
                                          No employee on leave this <br /> week
                                        </p>
                                        
                      ) :(thisWeek && thisWeek.map((item)=>(
                        <div className="onleave-div">
                        
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            {item?.employee_id?.fullName}
                          </p>
                          <p className="user-profile-container2-p2">
                          {item?.employee_id.role?.name}
                          </p>
                        </div>
                        </div>
                        )))}
                      </div>
                      <p className="card-container3-innerd2-p1">Next week</p>
                      <div className="user-profile-container-innercont">
                      {nextWeek?.length<1?(
                  
                  <p colSpan="6" className="no-data-message1">
                    No employee on leave next <br /> week..
                  </p>
                
                      ) :(nextWeek && nextWeek?.map((item)=>(
                        <>
                        <div>
                          <img
                            className="user-profile-container-innercont-img"
                            src={userImage}
                            alt=""
                          />
                        </div>

                        <div className="user-profile-container-innerd">
                          <p className="user-profile-container2-p1">
                            {item?.employee_id?.fullName}
                          </p>
                          <p className="user-profile-container2-p2">
                          {item?.employee_id.role?.name}
                          </p>
                        </div>
                        </>
                        )))}
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
          {toggleStaffOnLeave ? <StaffOnLeave/> : ''}
        </div>
      </div>
    </div>
  );
}

export default SupLeave;
