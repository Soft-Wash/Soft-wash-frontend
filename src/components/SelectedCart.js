import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Native from '../assets/images/Native.png';
import Native2 from '../assets/images/Native2.png';
import suits from '../assets/images/suits.png';
import Selectedcart from '../styles/Selectedcart.css';

function SelectedCart(){

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
                            <div className="container">
                                <div className="cart-item1 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={Native} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                                <div className="cart-item2 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={suits} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                                <div className="cart-item3 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={Native2} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>      
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ladies Wear</Accordion.Header>
                        <Accordion.Body>
                            <div className="container">
                                <div className="cart-item1 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={Native} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                                <div className="cart-item2 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={suits} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
                                <div className="cart-item3 GreyBorderB">
                                    <div className="">
                                      <div className="d-flex align-items-center ">
                                        <div>
                                            <img className="Imgselection"  src={Native2} alt="Native" />
                                        </div>
                                        <div className="mx-5">
                                            <h5>Native</h5>
                                            <span>2 x N2,000 / per piece</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                </div>
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