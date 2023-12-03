import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight } from "react-icons/fa";
import bovi from "../../assets/images/bovi.jpeg"
import washman from "../../assets/images/washman.jpg"
import image2 from "../../assets/images/image2.avif"

function SupervisorTeam() {
  return (
    <div>
        <div className="MainCards d-flex">
            <Card style={{ width: '18rem', borderColor:"grey", backgroundColor:"transparent"}}>
                <Card.Body>
                    <Card.Title className='mb-5'>SOFT-WASH TEAM</Card.Title>
                    <div className='FrotDesk'>
                        <Card.Subtitle className="mb-3 text-muted px-3">Front Desk</Card.Subtitle>
                        <div className="FrontDesk1 d-flex align-items-center justify-content-between px-3 py-2" >
                            <img className='RoundedImg' src={bovi} alt="Avatar"></img>
                            <div className=''>
                                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Bovi</div>
                                <span>online</span>
                            </div>
                            
                        </div>
                        <div className="FrontDesk2 d-flex align-items-center justify-content-between px-3 py-2">
                            <img className='RoundedImg' src={image2} alt="Avatar"></img>
                            <div className=''>
                                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Jack</div>
                                <span>online</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className='Washman'>
                        <Card.Subtitle className="mb-3 mt-3 text-muted px-3">WashMen</Card.Subtitle>
                        <div className="FrontDesk1 d-flex align-items-center justify-content-between px-3 py-2" >
                            <img className='RoundedImg' src={washman} alt="Avatar"></img>
                            <div className=''>
                                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Bovi</div>
                                <span>online</span>
                            </div>
                            
                        </div>
                        <div className="FrontDesk2 d-flex align-items-center justify-content-between px-3 py-2">
                            <img className='RoundedImg' src={image2} alt="Avatar"></img>
                            <div className=''>
                                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Jack</div>
                                <span>online</span>
                            </div>
                            
                        </div>
                    </div>
                    <Card.Text>

                    </Card.Text>
                    <Card.Link style={{textDecoration:"none", float:"right"}} href="#">More Details <FaArrowAltCircleRight /></Card.Link>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default SupervisorTeam