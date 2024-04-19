import React,{useState,useEffect} from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import axios from "axios"
import { MdDelete } from "react-icons/md";

function PdfComponent() {
  const [data, setData]=useState([])
 
  const [message,setMessage]=useState('')
  const [successMessage,setSuccessMessage]=useState('')

  const [pdfData,setPdfData]=useState(null)
 
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/pdf"
    axios.get(URI)
    .then(res=>{
      if(res.status===200){
        setData(res.data[0])
      }
    })
    .catch(error=>alert('Error :'+error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md'>
     
   <h1 className='text-gray-400'>CV</h1>
  
    <label htmlFor="pdf">
      {data?.length!==0 && <h2 className="rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg bg-blue-950 font-normal">Select pdf</h2>}
      {data?.length===0 &&
        <div className='flex flex-col items-end p-3 rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg  font-normal'>
          <MdDelete className="size-6 text-red-600"/>
          <div className="flex">
          <FaRegFilePdf className="size-10 text-blue-950"/>
          <h2 className="font-normal text-gray-400">fileName</h2>
          </div>
         
        </div>
      }
    </label>
    <input type="file" id='pdf' onChange={(e)=>setPdfData(e.target.files[0])} hidden/>
    <div>
    <button type="submit" className="px-4 w-fit bg-green-700 rounded-md">
            {message!=='' && <h3 className='text-red-700'>try again</h3>}
            {!message &&successMessage==="" && <h3>upload pdf</h3>}
            {successMessage && <h3>uploaded pdf</h3>}
          </button>
    </div>
    </div>
  )
}

export default PdfComponent
