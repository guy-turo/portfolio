import React from 'react'
import TabsComponent from '../components/admin/TabsComponent'
import me from "../assets/me.jpg"
const AdminPage=()=> {
  return (
    
    <div className=" flex flex-col h-screen">
      <div className="items-center  justify-items-center ">
        <div className='flex justify-between items-center px-2'>
          <div  className="flex items-center cursor-pointer justify-start">
            <div className="w-10 h-10 rounded-full">
              <img src={me} alt="" className="w-10 h-10 rounded-full"/>
            </div>
          <h2 className="font-semibold fex self-end">Admin</h2>
        </div>
        <div className="space-x-1">
        <button className="bg-blue-800 px-2 rounded-md h-8">Edit</button>
        <button className="bg-red-800 px-2 rounded-md h-8">Sign out</button>
        </div>
        
        </div>
       
        
        <TabsComponent/>
    </div>
    </div>
    
  )
}

export default AdminPage