import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import SupervisorSideBar from '../../components/SupervisorComponents/SupervisorSideBar';

function SupTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
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
                  <th>Id</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Channel</th>
                  <th>Email</th>
                  <th>IP Address</th>
                  <th>Status</th>
                  <th>Transaction Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.amount}</td>
                    <td>{item.channel}</td>
                    <td>{item.email}</td>
                    <td>{item.ipAddress}</td>
                    <td>{item.status}</td>
                    <td>{item.paidAt}</td>
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
