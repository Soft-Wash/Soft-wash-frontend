import '../../styles/UserOrderDetails.css';
import { FaCircleInfo, FaHotTubPerson, FaMoneyCheckDollar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";
import {useEffect,useState} from "react"
import { axiosInstance } from "../../services/AxiosInstance";




function OrderDetailsBody(){

    let [count, setCount] = useState(0);
    // const progress = 20;
    const [progress, setProgress] = useState(0);


    const [orderdetails,setorderDetails] = useState()
    const [pickUpDateValue, setpickUpDate]=useState()

useEffect(()=>{
const orderId = JSON.parse(localStorage.getItem('OrderDetailsId'))
axiosInstance.get(`/order/${orderId}/order`)
.then((resp)=> {
  console.log(resp.data)
  setorderDetails(resp.data)
  const pickUpDate = resp.data.schedule_date;
  const latestDate = new Date(pickUpDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const pickUpDateValue = latestDate.toLocaleDateString('en-US', options);
  setpickUpDate(pickUpDateValue);
})
},[])

    
    return(
        <div className="dashboard-bg">
            <h4 className='order-details-tag'>Order Details</h4>

            <div className="user-dashboard-contact-body">
                <div className='order-header'>
                    <FaCircleInfo className='green-icon'/>
                    <h4>Order info</h4>
                </div>   
                <div className='order-field'>
                    <h3>Order Id </h3>
                    <p>{orderdetails?._id.substring(0, orderdetails?._id.length / 2)}</p>
                </div>
                <div className='order-field'>
                    <h3>Pickup Date & Time </h3>
                    <p>{`${pickUpDateValue} ${orderdetails?.pickuptime}`}</p>
                </div>
                <div className='order-field'>
                    <h3>Status</h3>
                    <p>{orderdetails?.status}</p>
                </div>
                <div className='order-header'>
                    <FaHotTubPerson className='green-icon'/>
                    <h4>Item Detail</h4>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mens Wear</Accordion.Header>
                        <Accordion.Body>
                            {orderdetails?.clothtype_ids&&orderdetails?.clothtype_ids.map((item)=>(
                            <div className="cart-item">
                            <div className="d-flex justify-content-between">
                                <h5>{item.name}</h5>
                                <h5>N{orderdetails.subtotal}</h5>
                            </div>
                            <p>{`2 x N${item.price} / per piece`}</p>
                        </div>
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>      
                </Accordion>
                <div className='order-header'>
                    <FaMoneyCheckDollar className='green-icon'/>
                    <h4>Total Price</h4>
                </div>   
                <div className='order-field'>
                    <h3>Sub-total Price</h3>
                    <p>N{orderdetails?.subtotal}</p>
                </div>
                <div className='order-field'>
                    <h3>VAT</h3>
                    <p>7.5%</p>
                </div>
                <div className='order-field'>
                    <h3>Total</h3>
                    <p>N16,500</p>
                </div>
                <Col lg={12} md={6} sm={10} className="text-center position-relative">
                    
                    <Row classname="w-100 align-centre">
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
                        </div>
                        
                        
                        
                    </Container>

                        <Col className="px-4 position-relative neg-top-15" style={{top:"-30px", zIndex:"-1"}}>
                        <ProgressBar now={progress} variant="info"  className=" duration-300 " style={{height:"2px"}}/>
                        </Col>

                        
                    </Row>
                </Col>
            </div>
        </div>
    )
    
}


export default OrderDetailsBody;