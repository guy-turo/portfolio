import React,{useState} from 'react'
import Dialog from "../../../utils/Dialog"
import { useUpdateSocialMutation } from '../../../redux_tool.js/service/dataApi/apiDataService'
import Loading from '../../helper/loadingComponent/Loading'
const UpdateSocials=({item})=> {
  const [updateSocial,{data,isError,error,isLoading}]= useUpdateSocialMutation()
 
  const [open,setOpen]=useState(false)

  const [title,setTitle]=useState("")
  const [link,setLink]=useState("")
 
  const  onClose=()=>setOpen(!open)
const update= async(e)=>{
    e.preventDefault()
    try{
      const response= await updateSocial({
        title:title,
        link:link
       })
       if(response.data){
        setTimeout(()=>{
          onClose()
          setTitle("")
          setLink("")
        },1500)
       }
    }catch(error){
      if (error.response) {
        console.log('Error response:', error.response);
      } else if (error.request) {
        console.log('Error request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
    }
     
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
              {isError && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{error.data}</textarea>}
              {data && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
              <button type="submit" className="px-4 bg-green-700 w-full rounded-md">
                {isError && <h3 className='text-red-700'>try again</h3>}
                {!isLoading&& <h3>Update</h3>}
                {data && <h3>Updated</h3>}
                {isLoading && <Loading/>}
              </button>
              </div>
                </form>
          </div>
          </Dialog>
    </>
  )
}

export default UpdateSocials
