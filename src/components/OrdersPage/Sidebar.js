import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'



function Sidebar(){

    return(
        <div className='mx-3 shadow-sm'>
            <div className='mt-4 mx-auto'>
                <img src={logo} alt="img-fluid" />
            </div>
            <div className="mt-3 w-100">
                <ul className="list-unstyled w-100">
                    <li className="list-unstyled mx-auto w-100">Home</li>
                    <li>My Orders</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;