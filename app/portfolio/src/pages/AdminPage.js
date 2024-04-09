import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Tabs} from 'flowbite-react'
import {HiUserCircle} from 'react-icons/hi'
import {MdDashboard} from 'react-icons/md'
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
    <div className='App'>
      <div className="  flex flex-col  items-center justify-items-center w-full h-">
      <h2>Admin</h2>
        <div className="container h-1/2 w-1/2 bg-blue-800">
        <Tabs aria-label="Pills" className='pills'>
          <Tabs.Item active title='profile' icon={HiUserCircle} >
           <div className='w-fit flex-col  self-center flex items-center'>
              <form onSubmit={uploadImage}>
                 <label htmlFor='files'>Image</label>
                <input type="file" id='files' onChange={handleFileName} accept='image/*' hidden/>
                {/* <label htmlFor='title'>Title</label>
                <input type="text" id='title' required value={title}  onChange={e=>setTitle(e.target.value)} className='text-black'/>
                <label htmlFor="description">Descripton</label>
                <input type="text" required id='description'  value={description} onChange={e=>setDescription(e.target.value)}  className='text-black'/> */}
                <button type="submit">Upload</button>
              </form>
               {message && <p className="text-red-500">{message}</p>}
            
                
           </div>
          </Tabs.Item>
          <Tabs.Item  title='Dashboard' icon={MdDashboard}>
            Dashboard
          </Tabs.Item>
          
        </Tabs>
        </div>
    </div>
    </div>
    
  )
}

export default AdminPage
