import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanSingleOrder.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function WashmanSingleOrderBody(){
    const [selectedOption, setSelectedOption] = useState("Order Placed");
    const [order, setOrder] = useState(null);
    const { _id } = useParams();


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/order/${_id}/order`)
          .then((resp) => {
            console.log(resp)
            setOrder(resp.data); 
          })
          .catch((error) => {
            console.error("Error fetching order:", error);
          });
      }, []);
     

    const  handleSeleectChange = async (e) =>{
        setSelectedOption(e.target.value);
        
        if (selectedOption === "Order Placed"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })
            }
            else if (selectedOption === "Confirmed"){
                console.log(selectedOption)
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })               
            }
            else if (selectedOption === "Recieved"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })                
            } 
            else if (selectedOption === "Cleaning"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })                
            }
            else if (selectedOption === "Ready"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })             
            }
            else if (selectedOption === "Shipped"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })              
            }
            else if (selectedOption === "Delivered"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                })               
            }
        } 
    



    return(
        <div className="washman-bg">
        <div className="washman-page-content">
            <div className="washman-header">
                <h2>ORDER DETAILS</h2>
            </div>
            <div className="washman-single-order-content">                    

                    {order && Object.entries(order).map(([key, value]) => (
                    typeof value === 'string' ? (
                        <div key={key} className="washman-profile-field">
                        <h4>{key}</h4>
                        <h4>{value}</h4>
                        </div>
                    ) : null
                    ))}
                    
                    <div className="washman-profile-field">
                        <h4>Order Status</h4>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="Order Placed">ORDER PLACED</option>
                            <option value="Confirmed">CONFIRMED</option>
                            <option value="Recieved">RECEIVED</option>
                            <option value="Cleaning">CLEANING</option>
                            <option value="Ready">READY</option>
                            <option value="Shipped">SHIPPED</option>
                            <option value="Delivered">DELIVERED</option>
                        </select>
                    </div>
                </div>       
            <Button className="edit-washman-profile-btn" onClick={handleSeleectChange}>Update Order</Button>     
        </div>
    </div>
    )
}



export default WashmanSingleOrderBody;