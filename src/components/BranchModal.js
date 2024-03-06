import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { axiosInstance } from "../services/AxiosInstance";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";
import "../styles/BranchModal.css";



function BranchModal({isOpen,onClose,SaveBranch}){

  const userToken = JSON.parse(localStorage.getItem("softwashLoginToken"));
  const [branches, setbranches] = useState();
  const [branch_id, setbranch_id] = useState();
  const [loading,setLoading]=useState(false)
  const Navigate = useNavigate();

  


  useEffect(() => {
    setLoading(true)
    axiosInstance.get("/branch/").then((resp) => {
      setbranches(resp.data);
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      toast.error(error?.message)
    })
  }, []);

  const saveBranch = () => {
    if (branch_id) {
      SaveBranch(branch_id)
    localStorage.setItem('branch_id',JSON.stringify(branch_id))
      Navigate("/ClothesSelection");
    } else {
      toast.error("please choose a branch");
    }
  };


  return(
    <div>
   <Modal show={isOpen} onHide={onClose} position="top-center" className="ModContainer">
    {loading? <Loader/> :    <>       <Modal.Header closeButton>
            <Modal.Title>Select Branch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Select a branch close to your location</p>
            <select name="" id="" onChange={(e) => setbranch_id(e.target.value)}>
              <option value="" hidden>
                Choose a branch
              </option>
              {branches &&
                branches.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveBranch}>
              Save Changes
            </Button>
          </Modal.Footer> </>}

        </Modal>

    </div>
  )
}


export default BranchModal;