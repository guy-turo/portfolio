import React,{useEffect,useState} from 'react'

import api from '../../../utils/Helper'

function CTA() {
  const [pdfData,setPdfData]=useState([])
  const [isDownloading, setIsDownloading] = useState(false)
  
  const fetchData=()=>{
    const URI="/pdf"
    api.get(URI)
    .then(res=>{
      if(res.status===200){
        setPdfData(res.data[0])
      }
    })
    .catch(error=>alert('Error :'+error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="cta">
      <a href={pdfData?.pdfUrl} onClick={()=>setIsDownloading(!isDownloading)} target="_blank"  className={`btn ${isDownloading?"":"disabled"}`} rel="noreferrer"> {isDownloading ? 'Downloading... CV' : 'Download CV'}</a>
      {pdfData?.pdfUrl&& <div className='w-5 h-5 rounded-full bg-blue-950'></div>}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
