import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanOrder.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function WashmanOrdersBody(){

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/order/`)
        .then((resp) => {
            console.log(resp)
            setOrders(resp.data);
        })
        .catch((error) => {
            console.error("Error fetching orders:", error);
          });
    },[])



    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN ORDERS</h2>
                </div>     
                <div className="washman-table-div">
                    <table className="washman-content-table">
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Order ID</th>
                                <th>Payment Status</th>
                                <th>Sub Total</th>
                                <th>Order Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th><Link to={`/washman-single-order/${order._id}`} className="washman-table-link">
                                    {order._id}
                                </Link></th>
                                <th>{order.payment_status}</th>
                                <th>{order.subtotal}</th>
                                <th>{order.status}</th>
                                <th>{order.schedule_date}</th>
                            </tr>                                    
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default WashmanOrdersBody;