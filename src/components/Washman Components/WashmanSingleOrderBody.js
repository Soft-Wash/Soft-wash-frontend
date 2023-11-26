import { Button } from "react-bootstrap";
import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanSingleOrder.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";





function WashmanSingleOrderBody(){
    const [selectedOption, setSelectedOption] = useState("Order Placed");
    const [order, setOrder] = useState(null);
    const { _id } = useParams();


    let arr = ["Order Placed", "Confirmed", "Recieved", "Cleaning", "Ready", "Shipped", "Delivered"];
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateProgressBar = () => {
      const newPosition = currentIndex * (100 / (arr.length - 1));
      setProgress(newPosition);
    };




    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/order/${_id}/order`)
          .then((resp) => {
            console.log(resp)
            setOrder(resp.data); 
            updateProgressBar();
          })
          .catch((error) => {
            console.error("Error fetching order:");
          });
      }, [currentIndex]);
     

    const  handleSeleectChange = async (e) =>{
      // const newSelectedOption = e.target.value;
      //   setSelectedOption(newSelectedOption);
      //   const newIndex = arr.indexOf(newSelectedOption);        

      //   setCurrentIndex(newIndex);
        // updateProgressBar();
      //   console.log("a")

      //   const newPosition = newIndex * (100 / (arr.length - 1));
      //   setProgress(newPosition);
      //   console.log(newPosition);


      const newSelectedOption = e.target.value;
      setSelectedOption(newSelectedOption);
      const newIndex = arr.indexOf(newSelectedOption);

      setCurrentIndex(newIndex);

      // Update the progress bar here
      const newPosition = newIndex * (100 / (arr.length - 1));
      setProgress(newPosition);



        if (selectedOption === "Order Placed"){
                console.log(selectedOption)              
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                  console.log(resp)  
                  updateProgressBar();
                  console.log("a")
                })
            }
            else if (selectedOption === "Confirmed"){
                console.log(selectedOption)
                axios.put(`${process.env.REACT_APP_BASE_URL}/order/${_id}/update`, {status: selectedOption})
                .then((resp) =>{
                    console.log(resp)  
                  updateProgressBar();
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

            <Col sm={12} md={7} lg={7} className="mt-4 d-flex align-items-center justify-content-between d-md-flex">
            
            {/* BUTTON */}
            {/* <Col sm={12} md={12} lg={7} className="mt-4 d-flex align-items-center justify-content-between d-md-flex">
                  <Col md={1} sm={1} className="d-flex align-items-center">
                    <Button variant="info text-white" onClick={handlePrevClick}>
                      Prev
                    </Button>
            </Col> */}

            

            <div style={{width:"80vw"}}>
            <Col lg={10} md={10} sm={10} className="text-center position-relative" >
              
              <Row className=" position-relative mx-4" >
              <Container className=" d-flex gap-5 mt-1" >
                <Col
                  className={`duration-500 border border-4 ${ "border-info"}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className="fw-semibold fs-4 text-secondary mt-sm">1</p>
                </Col>

                <Col
                  className={`duration-500 border border-4 ${progress > 14 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">2</p>
                </Col>

                <Col
                  className={`duration-500 border border-4 ${progress > 28 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">3</p>
                </Col>
                
                <Col 
                  className={`duration-500 border border-4 ${progress > 42 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">4</p>
                </Col>
                
                <Col 
                  className={`duration-500 border border-4 ${progress > 56 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">5</p>
                </Col>
                
                <Col 
                  className={`duration-500 border border-4 ${progress > 70 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">6</p>
                </Col>
                
                <Col 
                  className={`duration-500 border border-4 ${progress > 84 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "50px", width: "60px", padding: "5px 10px", background: "transparent", zIndex:"5"}}
                >
                  <p className=" fw-semibold fs-4 text-secondary mt-sm">7</p>
                </Col>
              </Container>

                <Col className="px-4 position-absolute neg-top-15" style={{top:"25px", zIndex:"1",  left: "0", right: "0"}}>
                <ProgressBar now={progress} variant="info" className=" duration-300 " style={{height:"4px", width: "100%"}}/>
                </Col>
              </Row>
            </Col>
            </div>

            
            {/* BUTTON */}
              {/* <Col md={1} sm={1} className="d-flex align-items-center">
                    <Button variant="info text-white" onClick={handleNextClick}>
                      Next
                    </Button>
              </Col> */}
            </Col>

            {/* </Col>   */}
        </div>
    </div>
    )
}



export default WashmanSingleOrderBody;