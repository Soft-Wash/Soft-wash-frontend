import '../styles/Datepage.css'
import BookingPickUpMode from '../components/BookingPickUpMode';
import Calender from '../components/Calender';
import SelectedCart from '../common/SelectedCart';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import BookingBanner from '../components/BookingBanner';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




function DatePage (){
    const navigate = useNavigate();
    const [isOptionSelected, setIsOptionSelected] = useState(false);

//     const deliveryType = JSON.parse(localStorage.getItem('deliveryType'))
//     console.log(deliveryType)

    
//   if (!deliveryType || Object.keys(deliveryType).length === 0) {
//     // alert('Select payment type before confirming the order.');
//     toast.error('Select Service Required')
    
//     return; 

//   }

function DeliveryType() {
    const deliveryOption = JSON.parse(localStorage.getItem("deliveryType"));
    const deliveryDate = JSON.parse(localStorage.getItem("calenderStartDate"));
    // const deliveryTime = JSON.parse(localStorage.getItem("calenderSelectedTime"));
    return { deliveryOption, deliveryDate};
}

const handleDeliveryOption = () => {
    const deliveryOption = DeliveryType().deliveryOption;
    const deliveryDate = DeliveryType().deliveryDate

    if (deliveryOption && deliveryDate) {
        navigate('/address');
        console.log('here')
    } else {
        toast.error('Select Service & Date ');
    }
};

    return(
       <div>
            <ToastContainer position="top-center" />
            <BookingBanner />
            <Container>
            <div className='date-body justify-content-between'>
                <div className='date-body-left'>
                    <BookingPickUpMode />
                    <Calender />
                </div>
                <div className='select-pickup-type date-body-right'>
                    <SelectedCart />
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <Link to="/ClothesSelection">
                <Button variant="light" border="primary" >Previous</Button>
                </Link>
                <Button className='px-4 mx-3' variant="primary" onClick ={handleDeliveryOption}>Next</Button>

                {/* <Button disabled={!isOptionSelected}>Next</Button> */}

            </div>
            </Container>
            
            
       </div> 
    )
}


export default DatePage;