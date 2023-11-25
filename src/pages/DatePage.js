import '../styles/Datepage.css'
import BookingPickUpMode from '../components/BookingPickUpMode';
import Calender from '../components/Calender';
import SelectedCart from '../common/SelectedCart';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import BookingBanner from '../components/BookingBanner';
import React, { useState } from 'react';




function DatePage (){

    const [isOptionSelected, setIsOptionSelected] = useState(false);


    return(
       <div>
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

                <Link to="/address">
                <Button className='px-4 mx-3' variant="primary" disabled={!isOptionSelected}>Next</Button>
                </Link>
        {/* <Button disabled={!isOptionSelected}>Next</Button> */}

            </div>
            </Container>
            
            
       </div> 
    )
}


export default DatePage;