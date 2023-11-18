import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Orders/SoftWash.png'
import '../../styles/orderNavigation.css'


function Sidebar(){

    return(
        <div className='px-4 rounded-end shadow-sm md-display-none' style={{height: "100vh"}}>
            <div className='mt-4 mx-auto'>
                <img src={logo} alt="img-fluid" />
            </div>
            <div className="mt-3 w-100">
                <ul className="list-unstyled w-100">
                    <li className="my-4 d-flex justify-content-center btn btn-outline-info">Home</li>
                    <li className="my-4 d-flex justify-content-center btn btn-outline-info">My Orders</li>
                    <li className="my-4 d-flex justify-content-center btn btn-outline-info">Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;