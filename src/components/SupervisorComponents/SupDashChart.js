import { useEffect, useState } from 'react';
import { axiosInstance } from "../../services/AxiosInstance";
import { Line } from "react-chartjs-2";

const SupDashChart = () => {
  const targetBranchId = '655debc4ec7b0b6e0f591bf7'; 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get("/order/").then((resp) => {
      const filteredOrders = resp.data.filter(item => item?.branch_id?._id === targetBranchId);
      console.log("Filtered Orders:", filteredOrders);
      setOrders(filteredOrders);
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  }, [targetBranchId]);

  // Check if orders is empty or undefined
  if (!orders || orders.length === 0) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  // Extract valid dates from orders
  const labels = orders.map(order => {
    const date = new Date(order.schedule_date);
    return date.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
  });

  // Filter out undefined or invalid date values
  const validLabels = labels.filter(label => label);

  // Calculate the count for each date
  const countByDate = validLabels.reduce((accumulator, date) => {
    accumulator[date] = (accumulator[date] || 0) + 1;
    return accumulator;
  }, {});

  // Create the data for the chart
  const data = {
    labels: validLabels,
    datasets: [{
      label: 'Number of Orders',
      data: validLabels.map(date => countByDate[date]),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default SupDashChart;
