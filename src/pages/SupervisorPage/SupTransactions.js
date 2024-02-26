import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import SupervisorSideBar from '../../components/SupervisorComponents/SupervisorSideBar';

function SupTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
    //   setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/transactions`);
        console.log(response.data.data.transactions);
        setTransactions(response.data.data.transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="d-flex">
        <SupervisorSideBar />
        {loading ? (
          <Loader />
        ) : (
          <div className="ordertable-div">
            <h2>Transactions Table</h2>
            <table className="ordertbale-content-table">
              <thead>
                <tr>
                    <th>Transaction Date</th>
                    <th>Full Name</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Channel</th>
                    <th>Currency</th>
                    <th>Email</th>
                    <th>IP Address</th>
                    <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
              {transactions.map((item) => (
                  <tr key={item.user_id ? item.user_id.fullName : 'N/A'}>
                    <td>{new Date(item.paidAt).toLocaleString()}</td>
                     <td>{item.user_id ? item.user_id.fullName : 'N/A'}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                    <td>{item.channel}</td>
                    <td>{item.currency}</td>
                    <td>{item.email}</td>
                    <td>{item.ipAddress}</td>
                    <td>{item.transactionId}</td>
                   
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupTransactions;
