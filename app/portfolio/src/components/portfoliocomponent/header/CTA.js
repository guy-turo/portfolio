import React,{useEffect,useState} from 'react'
import resume from '../../../assets/resume.pdf'
import axios from 'axios'

function CTA() {
  const [pdfData,setPdfData]=useState([])
  const [isDownloading, setIsDownloading] = useState(false)

  const pdfId=pdfData._id
  
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const URI=`http://localhost:8000/api/v1/pdf/download-pdf/${pdfId}`
      const response = await axios.get(URI, { responseType: 'blob' });
      if (response.status === 302) {
        const downloadUrl = response.headers.location;
        console.log(downloadUrl)
        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.download = `${pdfId}.pdf`;
        downloadLink.click();
      } else {
        console.error('Unexpected response');
      }
    } catch (error) {
      alert("Something went wrong with your connection while downloading"+error.message);
    } finally {
      setIsDownloading(false);
    }
  };
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/pdf"
    axios.get(URI)
    .then(res=>{
      if(res.status===200){
        console.log(res.data[0])
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
    
      <button onClick={handleDownload} disabled={isDownloading} className='btn'>
        {isDownloading ? 'Downloading...' : 'Download PDF'}
      </button>
      {pdfData.pdfUrl&& <div className='w-5 h-5 rounded-full bg-blue-950'></div>}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
