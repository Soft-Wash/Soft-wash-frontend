import React from 'react'
import Paymentpage from '../styles/Paymentpage.css'
import card from "../assets/images/card.jpg";
import cash from "../assets/images/cash.jpg"
import BookingBanner from '../components/BookingBanner';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosInstance } from '../services/AxiosInstance';

function PaymentPage() {
    const [selectedTime,setSelectedTime] = useState()
    const [selectedDate,setSelectedDate] = useState()
    const [selectedQuantity,setSelectedQuantity] = useState()
    const [selectedDeliveryType,setSelectedDeliveryType] = useState()
    const [selectedAddressInfo,setSelectedAddressInfo] = useState()
    const [customerId, setCustomerId]= useState()
    const [clothIds,setClothIds] = useState()
    const [userOrder, setuserOrder]= useState()
    const [newlocaldate,setnewlocaldate]=useState(selectedDate)
    const options = { day: 'numeric', month: 'long' };
    let orderDetails = {}

    const navigate = useNavigate()



    useEffect(() => {
        const calenderSelectedTime = localStorage.getItem('calenderSelectedTime');
        const calenderSetDate = localStorage.getItem('calenderStartDate');
        const storedDate = new Date(JSON.parse((calenderSetDate)));
        const clothQuantity = localStorage.getItem('clothQuantity');
        const deliveryType = localStorage.getItem('deliveryType');
        const selectedAddress = localStorage.getItem('selectedAddress');
        const customer_id = localStorage.getItem('softwashUser')
        const options = { day: 'numeric', month: 'long' };

        const parsedCalenderSelectedTime = calenderSelectedTime ? JSON.parse(calenderSelectedTime) : null;
        const parsedCalenderSetDate = storedDate 
        const parsedClothQuantity = clothQuantity ? JSON.parse(clothQuantity) : null;
            if (parsedClothQuantity){
        let keys = Object.keys(parsedClothQuantity);
        const values = Object.values(parsedClothQuantity);
        setClothIds(keys)


    }
        const parsedDeliveryType = deliveryType ? JSON.parse(deliveryType) : null;
        const parsedSelectedAddress = selectedAddress ? JSON.parse(selectedAddress) : null;
        const parsedCustomerData = customer_id ? JSON.parse(customer_id) : null;
        setSelectedTime(parsedCalenderSelectedTime);
        setSelectedDate(parsedCalenderSetDate);
        setSelectedQuantity(parsedClothQuantity);
        setSelectedDeliveryType(parsedDeliveryType);
        setSelectedAddressInfo(parsedSelectedAddress);
        setCustomerId(parsedCustomerData)
        setnewlocaldate(selectedDate)



    }, []);
//     console.log(clothIds)
//     console.log(selectedDate)
//    console.log(newlocaldate)
   const pickUpDateValue = newlocaldate.toDateString('en-US', options);




    orderDetails={
        customer_id:customerId?.noPasswordUser?._id,
        clothtype_ids:clothIds,
        subtotal:20000,
        schedule_date:selectedDate,
        delivery_type:2
    }

    console.log(orderDetails)

 const postOrder =()=>{
    axiosInstance.post('/order/create',orderDetails)
    .then((resp)=>{
        console.log(orderDetails)
        console.log(resp.data)
        setuserOrder(resp.data)
        
        userOrder && localStorage.setItem("orderDetails", JSON.stringify(userOrder));
       
        navigate('/order-receipt')
    })









}

  return (
    <div>
        <BookingBanner/>
        <div className='container'>
            {/* <EmixNav/> */}
            <div className='p-3'>
                <div className="payOps row">
                    <div className="payOpsLeft col md-12">
                        <div>
                            <h5 class="TextColor fw-5">Choose Payment Method</h5>
                            <div className="div1 GreyBorder2 rounded-top-3">
                            <div className="PayOpsCard">
                                <div style={{display:"flex", alignItems:"center", gap:"50px"}} >
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    Pay With Card
                                    </label>
                                </div>
                                <div>
                                    <img className='PayOpsImg' src={card} alt="" />
                                </div>
                            </div>
                            </div>
                            <div className="div2 GreyBorder2">
                            <div className="PayOpsCash">
                                <div className='PaymtText' style={{display:"flex", alignItems:"center", gap:"50px"}} >
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                    Pay With Cash
                                    </label>
                                </div>
                                <div>
                                    <img className='PayOpsImg' src={cash} alt="" />
                                </div>
                            </div>
                            </div>
                            <div className='PickUpDetails GreyBorder mt-3 p-3'>
                                <div className="PickUpAddress py-3">
                            <h5 class="TextColor pt-3 fw-5">Pick Up Information</h5>
                            <div className='Address py-3'>
                                <h6 className='fw-bold'>Pic-Up Address</h6>
                                <p>{selectedAddressInfo?.FullAddress}</p>
                                <Link to="/address">
                                <button className='btn btn-outline-primary px-5 '>Change</button>
                                </Link>

                            </div>
                                </div>
                                <div className='PickUpDate'>
                            <h6 className='fw-bold'>Pic-Up Date</h6>
                            <p>{pickUpDateValue}</p>
                            <Link to="/date">
                            <button className='btn btn-outline-primary px-5 '>Change</button>
                            </Link>

                                </div>
                            </div>
                            <div className="PrevNextBtn">
                            <Link to="/address">
                                <button className='btn btn-outline-primary px-5 '>Prev</button>
                                </Link>
                            <button className='btn btn-info px-5' onClick={postOrder}>Confirm</button>
                            </div>
                        </div>
                    </div>
                    <div className="PayOpsRight col md-12">
                        <h5 class="TextColor fw-5">Price Details</h5>
                        <div className="div3 GreyBorder">
                           <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2">
                                <div>Subtotal</div> 
                                <div>Naira : 1500 </div>
                           </div>
                           <div className="PriceTab2 d-flex justify-content-between p-3 GreyBorder2">
                                <div>Delivery Fees</div> 
                                <div>Naira : 1500 </div>
                           </div>
                           <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2">
                                <div>Discount</div> 
                                <div>Naira : 0.00 </div>
                           </div>
                           <div className="PriceTab1 d-flex justify-content-between p-3 GreyBorder2 ">
                                <div>Tax</div> 
                                <div>Naira : 0.75 </div>
                           </div>
                           <div className="PriceTab1 d-flex justify-content-between p-3 ">
                                <div><h4>Total</h4></div> 
                                <div><h4>Naira : 0.75</h4> </div>
                           </div>
                        </div>
                        <div className="PrevNextBtnRight">

                            <button className='btn btn-outline-primary  '>Prev</button>
                            <button className='btn btn-info' >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default PaymentPage