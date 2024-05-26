import React from 'react'
import { useGetPdfQuery,useDownloadPdfMutation } from '../../../redux_tool.js/service/dataApi/apiDataService'
import CTASkeleton from './CTASkeleton'
import CustomAlert from '../../helper/CustomAlert'
const  CTA=()=>{
    const {data, isLoading, isError, error}=  useGetPdfQuery()
    const [downloadPdf, {data:downloadData,isLoading:downloadLoading,isError:downloadIsError, error:downloadError}]=useDownloadPdfMutation()
    console.log(data)
    const download=async()=>{
      
      try{
        const id= data?._id
        const response= await downloadPdf(id)
        if(response.data){
        
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
    var content = `<a href="${data?.pdfUrl}"> ${downloadData ? 'Downloaded CV' : 'Download CV'} </a>`;

  return (

    <div className="cta" >
      <div onClick={download} dangerouslySetInnerHTML={{
              __html: content.replace(/href/g, "target='_blank' href")
          }}
          className={`btn ${downloadLoading?"":"disabled"}  ${downloadLoading?"cursor-none":"cursor-pointer"} `}
      ></div>
      
      {data?.pdfUrl&& <div  className='w-5 h-5 rounded-full bg-blue-950'></div>}
      {/* {downloadError && downloadIsError && <CustomAlert message={downloadError.data} variant='error' dismissible/>}
      {downloadData && downloadIsError===false && <CustomAlert message={downloadData} variant='success' dismissible/>} */}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
     
    </div>
    
  )
}

export default CTA
