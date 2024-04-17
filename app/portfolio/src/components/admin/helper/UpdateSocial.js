import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import axios from 'axios'
const UpdateSocials=({item})=> {
  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")
  const [open,setOpen]=useState(false)

  const [title,setTitle]=useState("")
  const [link,setLink]=useState("")
 
  const  onClose=()=>setOpen(!open)
const update= async(e)=>{
    e.preventDefault()
      const URI=`http://localhost:8000/api/v1/me/Socials/${item._id}`
     axios.put(URI,{
      title:title,
      link:link
     })
     .then((response)=>{
      if(response){
        setSuccessMessage("Updated")
          setTimeout(()=>{
            onClose()
            setSuccessMessage('')
            setTitle("")
            setLink("")
          },1500)
      }
     })
     .catch((error)=>{
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.log('Error response:', error.response);
        setMessage("error response:"+ error.response)
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
      <button className="border border-solid border-gray-400 px-1 rounded-md"  onClick={()=>setOpen(!open)}>Update</button>
        <Dialog onClose={onClose} open={open}>
          <div className="pt-3 w-80 rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-300 border border-solid border-blue-600">
            <form  onSubmit={update} className="flex flex-col items-center">
              <div className="space-y-2">
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder={item.title} className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
                <input type="text" value={link}  onChange={(e)=> setLink(e.target.value)} placeholder={item.link} className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
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

export default UpdateSocials
