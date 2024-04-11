import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,
  PointElement,
  LineElement, } from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
const MyChart = ({ chartData, chartType }) => {
  ChartJS.register(ArcElement,CategoryScale, Tooltip, Legend,LinearScale,
    PointElement,
    LineElement,); // Register elements


  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets  
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
          beginAtZero: true,
          max: 1000,
          type: 'linear',
      },
    },
  };

  return (
    <div>
      {chartType === 'bar' && <Bar data={data} options={options} />}
      {chartType === 'doughnut' && <Doughnut data={data} options={options} />}
      {chartType === 'line' && <Line data={data} options={options} />}
    </div>
  );
};

export default MyChart;