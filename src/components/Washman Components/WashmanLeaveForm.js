import "../../styles/Washman Styles/WashmanLeaveForm.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Loader from "../Loader/Loader";


function WashmanLeaveForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reasons, setReasons] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [err, setErr] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const Navigate = useNavigate();


  const [washman, setWashman] = useState({});
  const [branchID, setBranchID] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);




    const [washmanID, setWashmanID] = useState("")
    // const branchID = "655deba5ec7b0b6e0f591bf5"

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const getID = () =>{
        const storedUserId = localStorage.getItem("softwashEmployeeLogin");
        if (storedUserId) {
            setWashmanID(JSON.parse(storedUserId));
        }
        console.log(washmanID)
        }
        getID();    

        const fetchWashman = async () =>{          
            try{
                setLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${washmanID}`)
                setWashman(response.data);
                console.log(response.data);    
                setBranchID(response.data.branch);
                console.log(branchID);            
            }
            catch (error) {
                setError(error.message || 'An error occurred while fetching Washman.');
            } 
        }  

        if(washmanID){
          fetchWashman();
        }
    }, [washmanID, branchID])


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFullName(washman.fullName);
    setEmail(washman.email);
  

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/leave/employee/${washmanID}`);
      const leaveApplications = response.data;
      

      const hasPendingLeave = leaveApplications.some(application => application.status === 'pending');
  
      if (hasPendingLeave) {
        setShowModal(true);
      } else {
        if (email === "" || fullName === "" || reasons === "" || selectedOption === "" || startDate === "" || endDate === "") {
          setErr(true);
        } else {
          setErr(false);
          const body = {
            fullName: fullName,
            email: email,
            reasons: reasons,
            employee_id: washmanID,
            branch_id: branchID,
            startDate: startDate,
            endDate: endDate,
            leaveType: selectedOption,
          };
          console.log(body);
          try {
            const resp = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/leave/create`,
              body
            );
            console.log(resp.data);
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="washman-bg">
      {loading ? <Loader /> : 
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
              placeholder={washman.fullName}
              value={washman.fullName}
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
              placeholder={washman.email}
              value={washman.email}
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

            <select  className="reset-input-headers" onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="" hidden>
                Select Status
              </option>
              <option value="annual">ANNUAL</option>
              <option value="burial">BURIAL</option>
              <option value="sick">SICK</option>   
              <option value="wedding">WEDDING</option>              
              <option value="patarnity">PATARNITY</option>              
              <option value="matarnity">MATARNITY</option>                          
          </select>
              
            <Form.Label htmlFor="startDate" className="reset-input-headers">
              Start Date
            </Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            {err && startDate === "" ? (
              <span className="reset-err-msg">Kindly enter the date you wish to start your Leave</span>
            ) : null}

            <Form.Label htmlFor="endDate" className="reset-input-headers">
              End Date
            </Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            {err && endDate === "" ? (
              <span className="reset-err-msg">Kindly enter the date you wish to end your Leave</span>
            ) : null}
          </Form.Group>

          <Button className="edit-washman-profile-btn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>}

      {/* Modal for pending leave application */}
      {/* <div  */}
      <Modal show={showModal} onHide={() => setShowModal(false)} className="washman-modal">
        <Modal.Header closeButton>
          <Modal.Title>Pending Leave Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have a pending leave application. You cannot apply for new leave
          until the pending application is resolved.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </div> */}
    </div>
  );
}

export default WashmanLeaveForm;
