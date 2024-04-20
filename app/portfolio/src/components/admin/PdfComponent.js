import React,{useState,useEffect} from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import axios from "axios"
import { MdDelete } from "react-icons/md";

function PdfComponent() {
  const [data, setData]=useState([])
 
  const [message,setMessage]=useState('')
  const [successMessage,setSuccessMessage]=useState('')

  const [pdfData,setPdfData]=useState(null)
 const addPdfData=()=>{
 const URI="http://localhost:8000/api/v1/pdf/upload"
 const formData = new FormData()
 formData.append('file',pdfData)
  axios.post(URI,formData)
  .then(res=>{
    if(res.status===200){
        setSuccessMessage('Pdf has been created')
        setTimeout(()=>{
          setSuccessMessage('')
          setMessage('')
          setPdfData(null)
        },1500)
    }

  }).catch(e=>alert("Error :"+e.message))
 }
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
  const deletePdf=(id)=>{
    const URI=`http://localhost:8000/api/v1/pdf/${id}`
    axios.delete(URI).
    then(res=>alert("deleted"))
    .catch(error=>alert("error :"+error.message))
  }
  return (
    <div className='flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md'>
     
   <h1 className='text-gray-400'>CV</h1>
  
    <label htmlFor="pdf">
      {data?.length===0 && <h2 className="rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg bg-blue-950 font-normal">Select pdf</h2>}
      {data?.length!==0 &&
        
        <div className="flex">
          <div className='flex cursor-pointer hover:bg-blue-900 flex-col items-end p-3 rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg  font-normal'>
          <MdDelete onClick={()=>deletePdf(data?._id)} className="size-6 text-red-600"/>
         
          <div  className="flex">
          <iframe src={data?.pdfUrl} width="200" height="100" title={data?.fileName}></iframe>
          {data?.pdfUrl&&<FaRegFilePdf className="size-10 text-blue-950"/>}
          <h2 className="font-normal text-gray-400">{data?.fileName}</h2>
          </div>
         
        </div>
        <h2 className="rounded-sm px-2 items-center flex  w-fit shadow-lg bg-transparent font-normal">Select pdf</h2>
         
        </div>
       
      }
    </label>
    <input type="file" id='pdf' onChange={(e)=>setPdfData(e.target.files[0])} hidden/>
    <div>
    <button onClick={addPdfData} className="px-4 w-fit bg-green-700 rounded-md">
            {message!=='' && <h3 className='text-red-700'>try again</h3>}
            {!message &&successMessage==="" && <h3>upload pdf</h3>}
            {successMessage && <h3>uploaded pdf</h3>}
          </button>
    </div>
    </div>
  )
}

export default PdfComponent
