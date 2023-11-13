import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'



function Sidebar(){

    return(
        <div className='mx-3'>
            <div className='mt-4 mx-auto'>
                <img src={logo} alt="img-fluid" />
            </div>
            <div className="mt-3">
                <ul className="decoration-none">
                    <li>Home</li>
                    <li>My Orders</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;