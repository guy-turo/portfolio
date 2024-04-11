import React,{useState} from 'react'
import {MdDashboard} from 'react-icons/md'
import Data from './Data'
import Dashboard from './Dashboard'
const  TabsComponent=()=> {
  
  const [toggleState,setToggleState]=useState(1)

  const toggleTab=(index)=>{
   
    if(toggleState===index){
      return
    }
    setToggleState(index)
    console.log(toggleState)
  }
  

  return (
    <div className="w-full h-full p-1 flex rounded-lg shadow-lg  ">
        {/* Tabs Header */}
        <div className="flex flex-col rounded-tl-md rounded-bl-md w-2/12 bg-red-900 p-1 items-center justify-items-center space-y-1">
          <div 
          onClick={()=>toggleTab(1)}
          className={` w-full rounded-sm ${toggleState===1?"bg-blue-600":"bg-blue-800"}`}>
            
            <h2 className=" flex cursor-pointer justify-center items-center space-x-1"><MdDashboard/> Dashboard</h2></div>
          <div 
          onClick={()=>toggleTab(2)}
          className={` w-full rounded-sm ${toggleState===2?"bg-blue-600":"bg-blue-800"}`}>
            <h2 className=" cursor-pointer flex justify-center ">Data</h2></div>
        </div>
        
        {/* content Pages */}
        <div className="w-11/12 rounded-tr-md rounded-br-md bg-gray-700">
          <div className={`${toggleState===1?"":"hidden"} flex justify-center h-screen`}>
            <Dashboard/>
            </div>
          <div className={`${toggleState===2?"":"hidden"} flex justify-center `}>
            <Data/>
            </div>
        </div>
        </div>
    
  
    
  )
}

export default TabsComponent
