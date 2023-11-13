import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";

function SelectedCart() {
  const [cartItems, setCartItems] = useState();
  const [selectedClothIds, setselectedClothIds] = useState();
  let arrayObj=[]

  useEffect(() => {
    const clothQuantity = localStorage.getItem("clothQuantity");
    const clothQuantities = JSON.parse(clothQuantity);
    const keys = Object.keys(clothQuantities);
    const values = Object.values(clothQuantities);
    arrayObj=keys
  }, []);





  const handleSubmit = () => {
        let data = {ids:arrayObj}
    if(arrayObj?.length){
        axiosInstance
        .post(`/cloth/clothtypes/ids`, data)
        .then((resp) => {
        //   console.log(arrayObj);
          console.log(resp.data);
          setCartItems(resp.data);
        });
    }

  };

  useEffect(()=>{
 handleSubmit();
  },[])



  return (
    <Container>
      <div className="">
        <div className="d-flex justify-content-between border-bottom pb-3">
          <h3 className="date-headers">Selected Items</h3>
          <Button className="px-4 " variant="primary">
            Edit
          </Button>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mens Wear</Accordion.Header>
              <Accordion.Body>
                {cartItems && cartItems.map((item)=>(
                                  <div className="cart-item" key={item._id}>
                                  <div className="d-flex justify-content-between">
                                    <h5>{item.name}</h5>
                                    <h5>{item.price}</h5>
                                  </div>
                                  <p>2 x N2,000 / per piece</p>
                                </div>  
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
}

export default SelectedCart;
