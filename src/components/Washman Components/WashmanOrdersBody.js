import "../../styles/Washman Styles/WashmanProfile.css"
import "../../styles/Washman Styles/WashmanOrder.css"
import { Link } from 'react-router-dom';

function WashmanOrdersBody(){
    return(
        <div className="washman-bg">
            <div className="washman-page-content">
                <div className="washman-header">
                    <h2>WASHMAN ORDERS</h2>
                </div>     
                <div className="washman-table-div">
                    <table className="washman-content-table">
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Quantity</th>
                                <th>Order Status</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th><Link to={'/washman-single-order'} className="washman-table-link">2345673456723456</Link></th>
                                <th>Stacy Peter</th>
                                <th>15</th>
                                <th>Pending</th>
                                <th>16/12/23</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default WashmanOrdersBody;