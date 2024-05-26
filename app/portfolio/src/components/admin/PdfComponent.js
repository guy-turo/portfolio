import React,{useState} from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useGetPdfQuery,useAddPdfMutation,useDeletePdfMutation,useUpdatePdfMutation, } from '../../redux_tool.js/service/dataApi/apiDataService';
import PdfSkeleton from '../helper/skeleton/PdfSkeleton';
import Loading from '../helper/loadingComponent/Loading';
import CustomAlert from '../helper/CustomAlert';


const  PdfComponent=() =>{
  const [pdfData,setPdfData]=useState(null)
  const {data, isLoading, isError, error}=  useGetPdfQuery()
  const [addPdf,{data:addPdfData, isLoading:addPdfLoading, isError:addPdfIsError, error:addPdfError}]=useAddPdfMutation()
  const [deletePdf,{data:deleteData,isLoading:deleteLoading, isError:deleteIsError, error:deleteError}]=useDeletePdfMutation()
  const [updatePdf, {data:updateData,isLoading:updateLoading, isError:updateIsError, error:updateError}]=useUpdatePdfMutation()
  const handleAddPdf=async (e)=>{
  e.preventDefault()
  try{
    const formData = new FormData()
    formData.append('file',pdfData)
   
     const response =await addPdf({data:formData})
if(response.data ){
  console.log(response)
  setTimeout(()=>{
    setPdfData(null)
  },1500)
}
  }catch(e){
    console.log(e.message)
  }
 }

  const handleDeletePdf=async(e,id)=>{
    e.preventDefault()
    try{
      console.log(id)
    const response = await deletePdf(id)
    if(response.data){
      console.log(response)
    }
    }catch(error){
      console.log(error.message)
    }

  }
  const handleUpdatePdf=async(e,id)=>{
    e.preventDefault()
    try{
      const formData=new FormData()
      formData.append('file',pdfData)
     const response =await updatePdf({
      id:id,
      data:formData
    })
     if(response.data){
      setTimeout(()=>{
        setPdfData(null)
      },1500)
     }
    }catch(error){
      console.log(error)
    }
  }
  if(isLoading){
    return <><PdfSkeleton/></>
  }

  return (
  <div className='flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md'>
   <h1 className='text-gray-400'>CV</h1>
  {data&&<div onClick={(e)=>handleDeletePdf(e,data?._id)} className="flex cursor-pointer items-center rounded-md border border-solid border-red-800  w-fit bg-red-300 px-2">
    <MdDelete  className="size-6 text-red-600 shadow-2xl" />
    <h2 className='font-normal text-red-500 '>Delete </h2>
      {deleteLoading &&<Loading/> }
      {deleteData &&<CustomAlert message="Deleted" variant='success' dismissible/>}
      {deleteError && deleteIsError && <CustomAlert message={deleteError.data} variant='error' dismissible/>}
    </div>}
  <label htmlFor="pdf">
      {!data&& 
      <div className='flex '>
        {
          pdfData!==null &&
          <div className='w-5 h-5 rounded-full bg-blue-700'>
          </div>
        }
        <h2 className="rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg bg-blue-950 font-normal">Select pdf</h2>
      </div>
        }
       {data &&
        <div className="flex">
          <div className='flex cursor-pointer hover:bg-blue-900 flex-col items-end p-3 rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg  font-normal'>
        {data && pdfData===null&& 
          <div className="flex">
           {data?.pdfUrl&&<FaRegFilePdf className="size-10 text-blue-950"/>}
          <h2 className="font-normal text-gray-400">{data?.fileName}</h2>
          </div>}
          {data&& pdfData!==null&& <div  className="flex">
           <FaRegFilePdf className="size-10 text-blue-950"/>
          </div>}
        </div>
        <h2 className="rounded-sm px-2 items-center flex  w-fit shadow-lg bg-transparent font-normal">Select pdf</h2>
        </div>
      }
      {error && isError && <CustomAlert message={deleteError.data} variant='error' dismissible/>}
 
    </label>
    <input type="file" id='pdf' onChange={(e)=>setPdfData(e.target.files[0])} hidden/>
    <div className='flex items-center space-x-2 justify-center self-start'>
    
      <button onClick={handleAddPdf} className="px-4 w-fit bg-green-700 rounded-md">
        {addPdfError!==undefined&& addPdfIsError && <h3 className='text-red-400'>try again</h3>}
        {addPdfError===undefined && addPdfData===undefined && <h3>{addPdfLoading?"uploading pdf":"upload pdf"}</h3>}
        {addPdfData && <h3>uploaded pdf</h3>}
      </button>
      
        <button onClick={(e)=>handleUpdatePdf(e,data?._id)} className="px-4 w-fit bg-green-700 rounded-md">
          {updateError!==undefined&& updateError && <h3 className='text-red-400'>try again Update</h3>}
          {!updateIsError &&updateData===undefined && <h3>{updateLoading?"Updating... pdf":"update pdf"}</h3>}
          {updateData && <h3>updated pdf</h3>}
        </button>
      
    </div>
    </div>
  )
}

export default PdfComponent
