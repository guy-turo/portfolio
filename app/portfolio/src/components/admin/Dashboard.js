import React from 'react'
import { Chart } from 'react-google-charts'

function Dashboard() {
const data = [
  ['Month', 'Sales'],
  ['Jan', 1000],
  ['Feb', 1200],
  ['march', 300],
  ['april', 8200],
  // ... more data
];

  return (
  <div className='flex w-3/4  border border-solid border-gray-700 shadow-2xl'>
  <Chart
      chartType="Line"
      data={data}
      title="Sales by Month"
      width="100%"
      height="400px"
      backgroundColor="#000000"
    
    />
  </div>
  );

}

export default Dashboard
