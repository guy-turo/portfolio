import React,{useState,} from 'react'
import axios from 'axios'
function AdminPage() {
  const [message,setMessage]=useState('')
  const [image,setImage]=useState(null)


  const handleFileName=(event)=>{
    setImage(event.target.files[0])
   
  }
  const uploadImage= async(e)=>{

    e.preventDefault()
    if(image){
      const formData=new FormData()
      console.log(image)
      formData.append('file',image)
      const URI="http://localhost:8000/api/v1/images/upload"
     try{
      const response = await axios.post(URI, formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
      },)
      setMessage(response.data.message)
     }catch(err){
      console.error("Upload error:", err)
      setMessage("An error occurred during uploading")
     }
    }else if(!image){
      setMessage("please select a file to upload")
      return
    }
  }

  return (
    <div className='w-full  flex-col   self-center space-y-2  flex items-center divide-y-2 divide-solid divide-gray-800'>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>profile</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col md:flex-row justify-between  md:space-x-4 '>
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" id="phoneNumber" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          </div>
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text" id="experienceYear" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="clients">Clients</label>
          <input type="text" id="clients" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor='files'>
           <div className="w-fit px-3 bg-slate-800 text-green-700 rounded-sm">Add Image</div>
            </label>
        <input type="file" id='files' onChange={handleFileName} accept='image/*' hidden/>
        {message && <p className="text-red-500">{message}</p>}
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>Project</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="github">Link Github</label>
          <input type="text" id="github" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="live">Link Live</label>
          <input type="text" id="live" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor='files'>
           <div className="w-fit px-3 bg-slate-800 text-green-700 rounded-sm">Add Image</div>
            </label>
        <input type="file" id='files' onChange={handleFileName} accept='image/*' hidden/>
        {message && <p className="text-red-500">{message}</p>}
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>Testimonials</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="testimonial">Testimonial</label>
          <input type="text" id="testimonial" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor='files'>
           <div className="w-fit px-3 bg-slate-800 text-green-700 rounded-sm">Add Image</div>
            </label>
        <input type="file" id='files' onChange={handleFileName} accept='image/*' hidden/>
        {message && <p className="text-red-500">{message}</p>}
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col  container">
        <h1 className='text-gray-400'>Services</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="ui/ux">UI/UX</label>
          <input type="text" id="ui/ux" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Frontend</label>
          <input type="text" id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="backend">Backend</label>
          <input type="text" id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>Social</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="link">Link</label>
          <input type="text" id="link" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
         
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col  container">
        <h1 className='text-gray-400'>Experiences</h1>
        <form onSubmit={uploadImage} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1 '>
          
          <label htmlFor="frontend">Frontend</label>
          <input type="text" id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="backend">Backend</label>
          <input type="text" id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
        </div>
  )
}

export default AdminPage