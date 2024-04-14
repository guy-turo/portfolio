import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import { LuImagePlus } from "react-icons/lu";
import axios from 'axios'
const UploadImage=({model})=> {
  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")
  const [image,setImage]=useState(null)
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState('')
  const [description, setDescription]=useState('')
  const  onClose=()=>setOpen(!open)


  const handleFileName=(event)=>{
    setImage(event.target.files[0])
  }
  const uploadImage= async(e)=>{
    e.preventDefault()
    if(!image){
      setMessage("please select a file to upload")
      return
    }
      const formData=new FormData()
      formData.append('file',image)
      formData.append('title',title)
      formData.append('description',description)

      const URI=`http://localhost:8000/api/v1/images/${model}`
     
     axios.post(URI,formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      },
     })
     .then((response)=>{
      if(response){
        setSuccessMessage("Uploaded")
          setTimeout(()=>{
            onClose()
            setImage(null)
            setSuccessMessage('')
            setTitle("")
            setDescription("")
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
      <button className="w-fit px-3 bg-slate-800 text-green-700 rounded-sm"  onClick={()=>setOpen(!open)}>Add Image</button>
        <Dialog onClose={onClose} open={open}>
          <div className="pt-3 w-80 rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-300 border border-solid border-blue-600">
            <form  onSubmit={uploadImage} className="flex flex-col items-center">
            <div className=' flex items-center space-x-2'>
              <div>
              <label htmlFor='files'>
              <div className="size-20 flex items-center  p-2 bg-slate-500  rounded-full border border-solid border-blue-700">
                {image===null &&<LuImagePlus className="flex size-20 "/>}
                {image!==null&& <img src={URL.createObjectURL(image)} alt="" className='size-20 rounded-full object-cover'/>}
              </div>
             </label>
            <input type="file" id='files' onChange={handleFileName} accept='image/*' hidden/>
              </div>
              <div className="space-y-2">
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
                <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description' className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
              </div>
              </div>
              <div>
                
              </div>
              <div className="space-y-1">
              {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
              {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
              <button type="submit" className="px-4 bg-green-700 w-full rounded-md">
                {message && <h3 className='text-red-700'>try again</h3>}
                {!message &&successMessage==="" && <h3>Upload</h3>}
                {successMessage && <h3>Uploaded</h3>}
                </button>
          
              </div>
                </form>
          </div>
          </Dialog>
    </>
  )
}

export default UploadImage
