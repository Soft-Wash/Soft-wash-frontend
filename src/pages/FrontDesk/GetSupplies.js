import React, { useState, useEffect } from "react";
import Sidebar from "../../components/FrontDesk/Sidebar";
import "../../styles/Supplierstyle/SupplyOrder.css";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashNav from "../../components/FrontDesk/DashNav";

export default function GetSupplies() {
  const [branches, setBranches] = useState([]);
  const [supplyDetails, setSupplyDetails] = useState();
  const [supplierData, setSupplierData] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [description, setDescription] = useState("");
  // const [completed, setCompleted] = useState(false);

  // Fetch branch from your API endpoint
  useEffect(() => {
    axiosInstance
      .get(`${process.env.REACT_APP_BASE_URL}/branch/`)
      .then((response) => {
        setBranches(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching branches:", error));
  }, []);

  // Fetch supplier from your API endpoint
  useEffect(() => {
    axiosInstance
      .get(`${process.env.REACT_APP_BASE_URL}/suppliers/`)
      .then((response) => {
        setSupplierData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const castOuterQuotes = (str) => {
      return str.slice(1, -1)
    }

    const formData = {
      supplier_id: supplyDetails,
      branch_id: selectedSupplier,
      buyer_id: castOuterQuotes(localStorage.getItem('softwashEmployeeLogin')),
      description: description,
    };

    console.log(formData);

    // Make the POST request
    axiosInstance
      .post(`/supplies/`, formData)
      .then((resp) => {
        console.log(resp.data);
        setDescription("");
        setBranches("");
        setSupplierData("");
        toast.success("Supply order successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurre");
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <DashNav />
      <div className="d-flex">
        <Sidebar />
        <form className="supplyordercontainer" onSubmit={handleSubmit}>
          <div className="input-group input-group-sm mb-3 mt-5">
            <label>suppliers</label>
            <select
              className="supplyorderInput border rounded ps-2"
              onChange={(e) => {
                setSupplyDetails(e.target.value);
              }}
            >
              <option value="">Select Supplier</option>
              {supplierData &&
                supplierData.map((supply) => (
                  <option key={supply?._id} value={supply?._id}>
                    {supply?.fullName}
                  </option>
                ))}
            </select>
          </div>

          <div className="input-group input-group-sm mb-3 mt-5">
            <label>Branches</label>
            <select
              className="supplyorderInput border rounded ps-2"
              onChange={(e) => {
                setSelectedSupplier(e.target.value);
              }}
            >
              <option value="">Select Branch</option>
              {branches &&
                branches.map((branch) => (
                  <option key={branch?._id} value={branch?._id}>
                    {branch?.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <textarea
              name=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description......."
              className="border rounded px-2 w-100"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <Button variant="info text-white" type="submit"
          // onClick = {() => setCompleted(true)}
          >
            Supply
          </Button>
        </form>
      </div>
    </div>
  );
}