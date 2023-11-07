import '../../styles/UserOrderDetails.css';
import { FaCircleInfo, FaHotTubPerson, FaMoneyCheckDollar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';





function OrderDetailsBody(){
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
            </div>
        </div>
    )
}


export default OrderDetailsBody;