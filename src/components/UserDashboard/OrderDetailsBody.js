import '../../styles/UserOrderDetails.css';
import { FaCircleInfo, FaHotTubPerson, FaMoneyCheckDollar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';
import {useEffect,useState} from "react"
import { axiosInstance } from "../../services/AxiosInstance";




function OrderDetailsBody(){

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
            <h1>Order Details</h1>

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
            </div>
        </div>
    )
}


export default OrderDetailsBody;
