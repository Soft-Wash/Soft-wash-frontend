import '../styles/HowWeWork.css'

import SubNav from "../components/how we work/HowWeWorkSubNav";
import HowWeWorkBanner from "../components/how we work/HowWeWorkBanner";
import HowWeWorkProp from "../components/props/HowWeWorkProp";
import img1 from "../assets/images/how-we-work-img1.png";
import img2 from "../assets/images/how-we-work-img2.png";
import img3 from "../assets/images/how-we-work-img3.png";
import img4 from "../assets/images/how-we-work-img4.png";
import Footer from '../common/Footer';
import Navigation from '../common/Navigation';




function HowItWorks (){
    return(
        <div>
            <Navigation />
                <div className="custom-bg-color">
                    <SubNav />
                </div>
            <HowWeWorkBanner /> 
            <h3 className='hww-pic-desc'>All you need to do is bag Up your Clothes for laundry</h3>     
            <HowWeWorkProp image={img1} />
            <h3 className='hww-pic-desc'>Representatives of our team of staff comes and pick them up</h3> 
            <HowWeWorkProp image={img2} />     
            <h3 className='hww-pic-desc'>We meticulously wash, iron, dry and fold your clothes within a minimum of two days</h3> 
            <HowWeWorkProp image={img3} />
            <h3 className='hww-pic-desc'>We deliver back to you at your desired location and swiftly.</h3> 
            <HowWeWorkProp image={img4} /> 
            <Footer />
        </div>
    )
}


export default HowItWorks;