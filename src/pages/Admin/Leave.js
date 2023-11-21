import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Leave.css";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import userImage from "../../assets/images/bovi.jpeg";
import { useState } from "react";
import PendingLeave from "../../components/Admin/PendingLeave";


function Leave() {
  const [toggleRejection, setToggleRejection] = useState(true);
  const [toogleEmployeeInput, settoogleEmployeeInput] = useState(false);
  const [toggleRejection2, setToggleRejection2] = useState(true);
  const [toogleEmployeeInput2, settoogleEmployeeInput2] = useState(false);
  const [toggleApproved, settoggleApproved]=useState(false)
  const [toggleLeaveManagement, settoggleLeaveManagement]=useState(true)

  function ToggleTextArea() {
    setToggleRejection(!toggleRejection);
    settoogleEmployeeInput(false)

  }

  function toogleEmployeeMessage() {
    settoogleEmployeeInput(!toogleEmployeeInput);
    setToggleRejection(false)
  }

  function ToggleTextArea2() {
    setToggleRejection2(!toggleRejection2);
    settoogleEmployeeInput2(false)

  }

  function toogleEmployeeMessage2() {
    settoogleEmployeeInput2(!toogleEmployeeInput2);
    setToggleRejection2(false)
  }

  function toggleApprovedData(){
    settoggleApproved(!toggleApproved)
    settoggleLeaveManagement(false)
  }

  function toggleLeaveManage(){
    settoggleLeaveManagement(!toggleLeaveManagement)
    settoggleApproved(false)
  }

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="leave-container">
          <div className="leave-process-div">
            <p onClick={toggleLeaveManage}>pending</p>
            <p onClick={toggleApprovedData}>approved</p>
            <p>rejected</p>
          </div>
          <hr className="leave-hr" />
{toggleLeaveManagement?          <Row>
            <Col>
              <Card className="card-container">
                <div className="card-innerdiv">
                  <div className="user-profile-container">
                    <div className="user-profile-container-innercont">
                      <div>
                        <img src={userImage} alt="" />
                      </div>

                      <div className="user-profile-container-innerd">
                        <p className="user-profile-container-p1">
                          Gerald Fakaa
                        </p>
                        <p className="user-profile-container-p2">Front Desk</p>
                      </div>
                    </div>

                    <p>5 Nov 19</p>
                  </div>
                </div>
                <div className="date-container">
                  <div className="date-container-innerd">
                    <div>
                      <input type="date" />
                    </div>
                    <div className="hrtag-ptag">
                      <hr className="date-container-innerd-hr" />
                      <p className="days-interval-p">3 days</p>
                    </div>
                    <div>
                      <input type="date" />
                    </div>
                  </div>
                </div>
                {toggleRejection2 ? (
                  <div>
                    <Card
                      border="grey"
                      style={{
                        width: "20rem",
                        margin: "0 auto",
                        height: "200px",
                      }}
                    >
                      <Card.Header>Sick Leave</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <div className="leave-count-div">
                      <p className="leave-count-div-p1">10</p>
                      <b className="leave-count-div-p2">Leaves Available</b>
                    </div>

                    <div className="leave-button-divs">
                      <div>
                        <button className="leave-button-divs-btn1">
                          Approve
                        </button>
                      </div>
                      <div>
                        <button className="leave-button-divs-btn2" onClick={toogleEmployeeMessage2}>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {toogleEmployeeInput2 ? (
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
                      ></textarea>
                    </Card.Body>

                    <div className="leave-button-divs">
                      <div>
                        <button className="leave-button-divs-btn1">Send</button>
                      </div>
                      <div>
                        <button className="leave-button-divs-btn2" onClick={ToggleTextArea2}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col>
              <Card className="card-container" style={{ position: "relative" }}>
                <div className="card-innerdiv">
                  <div className="user-profile-container">
                    <div className="user-profile-container-innercont">
                      <div>
                        <img src={userImage} alt="" />
                      </div>

                      <div className="user-profile-container-innerd">
                        <p className="user-profile-container-p1">
                          Gerald Fakaa
                        </p>
                        <p className="user-profile-container-p2">Front Desk</p>
                      </div>
                    </div>

                    <p>5 Nov 19</p>
                  </div>
                </div>
                <div className="date-container">
                  <div className="date-container-innerd">
                    <div>
                      <input type="date" />
                    </div>
                    <div className="hrtag-ptag">
                      <hr className="date-container-innerd-hr" />
                      <p className="days-interval-p">3 days</p>
                    </div>
                    <div>
                      <input type="date" />
                    </div>
                  </div>
                </div>

                {toggleRejection ? (
                  <div>
                    <Card
                      border="grey"
                      style={{
                        width: "20rem",
                        margin: "0 auto",
                        height: "200px",
                      }}
                    >
                      <Card.Header>Sick Leave</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <div className="leave-count-div">
                      <p className="leave-count-div-p1">10</p>
                      <b className="leave-count-div-p2">Leaves Available</b>
                    </div>

                    <div className="leave-button-divs">
                      <div>
                        <button className="leave-button-divs-btn1">
                          Approve
                        </button>
                      </div>
                      <div>
                        <button className="leave-button-divs-btn2" onClick={toogleEmployeeMessage}>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {toogleEmployeeInput ? (
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
                      ></textarea>
                    </Card.Body>

                    <div className="leave-button-divs">
                      <div>
                        <button className="leave-button-divs-btn1">Send</button>
                      </div>
                      <div>
                        <button className="leave-button-divs-btn2" onClick={ToggleTextArea}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  ""
                )}
              </Card>
            </Col>
            <Col>
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
                        <p className="user-profile-container2-p2">Front Desk</p>
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
                        <p className="user-profile-container2-p2">Front Desk</p>
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
                        <p className="user-profile-container2-p2">Front Desk</p>
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
                        <p className="user-profile-container2-p2">Front Desk</p>
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
                        <p className="user-profile-container2-p2">Front Desk</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="no-leave">
                  No one is taking leave on the selected date
                </p>
              </Card>
            </Col>
          </Row>:''}

{toggleApproved?<PendingLeave/>:""}

        </div>
      </div>
    </div>
  );
}

export default Leave;
