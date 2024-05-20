import React ,{useState}from 'react'
import { useGetPdfQuery } from '../../../redux_tool.js/service/dataApi/apiDataService'
import CTASkeleton from './CTASkeleton'
const  CTA=()=>{
    const [isDownloading, setIsDownloading] = useState(false)
    const {data, isLoading, isError, error}=  useGetPdfQuery()
    if(isLoading){
        return <><CTASkeleton/></>
    }
    if(isError){
      console.log("Pdf error :", error)
    }
  return (
    <div className="cta">
      <a href={data?.pdfUrl} onClick={()=>setIsDownloading(!isDownloading)} target="_blank"  className={`btn ${isDownloading?"":"disabled"}`} rel="noreferrer"> {isDownloading ? 'Downloading... CV' : 'Download CV'}</a>
      {data?.pdfUrl&& <div className='w-5 h-5 rounded-full bg-blue-950'></div>}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
