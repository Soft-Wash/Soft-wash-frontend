import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/CreateOrder.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import Modal from "react-bootstrap/Modal";

function CreateOrder() {
  const [clothTypes, setclothTypes] = useState();

  useEffect(() => {
    axiosInstance.get("cloth/").then((resp) => {
      console.log(resp.data);
      setclothTypes(resp.data);
    });
  }, []);

  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="createorder-content-container">
          <div className="createorder-content">
            <h3>Add Order</h3>
            <hr className="createorder-content-hr" />
            <div className="cloth-card">
              <div className="cloth-card-div1">
                {clothTypes &&
                  clothTypes.map((item) => (
                    <>
                    <div className="cloth-border">
                      <img src={item?.img} alt="" />
                      <p className="cloth-border-p">{item.name}</p>
                    </div>

                    </>
                  ))}
              </div>
              <div className="cloth-card-div2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
