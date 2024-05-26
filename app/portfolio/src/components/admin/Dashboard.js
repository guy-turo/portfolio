import React from 'react'
import { useGetPdfQuery } from '../../redux_tool.js/service/dataApi/apiDataService';
import DashboardSkeleton from './DashboardSkeleton';
import CustomAlert from '../helper/CustomAlert';

function Dashboard() {
const {data,error, isError, isLoading}=useGetPdfQuery()
if(isLoading){
  return <DashboardSkeleton/>
}
if(isError){
  return <CustomAlert message={error.data} variant="error" dismissible/>}
  return (
  <div className='block flex  self-center items-center w-3/4 h-3/4 justify-center  border border-solid border-gray-700 shadow-2xl'>
    <h2 className=' text-5xl text-blue-400'>{data?.downloadNumber}</h2>
    <h2 className=' text-5xl text-gray-400'>-Downloaded</h2>
  </div>
  );

}

export default Dashboard
