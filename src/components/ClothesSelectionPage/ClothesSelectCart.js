import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Native from "../../assets/images/Native.png";
import ClothesSelectCounter from "./ClothesSelectCounter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClothesSelectcart from "../../styles/ClothesSelectcart.css";
import { axiosInstance } from "../../services/AxiosInstance";
import { useState } from "react";
import { variableManager } from "../../context/VariablesContext";
import ClothAccordian from "./ClothAccordian";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Loader} from "../../common/Loader"

function SelectedCart({ initialQuantity }) {
  const [loading, setLoading] = useState(false); 
  const [kidsWear, setkidsWear] = useState();
  const [accessories, setAccessories] = useState();
  const [shoes, setShoes] = useState();
  const [homeLinen, sethomeLinen] = useState();
  const [mensWear, setMensWear] = useState();
  const [regular, setRegular] = useState();
  const [onlyVacum, SetOnlyVacum] = useState();
  const [vacum, SetVacum] = useState();
  const [regularWash, SetRegularWash] = useState();
  const [heavyWash, SetHeavyWash] = useState();
  const [clothItems, setClothItem] = useState();
  const [customerId, setCustomerId]= useState()
  const navigate = useNavigate()
  const [selectedItems,setSelectedItems]= useState()
const [clothId,setclothId]=useState()


  const [clothQuantity, setClothQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem('clothQuantity');
    return storedQuantity ? JSON.parse(storedQuantity) : initialQuantity || 0;
  });

  const increment = (clothId) => {
    setClothQuantity((prevQuantities) => {
      const newQuantity = (prevQuantities[clothId] || 0) + 1;
      return { ...prevQuantities, [clothId]: newQuantity };
    });
    // setclothId(clothId)
  };

  const decrement = (clothId) => {
    setClothQuantity((prevQuantities) => {
      const newQuantity = Math.max((prevQuantities[clothId] || 0) - 1, 0);
      if (newQuantity < 1) {
        const { [clothId]: _, ...updatedQuantities } = prevQuantities;
        localStorage.setItem("clothQuantity", JSON.stringify(updatedQuantities));
        return updatedQuantities;
      }
  
      // Return the updated state with the new quantity
      return { ...prevQuantities, [clothId]: newQuantity };
    });
  };

  const HandleLocalSave = () => {
    if (clothQuantity) {
      const filteredQuantities = Object.fromEntries(
        Object.entries(clothQuantity).filter(([key, value]) => value >= 1)
      );
      localStorage.setItem("clothQuantity", JSON.stringify(filteredQuantities));
    }

  };




  useEffect(() => {
    HandleLocalSave()
  }, [clothQuantity]);

  useEffect(() => {

    setLoading(true)

    axiosInstance
      .get(`/cloth/kidswear/category`)
      .then((resp) => {
        setkidsWear(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/acccessories/category`)
      .then((resp) => {
        setAccessories(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/shoes/category`)
      .then((resp) => {
        setShoes(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/homelinen/category`)
      .then((resp) => {
        sethomeLinen(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/menswear/category`)
      .then((resp) => {
        setMensWear(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/regular/category`)
      .then((resp) => {
        setRegular(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/only-vacuum-steam-press/category`)
      .then((resp) => {
        SetOnlyVacum(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/vacuum-steam-press/category`)
      .then((resp) => {
        SetVacum(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/Regular:Wash-Dry-and-Fold/category`)
      .then((resp) => {
        SetRegularWash(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .get(`/cloth/Heavy:Wash-Dry-and-Fold/category`)
      .then((resp) => {
        SetHeavyWash(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

      setLoading(false)
  }, []);



// if (loading){
//   return(
 
//   )
// }


  return (
    <div>
      {loading?(
                <Loader color="primary" size="lg" show={loading} />
      ):(
<>
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3 gap-3 justify-content-center" style={{borderBottom:"none"}}>
        <Tab eventKey="home" title="Dry Wash" className="custom-tab " style={{borderBottom:"none"}}>
          <Container>
            <div className="d-flex justify-content-between pb-3">
              <h3 className="date-headers">Select an Item(s)</h3>
            </div>
            <div>
              <Accordion defaultActiveKey="1" className="MensWear" style={{borderTop:"none"}} >
                <Accordion.Item eventKey="0" style={{border:"none", borderLeft:"none", borderRight:"none", borderBottom:"none"}}>
                  <Accordion.Header style={{border:"none"}}>Mens Wear</Accordion.Header>
                  {mensWear &&
                    mensWear.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between" style={{position:"absolute",right:"50px", height:"35px"}}>
                              <button className="-ve"
                                onClick={() => decrement(item._id)}>
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button className="pve"
                                onClick={() => increment(item._id)}>
                                +
                              </button>
                            </div>
                            
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Ladies border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Ladies Wear</Accordion.Header>
                  {mensWear &&
                    mensWear.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Regular border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Regular</Accordion.Header>
                  {regular &&
                    regular.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Kids Wear border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Kids Wear</Accordion.Header>
                  {kidsWear &&
                    kidsWear.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Accessories border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Accessories</Accordion.Header>
                  {accessories &&
                    accessories.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Shoes border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Shoes</Accordion.Header>
                  {shoes &&
                    shoes.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Home Linen border-top" >
                <Accordion.Item eventKey="0" style={{border:"none"}}>
                  <Accordion.Header>Home Linen</Accordion.Header>
                  {homeLinen &&
                    homeLinen.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
            </div>
            {/* <div className="d-flex justify-content-center gap-3 mt-5 mb-3">
              <button className="btn btn-primary px-5">Next</button>
            </div> */}
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Laundry" className="custom-tab" style={{borderBottom:"none"}}>
          <Container>
            <div className="d-flex justify-content-between pb-3">
              <h3 className="date-headers">Select an Item(s)</h3>
            </div>
            <div>
              <Accordion defaultActiveKey="1" className="Only Vacuum" style={{borderTop:"none"}} >
                <Accordion.Item eventKey="0" style={{border:"none", borderLeft:"none", borderRight:"none", borderBottom:"none"}}>
                  <Accordion.Header style={{border:"none"}}>Only Vacuum Steam Press</Accordion.Header>
                  {onlyVacum &&
                    onlyVacum.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Vacuum Steam Press border-top" style={{borderTop:"none"}} >
                <Accordion.Item eventKey="0" style={{border:"none", borderLeft:"none", borderRight:"none", borderBottom:"none"}}>
                  <Accordion.Header style={{border:"none"}}>Vacuum Steam Press</Accordion.Header>
                  {vacum &&
                    vacum.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Regular Wash & Fold border-top" style={{borderTop:"none"}} >
                <Accordion.Item eventKey="0" style={{border:"none", borderLeft:"none", borderRight:"none", borderBottom:"none"}}>
                  <Accordion.Header style={{border:"none"}}>Regular Wash & Fold</Accordion.Header>
                  {regularWash &&
                    regularWash.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1" className="Heavy Wash & Fold border-top" style={{borderTop:"none"}} >
                <Accordion.Item eventKey="0" style={{border:"none", borderLeft:"none", borderRight:"none", borderBottom:"none"}}>
                  <Accordion.Header style={{border:"none"}}>Heavy Wash & Fold</Accordion.Header>
                  {heavyWash &&
                    heavyWash.map((item) => (
                      <Accordion.Body key={item._id}>
                        <div className="cart-item1 GreyBorderB" style={{position:"relative"}}>
                          {/* <div className="d-flex align-items-center justify-content-between">
                            <ClothAccordian
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="d-flex justify-content-between"
                              style={{ height: "35px", justifyContent:"between", position:"absolute", right:"50px"}}
                            >
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                          <div className="button-container">
                            <ClothAccordian className="buttns"
                              img={item.img}
                              name={item.name}
                              price={item.price}
                            />
                            <div className="ve-buttons">
                              <button
                                className="-ve"
                                onClick={() => decrement(item._id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                step="1"
                                min="0"
                                max=""
                                name="quantity"
                                value={clothQuantity[item._id] || 0}
                                title="Qty"
                                className="input-text qty text"
                                size="4"
                                pattern=""
                                inputMode=""
                                readOnly
                              />
                              <button
                                className="pve"
                                onClick={() => increment(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    ))}
                </Accordion.Item>
              </Accordion>
            </div>

          </Container>
        </Tab>
      </Tabs>
      <div className="d-flex justify-content-center gap-3 mt-5 mb-3">
        <Link to="/date">
          <button className="btn btn-primary px-5">
            Next
          </button>
        </Link>

        </div>
</>
      )}


    </div>
  );
}

export default SelectedCart;
