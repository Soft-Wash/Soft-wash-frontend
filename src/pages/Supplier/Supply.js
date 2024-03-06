import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import "../../styles/Admin/Expenses.css";
// import { Link, useHistory} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Supply() {
  const navigate = useNavigate();
  const [product_name, setproductName] = useState("");
  const [product_price, setproductPrice] = useState("");
  const [product_quantity, setproductQuantity] = useState("");

  const handleProductChange = (event) => {
    setproductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setproductPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setproductQuantity(event.target.value);
  };

  const handleSubmit = () => {
    const total_price = parseInt(product_price) * parseInt(product_quantity);
    const generated_at = new Date().toISOString();

    // Prepare data to send
    const dataToSend = {
      product_name: product_name,
      product_price: product_price,
      product_quantity: product_quantity,
      total_price: total_price,
      generated_at: generated_at,
    };

    console.log("Data to send:", dataToSend);
   

    // Send data to the endpoint
    axiosInstance
      .post("http://localhost:8003/Priceproduct/", dataToSend)
      .then((response) => {
        console.log("Response from server:", response.data);
        toast.success("Product added successfully");

        navigate("/supplyreceipt", { state: { formData: dataToSend, generated_at: generated_at } });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("Failed to add product");
      });
  };
   // Disable button if any field is empty
   const isSubmitDisabled = !product_name || !product_price || !product_quantity;

  return (
    <div>
      <div className="d-flex">
        <SupplierSideBar />
        <div className="expenses-container">
          <div className="expenses-container-innerd">
            {/* <Link to="/SupplierNewExpense">
                <button>Add New</button>
              </Link> */}
            <h2 className="text-center me-5">Supply Order</h2>
            <div className="supplyordercontainer me-5">
              <div className="text-center">
                <div className="input-group input-group-sm mb-3 mt-5">
                  <select
                    className="supplyorderInput border rounded ps-2"
                    name="product"
                    id="product"
                    value={product_name}
                    onChange={handleProductChange}
                  >
                    <option value="">Select Product</option>
                    <option value="Fabric Softener">Fabric Softener</option>
                    <option value="Stain Remover">Stain Remover</option>
                    <option value="Bleach">Bleach</option>
                    <option value="Laundry Booster/Additives">Laundry Booster/Additives </option>
                    <option value="Laundry Bags">Laundry Bags</option>
                    <option value="Washing Machine">Washing Machine</option>
                    <option value="Dryer">Dryer</option>
                    <option value="Iron">Iron</option>
                    <option value="Ironing Board">Ironing Board</option>
                    <option value="Laundry Basket/Hamper">Laundry Basket/Hamper</option>

                  </select>
                </div>

                <div className="input-group input-group-sm mb-3 mt-5">
                  <select
                    className="supplyorderInput border rounded ps-2"
                    name="price"
                    id="price"
                    value={product_price}
                    onChange={handlePriceChange}
                  >
                    <option value="">Select Price</option>
                    <option value="5000">5000</option>
                    <option value="550">550</option>
                    <option value="4000">4000</option>
                    <option value="7500">7500</option>
                    <option value="300">300</option>
                    <option value="350000">350000</option>
                    <option value="100000">100000</option>
                    <option value="70000">70000</option>
                    <option value="23000">23000</option>
                    <option value="250000">250000</option>

                  </select>
                </div>

                <div className="input-group input-group-sm mb-3 mt-5">
                  <select
                    className="supplyorderInput border rounded ps-2"
                    name="quantity"
                    id="quantity"
                    value={product_quantity}
                    onChange={handleQuantityChange}
                  >
                    <option value="">Select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                  </select>
                </div>
                <button disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
                {/* <button onClick={handleSubmit}>Submit</button> */}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
