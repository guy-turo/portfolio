import React from 'react'
import { useGetPdfQuery,useDownloadPdfMutation } from '../../../redux_tool.js/service/dataApi/apiDataService'
import CTASkeleton from './CTASkeleton'
import CustomAlert from '../../helper/CustomAlert'
const  CTA=()=>{
    const {data, isLoading, isError, error}=  useGetPdfQuery()
    const [downloadPdf, {data:downloadData,isLoading:downloadLoading,isError:downloadIsError, error:downloadError}]=useDownloadPdfMutation()

    console.log(data)
    const download=async(e)=>{
      e.preventDefault()
      try{
        const id= data?._id
        const response= await downloadPdf(id)
        if(response.data){
          console.log(response)
        }
      }catch(error){
        console.error(error)
      }
    }
    if(isLoading){
        return <><CTASkeleton/></>
    }
    if(isError){
      console.log("Pdf error :", error)
    }
    console.log(downloadError)
  return (
    <div className="cta">
      <a href={data?.pdfUrl}  onClick={download} target="_blank"  className={`btn ${downloadLoading?"":"disabled"}  ${downloadLoading?"cursor-none":"cursor-pointer"} `} rel="noreferrer"> {downloadLoading ? 'Downloading... CV' : 'Download CV'}</a>
      {data?.pdfUrl&& <div className='w-5 h-5 rounded-full bg-blue-950'></div>}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      {downloadError && downloadIsError && <CustomAlert message={downloadError.data} variant='error' dismissible/>}
      {downloadData && downloadIsError===false && <CustomAlert message="Add successfully" variant='success' dismissible/>}
 
    </div>
    
  )
}

export default CTA
