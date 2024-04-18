import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import axios from 'axios'
const UpdateTestimonials=({item})=> {
  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")
  const [open,setOpen]=useState(false)
  
  const [imageTes,setImageTes]=useState(null)
  
  const [name, setName]=useState('')
  const [title,setTitle]=useState('')
  const [testimonials,setTestimonials]=useState("")
 
  const  onClose=()=>setOpen(!open)

  console.log(imageTes)
  const handleFileName=(event)=>{
    
    setImageTes(event.target.files[0])
  }
  const uploadImage= async(e)=>{
    e.preventDefault()
    if(!imageTes){
      setMessage("please select a file to upload")
      return
    }
      const formData=new FormData()
      formData.append('file',imageTes)
      formData.append('name',name)
      formData.append('title',title)
      formData.append("testimonials", testimonials)

      const URI=`http://localhost:8000/api/v1/me/testimonials/${item._id}`
     
     axios.put(URI,formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      },
     })
     .then((response)=>{
      if(response){
        setSuccessMessage("Uploaded")
          setTimeout(()=>{
            onClose()
            setImageTes(null)
            setSuccessMessage('')
            setName("")
            setTitle("")
            setTestimonials("")
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
            <form  onSubmit={uploadImage} className="flex flex-col items-center">
              <div className=' flex items-center space-x-2'>
              <div>
              <label htmlFor='fil'>
              <div className="size-20 flex items-center  cursor-pointer p-2 bg-slate-500  rounded-full border border-solid border-blue-700">
                {imageTes===null &&<img src={item.pictures} alt="" className='size-20 rounded-full object-cover'/>}
                {imageTes!==null&& <img src={URL.createObjectURL(imageTes)} alt="" className='size-20 rounded-full object-cover'/>}
              </div>
             </label>
              <input type="file" id='fil' multiple onChange={handleFileName} accept='image/*' hidden />
              </div>
              <div className="space-y-2">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder={item.name} className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder={item.title} className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
                <input type="text" value={testimonials}  onChange={(e)=> setTestimonials(e.target.value)} placeholder={item.testimonials} className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
              </div>
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

export default UpdateTestimonials
