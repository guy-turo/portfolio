import React,{useState} from 'react'
import Dialog from "../../../../utils/Dialog"
import { CgMoreO } from "react-icons/cg";
const ViewDetailPortfolio=({item})=> {
const [open,setOpen]=useState(false)
const  onClose=()=>setOpen(!open)
  return (
    <>
      <button  onClick={()=>setOpen(!open)}>
      <CgMoreO  className={` text-gray-400 cursor-pointer`}/>
      </button>
        <Dialog onClose={onClose} open={open}>
          <div className="pt-3 w-fit space-y-2 overflow-x-auto  items-center justify-center rounded px-10 pb-5 h-fit flex flex-col shadow-lg bg-slate-300 border border-solid border-blue-600">
            <h2 className="text-gray-400 underline text-2xl">{item.title}</h2>
                  <ul className={`grid grid-cols-${item.pictures.length} `}>
                    {item.pictures.map((data,index)=><li key={index}>
                    <img src={data} alt="" className='size-40 rounded-md object-cover'/>
                    </li>)}
                  </ul>
                <textarea  type="text" rows={6} value={item.description}  className=" bg-gray-300 w-full border rounded-md px-2 text-gray-500 border-solid border-blue-900"/>
                <div className='flex space-x-2'>
                <a href={item.linkGithub} target='-blank' className='text-black bg-transparent border border-solid rounded-lg border-indigo-400 px-2 hover:border-indigo-600'>Github</a>
                <a href={item.liveLink} target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
                </div>
          </div>
          </Dialog>
    </>
  )
}

export default ViewDetailPortfolio
