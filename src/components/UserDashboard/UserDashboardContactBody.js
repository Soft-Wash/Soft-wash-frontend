import '../../styles/DashboardContact.css'

import { FaLocationDot, FaPhone, FaMessage } from "react-icons/fa6";



function UserDashboardContactBody(){
    return(
        <div className="dashboard-bg">
        <div className="user-dashboard-contact-body">
            <div className='user-dashboard-contact-content'>
                <h6>Contact us</h6>
                <h2>Get in Touch With Us</h2>
                <p>Get in touch with us via any of the stated mediums below. We are always ready and available to cater for your laundary needs</p>
                <div className='user-dashboard-contact-info'>
                    <div className='user-dashboard-icon-div'>
                    <FaLocationDot className='contact-icons'/>
                    </div>
                    <div className='user-contact-text'>
                        <h4>Our Location</h4>
                        <p>Plot#364 Phase2 Rd#1 Behind Nexa Car Showroom Gimbiya Street Jahi 500090</p>
                    </div>
                </div>
                <div className='user-dashboard-contact-info'>
                    <div className='user-dashboard-icon-div'>
                        <FaPhone className='contact-icons'/>
                    </div>
                    <div className='user-contact-text'>
                        <h4>Phone Number</h4>
                        <p>0901234578</p>
                    </div>
                </div>
                <div className='user-dashboard-contact-info'>
                    <div className='user-dashboard-icon-div'>
                        <FaMessage className='contact-icons'/>
                    </div>
                    <div className='user-contact-text'>
                        <h4>Mail us</h4>
                        <p>info@softwash.mail</p>
                    </div>
                </div>            
            </div>
        </div>
        </div>
    )
}


export default UserDashboardContactBody;