import React from 'react'

function Accordion() {
  return (
    <div>
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
                            <div className="AccordText mx-5">
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
    </div>
  )
}

export default Accordion