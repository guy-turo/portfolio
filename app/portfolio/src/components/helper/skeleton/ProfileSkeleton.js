import React from 'react'

const ProfileSkeleton=()=>{
 
  return (
    <div className="flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md" >
        <h1 className='text-gray-400'>profile</h1>
        <div  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col md:flex-row justify-between  md:space-x-4 '>
         
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="fullName">Full Name</label>
          <input type="text"
           id="fullName" className=" animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text"
          id="title" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>

          <label htmlFor="email">Email</label>
          <input type="text" 
          id="email" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" 
          id="phoneNumber" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>

          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text"
          id="experienceYear" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Clients</label>
          <input type="text"
          id="clients" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="projects">Projects</label>
          <input type="text"
          id="projects" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <textarea type="text"
          id="description" className="animate-pulse bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <div >
            <div>
            </div>
          <label htmlFor='role' className="flex animate-pulse w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center animate-pulse   rounded-md border border-solid border-blue-700">
         
                  <img s alt="" className=' flex animate-pulse size-20 rounded-md object-cover'/>
            
           
           
             
                <img alt="" className=' flex animate-pulse size-20 rounded-md object-cover'/>
                
           
             
          </div>
          <h2 className="flex font-normal animate-pulse px-2 rounded bg-blue-950 ">Select image</h2>
         </label>
        <input type="file" required multiple id='role'   accept='image/*' hidden/>
        
      </div>
      <p className='flex font-mono  w-full animate-pulse text-gray-400'>You only need 2 pictures</p>
     
        </div>
      </div>
  )
}

// const mapStateToProps= (state)=>{
//   return{
//     meData:state.me,
//     updateData:state.updateMe,
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
// return {
//   fetchMe: ()=>dispatch(fetchMe())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
export default ProfileSkeleton