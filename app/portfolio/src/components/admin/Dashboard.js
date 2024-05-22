import React from 'react'
// import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip} from '@syncfusion/ej2-react-charts'
import { Chart } from 'react-google-charts'

function Dashboard() {
//   const data = [
//     { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
//     { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
//     { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
//     { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
//     { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
//     { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
// ];
const data = [
  ['Month', 'Sales'],
  ['Jan', 1000],
  ['Feb', 1200],
  ['march', 300],
  ['april', 8200],
  // ... more data
];
const options = {
  backgroundColor: '#000000', // Optional semi-transparent background
  title:'Visits'
  // Other chart options like chartType, etc.
};
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
