import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanEditProfile.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";



function WashmanEditProfileBody() {
  const [fullName, setFullName] =useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();


  const [washman, setWashman] = useState({});
    const [error, setError] = useState("");

    const [washmanID, setWashmanID] = useState("")
    ;

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
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${washmanID}`)
                setWashman(response.data);
                console.log(washman);                
            }
            catch (error) {
                setError(error.message || 'An error occurred while fetching Washman.');
            } 
        }        
        
        if(washmanID){
          fetchWashman();
      }
    }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      fullName: fullName,
      email: email,
      address: address
    }

    const updatedProfile = await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${washmanID}/update`, body);
    console.log(updatedProfile.data)
  }



  return (
    <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>EDIT PROFILE</h2>
        </div>
        <div>
          <Form className="centralize  mt-4" onSubmit={handleSubmit}>
            <Form.Group className="washman-edit-profile-input">
              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={washman.fullName}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder={washman.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Form.Label
                htmlFor="formBasicEmail"
                className="reset-input-headers"
              >
                Home Address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={washman.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              {err && email === "" ? (
                <span className="reset-err-msg">Kindly enter your email</span>
              ) : null}
            </Form.Group>

            <Button className="edit-washman-profile-btn" type="submit" >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default WashmanEditProfileBody;
