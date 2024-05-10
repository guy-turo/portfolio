import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import api from "../../../utils/Helper"
import { LiaEditSolid } from "react-icons/lia";
const UpdateExperience=({item, el,id })=> {
  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")
  const [open,setOpen]=useState(false)
 
  const [text,setText]=useState([item])
 
const  onClose=()=>setOpen(!open)
const update= async(e)=>{
    e.preventDefault()
      const URI=`/me/experiences/${id}`
     api.put(URI,{
      text:text,
      el:el
     })
     .then((response)=>{
      if(response){
        setSuccessMessage("Updated")
          setTimeout(()=>{
            onClose()
            setSuccessMessage('')
            setText("")
          },1500)
      }
     })
     .catch((error)=>{
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.log('Error response:', error.response.data);
        setMessage("error response:"+ error.response.data)
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Error request:', error.request);
        setMessage("Error Request:"+ error.request)
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error message:', error.message);
        setMessage("Error message"+error.message)
      }
     })
  }
  return (
    <>
      <button  onClick={()=>setOpen(!open)}>
      <LiaEditSolid className="text-gray-500 size-7"/>
      </button>
        <Dialog onClose={onClose} open={open}>
          <div className="pt-3 w-80 items-center rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-300 border border-solid border-blue-600">
            
            <h2 className="text-gray-400 underline">{el}</h2>
            <form  onSubmit={update} className="flex flex-col items-center justify-center">
              <div className="space-y-2">
                   <textarea  type="text" value={text} onChange={(e)=>setText(e.target.value)}  className=" bg-gray-300  border rounded-md px-2 text-black border-solid border-blue-800"/>
              </div>

              <div className="space-y-1">
              {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
              {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
              <button type="submit" className="px-4 bg-green-700 w-full rounded-md">
                {message && <h3 className='text-red-700'>try again</h3>}
                {!message &&successMessage==="" && <h3>Update</h3>}
                {successMessage && <h3>Updated</h3>}
              </button>
              </div>
                </form>
          </div>
          </Dialog>
    </>
  )
}

export default UpdateExperience
