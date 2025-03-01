import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Fetching data from API...");
    axios.get('/api/orders/order-details')
      .then(res => {
        console.log("Data fetched successfully:", res.data);
        setData(res.data);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Conditional rendering based on data availability
  if (!data) {
    return <div>Loading...</div>;
  }

  // Define an array of colors
  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'teal', 'cyan'];

  const chartData = {
    datasets: [{
      data: data.map(item => item.value),
      backgroundColor: colors.slice(0, data.length), // Use colors for each data item
    }],
    labels: data.map(item => item.label),
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Product Orders</h5>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
