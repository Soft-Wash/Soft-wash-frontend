import Navigation from "../../common/MarketPlaceNavbar/Navigation";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Wishlist.css";
import { FaRegShareSquare } from "react-icons/fa";
import itemImg1 from "../../assets/MarketPlace/Images/1507033810106_sptows2927_so_klin_detergent_190_g_1024x1024.jpg";
import itemImg2 from "../../assets/MarketPlace/Images/1499349122495_spxspz1244_waw_hyper-concentrated_multi-use_detergent_200_g_180x2x.jpg";
import itemImg3 from "../../assets/MarketPlace/Images/1509621985884_sptows2785_ariel_original_perfume_detergent_powder_1_kg_1024x1024.jpg";
import itemImg4 from "../../assets/MarketPlace/Images/1516383180440_spxty4380_waw_multi-purpose_soap_250_g_180x2x2.jpg";
import itemImg5 from "../../assets/MarketPlace/Images/Afer-Ironing-Board-Maxi-130-x-47-cm-Supermart-ng-9833_180x2x.jpg";
import itemImg6 from "../../assets/MarketPlace/Images/1465908830684_spxspy1512_nittol_anti-bacterial_multi-purpose_soap_150_g_180x2x2.jpg";
import { FiHeart } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Footer from "../../common/Footer";
import axios from "axios";
import { useEffect,useState } from "react";

function Wishlist() {
  const [wishlist,setWishlist] = useState()

  const getWishList = ()=>{
    const user = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios.get(`${process.env.REACT_APP_BASE_URL}/wishlist/user/wishlist?user_id=${user?._id}`)
    .then((resp)=> {
      console.log(resp.data)
      setWishlist(resp.data)

    })
  }

  useEffect(()=>{
    getWishList()
  },[])

  return (
    <div>
      <Navigation />
      <Container className="text-center text-secondary pt-5">
        <h1>Wishlist</h1>
        <p>
          To save your wishlist please{" "}
          <span>
            <Link className="link02">login</Link>{" "}
          </span>{" "}
          or{" "}
          <span>
            <Link className="link02">Sign up</Link>{" "}
          </span>
          .
          <p className="mt-3">
            <FaRegShareSquare /> share wishlist
          </p>
        </p>
      </Container>

      <Container>
        <Row>
          {wishlist &&
            wishlist.map((item) => (
              <Col xs={12} sm={12} md={4} lg={4} xl={3} key={item._id}>
                <Link to="/singleproduct">
                  <Card
                    className="item-card border text-center mt-4"
                    style={{ height: "350px" }}
                  >
                    <FiHeart className="cart-icon02" />
                    <img src={item.product.img} className="item-image  mt-5" alt="" />
                    <h5 className="name-tag mt-1">{item.product.name}</h5>
                    <p className="price-tag fs-4 m-0"> &#8358;{item.product.price}</p>
                    <div>
                      <Button
                        variant="secondary"
                        className="cart-button bg-info border-0 w-75 rounded-0"
                      >
                        Add to Cart
                      </Button>{" "}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Wishlist;
