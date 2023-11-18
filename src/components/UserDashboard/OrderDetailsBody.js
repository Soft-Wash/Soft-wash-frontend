import '../../styles/UserOrderDetails.css';
import { FaCircleInfo, FaHotTubPerson, FaMoneyCheckDollar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";



function OrderDetailsBody(){

    let [count, setCount] = useState(0);
    // const progress = 20;
    const [progress, setProgress] = useState(0);

      return(
        <div className="dashboard-bg">
            <h1>Order Details</h1>
            <div className="user-dashboard-contact-body">
                <div className='order-header'>
                    <FaCircleInfo className='green-icon'/>
                    <h4>Order info</h4>
                </div>   
                <div className='order-field'>
                    <h3>Order Id </h3>
                    <p>ORD29384</p>
                </div>
                <div className='order-field'>
                    <h3>Pickup Date & Time </h3>
                    <p>2nd December 2023 5pm</p>
                </div>
                <div className='order-field'>
                    <h3>Status</h3>
                    <p>Placed Order</p>
                </div>
                <div className='order-header'>
                    <FaHotTubPerson className='green-icon'/>
                    <h4>Item Detail</h4>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mens Wear</Accordion.Header>
                        <Accordion.Body>
                            <div className="cart-item">
                                <div className="d-flex justify-content-between">
                                    <h5>Tie</h5>
                                    <h5>N4,000</h5>
                                </div>
                                <p>2 x N2,000 / per piece</p>
                            </div>
                            <div className="cart-item">
                                <div className="d-flex justify-content-between">
                                    <h5>T-Shirt</h5>
                                    <h5>N12,500</h5>
                                </div>
                                <p>5 x N2,500 / per piece</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>      
                </Accordion>
                <div className='order-header'>
                    <FaMoneyCheckDollar className='green-icon'/>
                    <h4>Total Price</h4>
                </div>   
                <div className='order-field'>
                    <h3>Sub-total Price</h3>
                    <p>N5,000</p>
                </div>
                <div className='order-field'>
                    <h3>VAT</h3>
                    <p>7.5%</p>
                </div>
                <div className='order-field'>
                    <h3>Total</h3>
                    <p>N16,500</p>
                </div>
                <Col lg={12} md={10} sm={10} className="text-center position-relative">
                    
                    <Row classname="w-500px">
                    <Container className=" d-flex gap-5 mt-4 position-relative">
                        <div className='order-progress-circle '>
                            <Col
                            className={`duration-500 border border-4 ${ "border-info"}  text-center rounded-circle  bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                                <p className="  fw-semibold fs-4 text-secondary mt-sm"><FaCheck className='progress-bar-ckeck'/></p>
                            </Col>
                            <h6>ORDER PLACED</h6>
                            <hr className='progress-line1'/>
                        </div>
                                            

                        <div className='order-progress-circle'>
                            <Col
                                className={`duration-500 border border-4 ${progress > 12.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                                style={{ height: "50px", width: "50px" }}
                                >
                                <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                            </Col>
                            <h6>CONFIRMED</h6>
                            <hr className='progress-line2'/>
                        </div>
                        

                        <div className='order-progress-circle'>
                        <Col
                            className={`duration-500 border border-4 ${progress > 25 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>RECIEVED</h6>
                        <hr className='progress-line2'/>
                        </div>
                        
                        
                        <div className='order-progress-circle'>
                        <Col 
                            className={`duration-500 border border-4 ${progress > 37.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>CLEANING</h6>
                        <hr className='progress-line2'/>
                        </div>
                        
                        
                        <div className='order-progress-circle'>
                        <Col 
                            className={`duration-500 border border-4 ${progress > 37.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>READY</h6>
                        <hr className='progress-line2'/>
                        </div>
                        
                        
                        <div className='order-progress-circle'>
                        <Col 
                            className={`duration-500 border border-4 ${progress > 37.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>SHIPPED</h6>
                        <hr className='progress-line2'/>
                        </div>
                        
                        
                        <div className='order-progress-circle'>
                        <Col 
                            className={`duration-500 border border-4 ${progress > 37.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>DELIVERED</h6>
                        <hr className='progress-line2'/>
                        </div>
                        
                        
                        <div className='order-progress-circle'>
                        <Col 
                            className={`duration-500 border border-4 ${progress > 37.5 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                            style={{ height: "50px", width: "50px" }}
                            >
                            <p className=" fw-semibold fs-4 text-secondary mt-sm"></p>
                        </Col>
                        <h6>DECLINED</h6>
                        </div>                    
                    </Container>

                        <Col className="px-4 position-relative neg-top-15" style={{top:"-30px", zIndex:"-1"}}>
                        <ProgressBar now={progress} variant="info"  className=" duration-300 " style={{height:"2px"}}/>
                        </Col>

                        
                    </Row>
                </Col>



                                {/* Inside the Container */}
                {/* <Container className="d-flex gap-5 mt-1 position-relative">
                    <Col className={`duration-500 border border-4 ${progress > 0 ? "border-info"  : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                        <p className="mt-1 fw-semibold fs-4 text-secondary mt-sm">1</p>
                    </Col>
                    
                    <div className={`progress-line ${progress > 20 ? "line-info" : null}`} />
                    <Col className={`duration-500 border border-4 ${progress > 20 ? "border-info" : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                        <p className="mt-1 fw-semibold fs-4 text-secondary mt-sm">2</p>
                    </Col>

                    <div className={`progress-line ${progress > 40 ? "line-info" : null}`} />
                    <Col className={`duration-500 border border-4 ${progress > 20 ? "border-info" : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                    </Col>
                    <div className={`progress-line ${progress > 40 ? "line-info" : null}`} />
                    <Col className={`duration-500 border border-4 ${progress > 20 ? "border-info" : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                    </Col>
                    <div className={`progress-line ${progress > 40 ? "line-info" : null}`} />
                    <Col className={`duration-500 border border-4 ${progress > 20 ? "border-info" : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                    </Col>
                    <div className={`progress-line ${progress > 40 ? "line-info" : null}`} />
                    <Col className={`duration-500 border border-4 ${progress > 20 ? "border-info" : null} text-center rounded-circle bg-white size-sm-30px`} style={{ height: "50px", width: "80px" }}>
                    </Col>
                    <div className={`progress-line ${progress > 40 ? "line-info" : null}`} />
                </Container> */}
                {/* <div className="tick-icon" style={{ left: `${progress}%` }}> */}
                {/* Insert your tick icon component here */}
                {/* </div> */}

            </div>
        </div>
    )
    
}


export default OrderDetailsBody;
