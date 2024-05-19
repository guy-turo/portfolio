import React from "react"

const AdminSkeleton=()=>{
return (
    <div className=" flex flex-col h-screen">
    <div className="items-center animate-pulse h-full justify-items-center  ">
      <div className='flex justify-between animate-pulse items-center px-2 bg-blue-950 '>
        <div  className="flex items-center animate-pulse justify-start">
       
        <div className="w-4 animate-pulse"></div>
          <div className="w-10 animate-pulse border border-gray-800 border-solid shadow-xl h-10 rounded-full  cursor-pointer">
         
          </div>
        <h2 className="font-semibold fex self-end">Admin</h2>
      </div>
      <div className=" flex hidden animate-pulse md:block space-x-1">
      <button className="bg-blue-800  px-2 animate-pulse rounded-md h-8"></button>
      <button onClick={(e)=>{}} className="bg-red-800 px-2 animate-pulse  rounded-md h-8"></button>
      </div>
    </div>
    <div className="w-full h-full animate-pulse p-1 flex  justify-center rounded-lg shadow-lg  ">
      {/* Tabs Header */}
      {/* For the big screen */}
      <div className="flex animate-pulse flex-col hidden md:block rounded-tl-md rounded-bl-md w-2/12  p-1 items-center justify-items-center space-y-1">
       
      </div>

      {/* content Pages */}
      <div className="w-11/12 animate-pulse shadow-2xl rounded-md bg-gray-600">
       
        </div>
      </div>
  </div>
  </div>

)    
}

export default AdminSkeleton