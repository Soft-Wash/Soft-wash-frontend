import SupplierSideBar from "../../components/Supplier/SupplierSideBar";
import "../../styles/Supplierstyle/SupplyOrder.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";

function SupplyOrder() {
    const [branch, setBranch] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [err, setErr] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (branch === "" || productName === "" || productPrice === "" || productQuantity === "") {
            setErr(true);
            return;
        }
        let users = {
            branch: branch,
            productName: productName,
            productPrice: productPrice,
            productQuantity: productQuantity,
            date: new Date().toLocaleString(),
        };

        // fetch("http://159.65.21.42:9000/register", {
        //     method: "POST",
        //     headers: { "Content-Type": "Application/json" },
        //     body: JSON.stringify(users),
        // })
        //     .then((resp) => resp.json())
        //     .then((contact) => {
        //         alert("User Created");
        //         console.log(contact);
        //     })
        //     .catch((err) => console.log(err));



    };

    return (
        <div>
            <div className="d-flex">
                <SupplierSideBar />
                <form className="supplyordercontainer" onSubmit={handleSubmit}>
                    
                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="">Branch</label>
                        <input type="text" className="supplyorderInput" value={branch} onChange={(e) => setBranch(e.target.value)} />
                        {err === true && branch === "" ? <span>Branch Required</span> : null}
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="">Product Name</label>
                        <input type="text" className="supplyorderInput" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        {err === true && productName === "" ? <span>Product Name is Required</span> : null}
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="">Product Price</label>
                        <input type="text" className="supplyorderInput" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        {err === true && productPrice === "" ? <span>Product Price is Required</span> : null}
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="">Product Quantity</label>
                        <input type="text" className="supplyorderInput" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
                        {err === true && productQuantity === "" ? <span>Product Quantity Required</span> : null}
                    </div>

                    <Button variant="info text-white">
                          Supply
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default SupplyOrder;
