import "../../styles/Admin/CreateProduct.css";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/AxiosInstance";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateProduct() {
  const [category, setcategory] = useState();
  const [details, setDetails] = useState();

  const GetCategory = () => {
    axiosInstance
      .get("/category/")
      .then((resp) => {
        setcategory(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetCategory();
  }, []);

  const handleInputDetails = (e) => {
    const value =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setDetails({ ...details, [e.target.name]: value });
  };
  const CreateProduct = () => {
    const formData = new FormData();
    formData.append("name", details.name);
    formData.append("price", details.price);
    formData.append("description", details.description);
    formData.append("category_id", details.category_id);
    formData.append("img", details.img);
    axiosInstance
      .post("/product/newproduct", formData)
      .then((resp) => {
        console.log(resp.data);
        toast.success("created succesfully");
        setDetails('')

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="d-flex">
        <AdminSidebar />
        <div className="product_content">
          <h3>Create Product</h3>
          <hr className="product_content_line" />
          <div className="create_details_div">
            <div className="create_table_content">
              <div className="Product_details_div_header">
                <p>Create Product</p>
              </div>
              <form
                className="product_details_div_form"
                action="/upload"
                method="POST"
                encType="muiltipart/form-data"
              >
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Product Name <br />
                    <input
                      type="text"
                      name="name"
                      className="product_details_div_form_innerd_inpt1"
                      onChange={(e) => handleInputDetails(e)}
                    />
                  </label>

                  <label htmlFor="">
                    Price <br />
                    <input
                      type="text"
                      name="price"
                      className="product_details_div_form_innerd_inpt2"
                      onChange={(e) => handleInputDetails(e)}
                    />
                  </label>
                </div>
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Category <br />
                    <select
                      name="category_id"
                      id=""
                      onChange={(e) => handleInputDetails(e)}
                    >
                      <option value="" hidden>
                        Select Category
                      </option>
                      {category &&
                        category.map((item) => (
                          <option value={item._id}>{item?.name}</option>
                        ))}
                    </select>
                  </label>
                  <label htmlFor="">
                    Image <br />
                    <input
                      type="file"
                      name="img"
                      className="product_details_div_form_innerd_inpt3"
                      onChange={(e) => handleInputDetails(e)}
                    />
                  </label>
                </div>
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Description <br />
                    <textarea
                      name="description"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={handleInputDetails}
                      className="product_details_div_form_innerd_textarea"
                    ></textarea>
                  </label>
                </div>
              </form>
              <button
                className="product_details_div_form_btn"
                onClick={() => CreateProduct()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
