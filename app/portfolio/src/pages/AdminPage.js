import React,{useState, useEffect} from 'react'
import api from "../utils/Helper"
import { CiLogout } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {MdDashboard} from 'react-icons/md'
import Data from '../components/admin/Data'
import Dashboard from '../components/admin/Dashboard'
import {Link, useNavigate} from "react-router-dom"
import { connect } from 'react-redux'
import { fetchMe } from '../redux/personalRequestRedux/me/me_actions'
import { useDispatch } from 'react-redux';
import { logoutRequest, logoutSuccess,logoutFailure } from '../redux/authRedux/logout/logout_action';
import Skeleton from '../components/helper/skeleton/Skeleton';
import Loading from '../components/helper/loadingComponent/Loading';

import { useLogoutMutation } from '../redux_tool.js/service/authApi/authApi';
import { useGetMeQuery } from '../redux_tool.js/service/dataApi/apiDataService';

const AdminPage=()=> {
  const [isOpen, setIsOpen] = useState(false)
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const [logout, {data:logoutData, isLoading:logoutLoading, error:logoutError,isError:logoutIsError}]= useLogoutMutation()
  const {data, isLoading,isError} =  useGetMeQuery()
  console.log(data)
  const [toggleState,setToggleState]=useState(1)
  const toggleTab=(index)=>{
    if(toggleState===index){
      return
    }
    setToggleState(index)
  }
  const colors={
    backgroundColor:"#1f1f38"
  }
  const handleLogout=async()=>{
    try{
      const initialToken=localStorage.getItem("refreshToken")
      const response = await logout({token:initialToken})
      if(response.data){
        const refreshToken = localStorage.getItem('refreshToken')
        const accessToken = localStorage.getItem('accessToken')
        if (refreshToken && accessToken) {
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("accessToken")
          dispatch(logoutSuccess(response.data))
          navigate('/signin')
          }
        }
      }catch(error){
        setTimeout(() => {
          const refreshToken = localStorage.getItem('refreshToken')
          const accessToken = localStorage.getItem('accessToken')
          if (refreshToken && accessToken) {
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("accessToken")
            navigate('/signin')
          }
        }, 1500);
      }
       }
  const full= "full"
  if(isLoading){
    return <div>..loading</div>
  }
  if(isError){
    return <div>...error...</div>
  }
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
                  <div className="w-20 border border-gray-800 border-solid shadow-2xl h-20 rounded-full  cursor-pointer">
                  {data.loading===false && data && data.map((item, index)=><img key={index} src={item.pictures[1]} alt="" className="w-20 h-20 rounded-full"/>)}
                  {data.loading=== true && <Skeleton width={20} height={20} borderRadius={full}/>}
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
               <button className="bg-blue-800  px-2 rounded-md h-8 flex  items-center space-x-2"><CiSettings /><h2 >Settings</h2></button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    handleLogout()
                }} className="bg-red-800 px-2  rounded-md h-8  flex  items-center space-x-2"><CiLogout /><h2>Logout</h2> {logoutLoading===true&&<Loading/>}</button>
              </div>
              </div>
            </Drawer>
          <div className="w-4"></div>
            <div className="w-10 border border-gray-800 border-solid shadow-xl h-10 rounded-full  cursor-pointer">
            <Link to="/" className='p-0'>
                {!isLoading&&<img  src={data[0]?.pictures[1]} alt="" className="w-10 h-10 rounded-full"/>}
                {isLoading&& <Skeleton width={10} height={10} borderRadius={full}/>}
                
            </Link>
            </div>
          <h2 className="font-semibold fex self-end">Admin</h2>
        </div>
        <div className=" flex hidden md:block space-x-1">
        <button className="bg-blue-800  px-2 rounded-md h-8"><CiSettings /></button>
        <button onClick={(e)=>{
          e.preventDefault()
          handleLogout()
         
          }} className="bg-red-800 px-2  rounded-md h-8"><CiLogout />{logoutLoading&&<Loading/>}</button>
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

// const mapStateToProps= (state)=>{
//   return{
//     data:state.me,
//     outData:state.logout
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
//   return{
//     fetchData:()=>dispatch(fetchMe()),
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(AdminPage)
export default AdminPage