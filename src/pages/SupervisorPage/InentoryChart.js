import React from 'react'
import Chart from "chart.js/auto";
import {  Line} from "react-chartjs-2";

const InventoryChart = () => {
    const labels = ["DETERGENT", "STARCH", "STAIN REMOVER", "SOFTNER", "GARMENT FRAGRANCE", "CHEMICALS"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "INVENTORY",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    return (
      <div style={{width:"50%"}}>
        < Line data={data} />
      </div>
    );
  };
  
  export default InventoryChart;