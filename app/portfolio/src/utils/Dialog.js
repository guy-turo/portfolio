import React from 'react'
const Dialog=({open , onClose, children})=>{

 if(!open)return null
 const handleClose=(e)=>{
  if(e.target.id ==='wrapper')onClose()
 }
  return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'id="wrapper" onClick={handleClose}>
        <div className="bg-white  rounded  flex  flex-col ">
          {children}
        </div>
      </div>
  )
}

export default Dialog
