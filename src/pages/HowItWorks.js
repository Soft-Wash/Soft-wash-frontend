import '../styles/HowWeWork.css'

import SubNav from "../components/how we work/HowWeWorkSubNav";
import HowWeWorkBanner from "../components/how we work/HowWeWorkBanner";
import HowWeWorkProp from "../components/props/HowWeWorkProp";
import img1 from "../assets/images/how-we-work-img1.png";
import img2 from "../assets/images/how-we-work-img2.png";
import img3 from "../assets/images/how-we-work-img3.png";
import img4 from "../assets/images/how-we-work-img4.png";
import Footer from '../common/Footer';
import Navigation from '../common/Navbar';




function HowItWorks (){
    return(
        <div>
            <Navigation />
                <div className="custom-bg-color">
                    <SubNav />
                </div>
            <HowWeWorkBanner />      
            <HowWeWorkProp image={img1} />
            <HowWeWorkProp image={img2} />     
            <HowWeWorkProp image={img3} />
            <HowWeWorkProp image={img4} /> 
            <Footer />
        </div>
    )
}


export default HowItWorks;