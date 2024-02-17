import "../../styles/Admin/CreateProduct.css";
import AdminSidebar from "../../components/Admin/AdminSidebar";

function CreateProduct() {
  return (
    <>
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
              <form className="product_details_div_form">
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Product Name <br />
                    <input type="text" className="product_details_div_form_innerd_inpt1" />
                  </label>

                  <label htmlFor="">
                    Price <br />
                    <input type="text" className="product_details_div_form_innerd_inpt2" />
                  </label>
                </div>
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Category <br />
                    <select name="" id="">
                      <option value="" hidden>
                        Select Category
                      </option>
                    </select>
                  </label>
                  <label htmlFor="">
                    Image <br />
                    <input type="file" className="product_details_div_form_innerd_inpt3" />
                  </label>
                </div>
                <div className="product_details_div_form_innerd">
                  <label htmlFor="">
                    Description <br />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="product_details_div_form_innerd_textarea"
                    ></textarea>
                  </label>
                </div>
                <button className="product_details_div_form_btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
