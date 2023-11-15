import '../styles/Datepage.css'
import BookingBanner from "../components/BookingBanner";
import BookingPickUpMode from '../components/BookingPickUpMode';
import Calender from '../components/Calender';
import SelectedCart from '../common/SelectedCart';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Navigation from '../common/Navigation';
import { Link } from 'react-router-dom';




function DatePage (){
    return(
       <div>
            <Navigation />
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
                <Button className='px-4 mx-3' variant="primary">Next</Button>
                </Link>

            </div>
            </Container>
            
            
       </div> 
    )
}


export default DatePage;