import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanSingleOrder.css"




function WashmanSingleOrderBody(){
    return(
        <div className="washman-bg">
        <div className="washman-page-content">
            <div className="washman-header">
                <h2>WASHMAN PROFILE</h2>
            </div>
            <div className="washman-single-order-content">
                    <div className="washman-profile-field">
                        <h4>Order ID</h4>
                        <h4>Peter</h4>
                    </div>
                    <div className="washman-profile-field">
                        <h4>Customer Name</h4>
                        <h4>Scott</h4>
                    </div>   
                    <div className="washman-profile-field">
                        <h4>Quantity</h4>
                        <h4>Male</h4>
                    </div>  
                    <div className="washman-profile-field">
                        <h4>Due Date</h4>
                        <h4>peterscott@gmail.com</h4>
                    </div>
                    <div className="washman-profile-field">
                        <h4>Order Status</h4>
                        <select>
                            <option>ORDER PLACED</option>
                            <option>CONFIRMED</option>
                            <option>RECEIVED</option>
                            <option>CLEANING</option>
                            <option>READY</option>
                            <option>SHIPPED</option>
                            <option>DELIVERED</option>
                            <option>DECLINE</option>
                        </select>
                    </div>
                </div>       
            <Button className="edit-washman-profile-btn">Update Order</Button>     
        </div>
    </div>
    )
}



export default WashmanSingleOrderBody;