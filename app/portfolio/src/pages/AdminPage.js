import React,{useState, useEffect} from 'react'
import axios from 'axios';
import api from "../utils/Helper"
import { CiLogout } from "react-icons/ci";
import { MdPersonPin } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {MdDashboard} from 'react-icons/md'
import Data from '../components/admin/Data'
import Dashboard from '../components/admin/Dashboard'
import {Link} from "react-router-dom"
const AdminPage=()=> {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const [toggleState,setToggleState]=useState(1)

  const toggleTab=(index)=>{
   
    if(toggleState===index){
      return
    }
    setToggleState(index)
    console.log(toggleState)
  }
  const colors={
    backgroundColor:"#1f1f38"
  }
  const [image,setImage]=useState('')
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/me/personal"
    axios.get(URI)
    .then(res=>{
      setImage(res.data[0].pictures[1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ])
      }
    )
    .catch(error=>console.log(error.message))
  }
  const checkAuth=async()=>{
    const URI="http://localhost:8000/api/v1/auth/checkAuth"
    api.get(URI)
      .then(res=>{
            console.log(res)
      }) 
      .catch(error=>{
        if(error){
          console.log(error)
        }
      })
  }
  useEffect(()=>{
    fetchData()
    checkAuth()
  },[])
  useEffect(()=>{
    
  },[])
  return (
    <div className=" flex flex-col h-screen">
      <div className="items-center justify-items-center  ">
        <div className='flex justify-between items-center px-2 bg-blue-950 '>
          <div  className="flex items-center justify-start">
          <MdMenu  onClick={toggleDrawer}  className="flex size-7 md:hidden cursor-pointer"/>
          <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={colors}
                className='flex rounded-sm  rounded-tr-3xl rounded-br-3xl justify-center border border-solid border-blue-800 bg-blue-100'
            >
              <div className="w-full flex flex-col justify-between rounded-md h-full ">
              <div className="flex flex-col   rounded-tl-md rounded-bl-md w-12/12  p-1 items-center justify-items-center space-y-1">
              <div className="flex  flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full  cursor-pointer">
                  <img src={image} alt="" className="w-20 h-20 rounded-full"/>
                  </div>
                  <h2 className="fex font-bold">Admin</h2>
                </div>
                <div
                  onClick={()=>{
                    toggleTab(1)
                    toggleDrawer()
                  }}
                  className={` w-full rounded-sm ${toggleState===1?"bg-blue-600":"bg-blue-800"}`}>

                  <h2 className=" flex cursor-pointer justify-center items-center space-x-1"><MdDashboard/> Dashboard</h2></div>
                <div
                onClick={()=>{
                  toggleTab(2)
                  toggleDrawer()
                }}
                className={` w-full rounded-sm ${toggleState===2?"bg-blue-600":"bg-blue-800"}`}>
                 <h2 className=" cursor-pointer flex justify-center ">Data</h2></div>
                </div>
              <div className=" flex  space-x-1">
               <button className="bg-blue-800  px-2 rounded-md h-8 flex  items-center space-x-2"><MdPersonPin /><h2 >Profile</h2></button>
                <button className="bg-red-800 px-2  rounded-md h-8  flex  items-center space-x-2"><CiLogout /><h2>Logout</h2></button>
              </div>
              </div>
            </Drawer>
          <div className="w-4"></div>
            <div className="w-10 h-10 rounded-full  cursor-pointer">
            <Link to="/" className='p-0'>
            <img src={image} alt="" className="w-10 h-10 rounded-full"/>
            </Link>
            </div>
          <h2 className="font-semibold fex self-end">Admin</h2>
        </div>
        <div className=" flex hidden md:block space-x-1">
        <button className="bg-blue-800  px-2 rounded-md h-8"><MdPersonPin /></button>
        <button className="bg-red-800 px-2  rounded-md h-8"><CiLogout /></button>
        </div>
      </div>
      <div className="w-full h-full p-1 flex  justify-center rounded-lg shadow-lg  ">
        {/* Tabs Header */}
        {/* For the big screen */}
        <div className="flex flex-col hidden md:block rounded-tl-md rounded-bl-md w-2/12  p-1 items-center justify-items-center space-y-1">
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
        <div className="w-11/12 shadow-2xl rounded-md bg-gray-600">
          <div className={`${toggleState===1?"":"hidden"} flex flex-col items-center justify-start h-screen`}>
          <h2>Dashboard</h2>
            <Dashboard/>
            </div>
          <div className={`${toggleState===2?"":"hidden"} flex flex-col items-center space-y-5 justify-start `}>
            <h2>Personal data</h2>
            <Data/>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default AdminPage