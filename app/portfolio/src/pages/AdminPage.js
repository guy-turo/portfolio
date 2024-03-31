import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Tabs} from 'flowbite-react'
import {HiUserCircle} from 'react-icons/hi'
import {MdDashboard} from 'react-icons/md'
function AdminPage() {
  const [title,setTitle]= useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState(null)

  const onImageChange=(e)=>{
    if(e.target.files && e.target.files[0]){
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const formData = new FormData();
    formData.append("file", e.target.files[0]);
    
  const onSubmitResponse=async()=>{
    const URI= 'http://localhost:8000/api/v1/images/upload'
    try{
      const response=await axios.post(URI, {body:formData})
      const data= response.json()
      console.log(data)
    }catch(e){
      console.error('Network error')
    }
  }
  console.log(image)
  
  return (
    <div className='App'>
      <div className="  flex flex-col  items-center justify-items-center w-full h-">
      <h2>Admin</h2>
        <div className="container h-1/2 w-1/2 bg-blue-800">
        <Tabs aria-label="Pills" className='pills'>
          <Tabs.Item active title='profile' icon={HiUserCircle} >
           <div className='w-fit  self-center flex items-center'>
              <form onSubmit={onSubmitResponse}  className='flex flex-col space-y-5'>
                <label htmlFor='image'>Image</label>
                <input type="file" id='image' accept='image/*' onChange={onImageChange} hidden/>
                <label htmlFor='title'>Title</label>
                <input type="text" id='title' required value={title}  onChange={e=>setTitle(e.target.value)} className='text-black'/>
                <label htmlFor="description">Descripton</label>
                <input type="text" required id='description'  value={description} onChange={e=>setDescription(e.target.value)}  className='text-black'/>
                <button type='submit'>save</button>
              </form>
                
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
