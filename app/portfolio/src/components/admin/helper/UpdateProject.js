import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import api from "../../../utils/Helper"
import { LiaEditSolid } from "react-icons/lia";
const UpdateProject=({item})=> {
  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")
  const [open,setOpen]=useState(false)

  const [image,setImage]=useState([])

  const [title,setTitle]=useState([item.title])
  const [description,setDescription]=useState([item.description])
  const [linkLive,setLinkLive]=useState([item.linkLive])
  const [linkGithub,setLinkGithub]=useState([item.linkGithub])

  const handleFileName=(event)=>{
    const files= Array.from(event.target.files)
    setImage(files)
  }
const  onClose=()=>setOpen(!open)

const formData=new FormData()
image.forEach(data=>formData.append('file', data))
formData.append("title",title)
formData.append("description", description)
formData.append("linkLive",linkLive)
formData.append("linkGithub", linkGithub)
const update= async(e)=>{
    e.preventDefault()
      const URI=`http://localhost:8000/api/v1/me/projects/${item._id}`
     api.put(URI,formData)
     .then((response)=>{
      if(response){
        setSuccessMessage("Updated")
          setTimeout(()=>{
            onClose()
            setSuccessMessage('')
           setTitle('')
           setDescription('')
           setImage([])
           setLinkGithub('')
           setLinkLive('')
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
      <LiaEditSolid  className={` text-gray-400 cursor-pointer`}/>
      </button>
        <Dialog onClose={onClose} open={open}>
          <div className="pt-3 w-80 items-center justify-center rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-300 border border-solid border-blue-600">
            <h2 className="text-gray-400 underline">{item.title}</h2>
            <form  onSubmit={update} className="flex flex-col items-center justify-center">
            <div className=' flex flex-col items-center space-x-2 '>
              <div  className="w-full flex items-center justify-center  cursor-pointer ">
              <label htmlFor='fil'>
                <div className="w-full flex flex-col items-center justify-center  cursor-pointer">
                <div className="w-full flex items-center  cursor-pointer p-2 bg-slate-500  rounded-md border border-solid border-blue-700">
                {image.length===0 &&
                  <ul className="flex">
                    {item.pictures.map((data,index)=><li key={index}>
                    <img src={data} alt="" className='size-20 rounded-md object-cover'/>
                    </li>)}
                  </ul>
                }
                {image.length!==0&& 
                <ul className="flex">
                  {image.map((item,index)=><li key={index}>
                    <img src={URL.createObjectURL(item)} alt="" className='size-20 rounded-md object-cover'/>
                  </li>
                  )}
                </ul>
              }
              </div>
              <h2 className="font-normal text-blue-950">select image</h2>
                </div>
             </label>
              <input type="file" id='fil' multiple onChange={handleFileName} accept='image/*' hidden />
              </div>
              <div className="space-y-2">
                 <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder={item.title} className=" bg-gray-300 border w-full rounded-md px-2 text-black border-solid border-blue-800"/>
                
                <textarea  type="text" value={description}  onChange={(e)=> setDescription(e.target.value)} placeholder={item.testimonials} className=" bg-gray-300 w-full border rounded-md px-2 text-black border-solid border-blue-800"/>
                
                <input type="text" value={linkLive} onChange={(e)=>setLinkLive(e.target.value)} placeholder={item.title} className=" bg-gray-300 border rounded-md w-full px-2 text-black border-solid border-blue-800"/>
                <input type="text" value={linkGithub}  onChange={(e)=> setLinkGithub(e.target.value)} placeholder={item.testimonials} className=" bg-gray-300 border w-full rounded-md px-2 text-black border-solid border-blue-800"/>
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

export default UpdateProject
