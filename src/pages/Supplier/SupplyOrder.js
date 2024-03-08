import React, { useState, useEffect } from 'react';
import SupplierSideBar from '../../components/Supplier/SupplierSideBar';
import '../../styles/Supplierstyle/SupplyOrder.css';
import Button from 'react-bootstrap/Button';
import { axiosInstance } from '../../services/AxiosInstance';
import { toast } from 'react-toastify';

function SupplyOrder() {
  const [branches, setBranches] = useState([]);
  const [supplyDetails,setSupplyDetails]=useState();
  const [supplierData, setSupplierData] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [description, setDescription] = useState('');
  const [err, setErr] = useState(false);



  // Fetch branch from your API endpoint
  useEffect(() => {
    axiosInstance
      .get(`${process.env.REACT_APP_BASE_URL}/branch/`)
      .then((response) => setBranches(response.data))
      .catch((error) => console.error('Error fetching branches:', error));
  }, []);

  const handleInputs=(e)=>{
    setSupplyDetails(e)
  }

 

  // Fetch supplier from your API endpoint
  useEffect(() => {
    axiosInstance
      .get(`${process.env.REACT_APP_BASE_URL}/suppliers/`)
      .then((response) =>{
        setSupplierData(response.data.data)
        console.log(response.data)
      })
      .catch((error) => console.error('Error fetching suppliers:', error));
  }, []);
  const handleSelect=(e)=>{
    setSelectedSupplier(e)
  }
  // const handleSupplierChange = (event) => {
  //   setSelectedSupplier(event.target.value);
  // };

  


  // console.log(supplierDetails)



  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      supplierData: supplierData,
      branches: branches,
      description: description,
    };

    // Make the POST request
    fetch(`${process.env.REACT_APP_BASE_URL}/supplies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="d-flex">
        <SupplierSideBar />
        <form className="supplyordercontainer" onSubmit={handleSubmit}>

        <div className='input-group input-group-sm mb-3 mt-5'>
            <label>suppliers</label>
            <select className="supplyorderInput border rounded ps-2" 
             onChange={(e) => handleInputs(e.target.value)}>
              {supplierData && supplierData.map((supply) => (
                <option key={supply?._id} value={supply?._id}>{supply?.fullName}</option>
              ))}
            </select>
          </div>


          <div className='input-group input-group-sm mb-3 mt-5'>
            <label>Branches</label>
            <select className="supplyorderInput border rounded ps-2" 
             onChange={(e) => handleSelect(e.target.value)}>
              {branches && branches.map((branch) => (
                <option key={branch?._id} value={branch?._id}>{branch?.name}</option>
              ))}
            </select>
          </div>


          <div>
            <textarea name=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            placeholder='Description.......'
            className='border rounded px-2 w-100'
              id="" 
              cols="30"
              rows="10">
            </textarea>
          </div>

          <Button variant="info text-white" type="submit">
            Supply
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SupplyOrder;
