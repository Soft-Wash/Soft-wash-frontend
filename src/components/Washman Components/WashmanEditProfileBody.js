import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Washman Styles/WashmanProfile.css";
import "../../styles/Washman Styles/WashmanEditProfile.css";
import Form from "react-bootstrap/Form";


function WashmanEditProfileBody(){

    const [email, setEmail] = useState("");
    const [err, setErr] = useState(false);
    const Navigate = useNavigate();

    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>EDIT PROFILE</h2>
                </div>                                
                <div>
                <Form className="centralize  mt-4" >
                    <Form.Group className="washman-edit-profile-input">
                        <Form.Label
                            htmlFor="formBasicEmail"
                            className="reset-input-headers"
                            >
                            First Name
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Form.Label
                        htmlFor="formBasicEmail"
                        className="reset-input-headers"
                        >
                        Last Name
                        </Form.Label>
                        <Form.Control
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

<Form.Label
                        htmlFor="formBasicEmail"
                        className="reset-input-headers"
                        >
                        Email address
                        </Form.Label>
                        <Form.Control
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />



                       
                        
                        {err && email === "" ? (
                        <span className="reset-err-msg">Kindly enter your email</span>
                        ) : null}
                    </Form.Group>

                    
                    <Button className="edit-washman-profile-btn" type="submit">
                        Save
                    </Button>     
                </Form>
                </div>        
            </div>
        </div>
    )
}


export default WashmanEditProfileBody;