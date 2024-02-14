import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from 'axios';


function WashmanRequestSuppliesBody(){

    const [quantity, setQuantity] = useState("");
    const [item, setItem] = useState("");
    const [itemsList, setItemsList] = useState([]);
    const [err, setErr] = useState(false);
    const Navigate = useNavigate();

    useEffect(() => {
      
      const fetchItems = async () => {
        try{
            
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/items/`)
            setItemsList(response.data)
            console.log(itemsList)
        }
        catch (error) {
            setErr(error.message || 'An error occurred while fetching orders.');
        }         
      }
      fetchItems();
    }, [])


    return(
        <div className="washman-bg">
      <div className="washman-page-content">
        <div className="washman-header">
          <h2>EDIT PROFILE</h2>
        </div>
        <div>
          <Form className="centralize  mt-4">
            <Form.Group className="washman-edit-profile-input">
              <Form.Label
                htmlFor="quantity"
                className="reset-input-headers"
              >
                Item
              </Form.Label>
              <select
                className="form-control" 
                value={item}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="">Select Item</option>
                {itemsList.map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))}
                {/* <option value="detergent">Detergent</option> */}
                {/* <option value="starch">Starch</option>                */}
              </select>

              <Form.Label
                htmlFor="item"
                className="reset-input-headers"
              >
                Current Quantity
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              

              {err && (quantity === "" || item==="") ? (
                <span className="reset-err-msg">Kindly enter current quantity</span>
              ) : null}
            </Form.Group>

            <Button className="edit-washman-profile-btn" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
    )
}


export default WashmanRequestSuppliesBody;