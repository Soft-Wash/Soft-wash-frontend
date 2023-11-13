import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";

function SelectedCart(){

    const [cartItems, setCartItems]= useState()
    const clothId = localStorage.getItem('clothQuantity').split('')[1]
    console.log(clothId)

    // useEffect(()=>{
    //     axiosInstance.get(`/cloth/${clothId}`)
    // },[])

    return(
        <Container>
            <div className="">
                <div className="d-flex justify-content-between border-bottom pb-3">
                    <h3 className="date-headers">Selected Items</h3>
                    <Button className="px-4 " variant="primary">Edit</Button>
                </div>
                <div>
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
                </div>
            </div>
        </Container>
    )
}


export default SelectedCart;