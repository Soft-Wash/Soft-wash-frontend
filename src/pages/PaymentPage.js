import React from 'react'
import Paymentpage from '../styles/Paymentpage.css'
import card from "../assets/images/card.jpg";
import cash from "../assets/images/cash.jpg"
import BookingBanner from '../components/BookingBanner';
import { Link } from 'react-router-dom';

function PaymentPage() {
  return (
    <div>
        <BookingBanner/>
        <div className='container'>
            {/* <EmixNav/> */}
            <div className='p-3'>
                <div className="payOps">
                    <div className="payOpsLeft">
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
                                <div style={{display:"flex", alignItems:"center", gap:"50px"}} >
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
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
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit est quibusdam velit in quam quis illum sed, possimus placeat cumque.</p>
                                <Link to="/address">
                                <button className='btn btn-outline-primary px-5 '>Change</button>
                                </Link>

                            </div>
                                </div>
                                <div className='PickUpDate'>
                            <h6 className='fw-bold'>Pic-Up Date</h6>
                            <p>10 Nov 2023.</p>
                            <Link to="/date">
                            <button className='btn btn-outline-primary px-5 '>Change</button>
                            </Link>

                                </div>
                            </div>
                            <div className="PrevNextBtn">
                                <Link to="/address">
                                <button className='btn btn-outline-primary px-5 '>Prev</button>
                                </Link>

                            <Link to="/order-receipt">
                            <button className='btn btn-info px-5'>Confirm</button>
                            </Link>

                            </div>
                        </div>
                    </div>

                    <div className="PayOpsRight">
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
                        <div className="div4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage