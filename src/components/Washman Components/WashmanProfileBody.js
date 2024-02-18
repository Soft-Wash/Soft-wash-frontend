import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css";
import profilePic from "../../assets/washman/kevin2.jpg";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";



function WashmanProfileBody(){

    const [error, setError] = useState("");
    
    const [washmanID, setWashmanID] = useState("");
    const [washman, setWashman] = useState({});

    useEffect(() => {
    }, [])
    
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
                // console.log(washman)
                setWashman(response.data);
                console.log(response.data);          
            }
            catch (error) {
                setError(error.message || 'An error occurred while fetching Washman.');
            } 
        }
        
        if(washmanID){
            fetchWashman();
        }
    }, [washmanID])


    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN PROFILE</h2>
                </div>
                <div className="washman-profilePic-sec d-flex">
                    <div className="washman-profilePic">
                        <img src={profilePic}/>
                    </div>
                    <Button className="washman-dp-btn">Change Photo</Button>
                </div>   
                {/* {washman.map((staff, i) => ( */}
                    <div >                        
                        <div className="washman-profile-field">
                            <h4>First Name</h4>
                            <h4>{washman.fullName}</h4>
                        </div>
                        <div className="washman-profile-field">
                            <h4>Email</h4>
                            <h4>{washman.email}</h4>
                        </div>   
                        <div className="washman-profile-field">
                            <h4>Age</h4>
                            <h4>{washman.age}</h4>
                        </div>  
                        <div className="washman-profile-field">
                            <h4>Address</h4>
                            <h4>{washman.address}</h4>
                        </div>
                    </div> 
                 {/* ))} */}
                     
                <Link to={"/washman-edit-profile"} className="washman-form-link">
                <Button className="edit-washman-profile-btn">Edit Profile</Button>     
                </Link>  
            </div>
        </div>
    )
};


export default WashmanProfileBody;