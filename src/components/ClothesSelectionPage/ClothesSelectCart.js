import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Native from "../../assets/images/Native.png";
import Native2 from "../../assets/images/Native2.png";
import suits from "../../assets/images/suits.png";
import ClothesSelectCounter from "./ClothesSelectCounter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClothesSelectcart from "../../styles/ClothesSelectcart.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";

function SelectedCart() {

 const [kidsWear,setkidsWear] = useState()
 const [accessories,setAccessories] = useState()
 const [shoes,setShoes] = useState()
 const [homeLinen,sethomeLinen] = useState()
 useEffect(()=>{
    axiosInstance.get(`/cloth/kidswear`)
    .then((resp)=>{
        console.log(resp.data)
        setkidsWear(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })

    axiosInstance.get(`/cloth/acccessories`)
    .then((resp)=>{
        console.log(resp.data)
        setAccessories(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })

    axiosInstance.get(`/cloth/shoes`)
    .then((resp)=>{
        console.log(resp.data)
        setShoes(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })

    axiosInstance.get(`/cloth/homelinen`)
    .then((resp)=>{
        console.log(resp.data)
        sethomeLinen(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })
 },[])



  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 gap-3"
        justify
      >
        <Tab eventKey="home" title="Dry Wash" className="custom-tab">
          <Container>
            <div className="d-flex justify-content-between border-bottom pb-3">
              <h3 className="date-headers">Select an Item(s)</h3>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className="MensWear">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mens Wear</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={suits}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native2}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Ladies Wear">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ladies Wear</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Regular">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Regular</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={suits}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native2}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Kids Wear">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Kids Wear</Accordion.Header>
                  {kidsWear && kidsWear.map((item)=>(
                  <Accordion.Body>
                  <div className="container">
                    <div className="cart-item1 GreyBorderB">
                      <div className="">
                        <div className="d-flex align-items-center ">
                          <div>
                            <img
                              className="Imgselection"
                              src={item.img}
                              alt="Native"
                            />
                          </div>
                          <div className="mx-5">
                            <h5>{item.name}</h5>
                            <span>&#8358;{`${item.price} / per piece`}</span>
                          </div>
                          <ClothesSelectCounter />
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
                  ))}

                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Accesories">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accesories</Accordion.Header>
                  {accessories && accessories.map((item)=>(
                  <Accordion.Body>
                  <div className="container">
                    <div className="cart-item1 GreyBorderB">
                      <div className="">
                        <div className="d-flex align-items-center ">
                          <div>
                            <img
                              className="Imgselection"
                              src={item.img}
                              alt="Native"
                            />
                          </div>
                          <div className="mx-5">
                            <h5>{item.name}</h5>
                            <span>&#8358;{`${item.price} / per piece`}</span>
                          </div>
                          <ClothesSelectCounter />
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
                  ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Shoes">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Shoes</Accordion.Header>
                  {shoes && shoes.map((item)=>(
                  <Accordion.Body>
                  <div className="container">
                    <div className="cart-item1 GreyBorderB">
                      <div className="">
                        <div className="d-flex align-items-center ">
                          <div>
                            <img
                              className="Imgselection"
                              src={item.img}
                              alt="Native"
                            />
                          </div>
                          <div className="mx-5">
                            <h5>{item.name}</h5>
                            <span>&#8358;{`${item.price} / per piece`}</span>
                          </div>
                          <ClothesSelectCounter />
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
                  ))}

                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Home Linen">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Home Linen</Accordion.Header>
                  {homeLinen && homeLinen.map((item)=>(
                  <Accordion.Body>
                  <div className="container">
                    <div className="cart-item1 GreyBorderB">
                      <div className="">
                        <div className="d-flex align-items-center ">
                          <div>
                            <img
                              className="Imgselection"
                              src={item.img}
                              alt="Native"
                            />
                          </div>
                          <div className="mx-5">
                            <h5>{item.name}</h5>
                            <span>&#8358;{`${item.price} / per piece`}</span>
                          </div>
                          <ClothesSelectCounter />
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
                  ))}
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-5 mb-3">
              <button className="btn btn-primary px-5">Next</button>
            </div>
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Laundry" className="custom-tab">
          <Container>
            <div className="d-flex justify-content-between border-bottom pb-3">
              <h3 className="date-headers">Select an Item(s)</h3>
            </div>
            <div>
              <Accordion defaultActiveKey="0" className="Only Vacuum ">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Only Vacuum Steam Press</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={suits}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native2}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Vacuum Steam Press">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Vacuum Steam Press</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <div>
                                <h5>Native</h5>
                                <span>2 x N2,000 / per piece</span>
                              </div>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Regular Wash & Fold">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Regular: Wash, Dry and Fold
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={suits}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native2}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" className="Heavy Wash & Fold">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Heavy Wash & Fold</Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="cart-item1 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item2 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={suits}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                      <div className="cart-item3 GreyBorderB">
                        <div className="">
                          <div className="d-flex align-items-center ">
                            <div>
                              <img
                                className="Imgselection"
                                src={Native2}
                                alt="Native"
                              />
                            </div>
                            <div className="mx-5">
                              <h5>Native</h5>
                              <span>2 x N2,000 / per piece</span>
                            </div>
                            <ClothesSelectCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-5 mb-3">
              <button className="btn btn-primary px-5">Next</button>
            </div>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SelectedCart;
