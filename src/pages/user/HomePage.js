import Navigation from "../../common/Navigation";
import SectionOne from "../../components/HomePage/SectionOne";
import SectionTwo from "../../components/HomePage/SectionTwo";
import SectionThree from "../../components/HomePage/SectionThree";
import SectionFour from "../../components/HomePage/SectionFour";
import SectionFive from "../../components/HomePage/SectionFive";
import SectionSeven from "../../components/HomePage/SectionSeven";
import Footer from "../../common/Footer";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

function Home() {
const [loading,setLoading] = useState(false)

  return (
    <div>

      <Navigation />
      <SectionOne  
       />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSeven />
      <Footer />

    </div>
  );
}

export default Home;
