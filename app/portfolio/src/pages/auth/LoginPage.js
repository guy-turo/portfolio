import React, {useState} from 'react'
import me from "../../assets/me.png"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { login } from '../../redux/authRedux/login/login_action'
import Loading from '../../components/helper/loadingComponent/Loading'

function LoginPage({signInData, login}) {
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState("")
  const [hiddenPassword, setHiddenPassword]=useState(true)
  const [disableButton, setDisableButton]=useState(false)
  
  console.log(signInData)
  const handleLogin=( e,email, password,)=>{
    e.preventDefault()
    setDisableButton(true)
   login(email, password)
}
  return (
    <div  className='relative flex w-full snap-y   snap-mandatory h-screen overflow-x-hidden overflow-y-hidden  lg:justify-between items-center px-10 place-content-center'>
     <div></div>
     <img 
      src={me} 
      alt="" 
      className='w-80 absolute hidden lg:block h-80 rounded-full m-20 border border-solid border-blue-900 shadow-2xl'/>
     <div  className="flex snap-center shadow-2xl  flex-col  items-center space-y-4 bg-blue-950 justify-evenly rounded-md p-5 py-10 w-96 h-fit">
      <form 
        onSubmit={(e)=>handleLogin(e,email,password)} 
        className='w-full space-y-5 '
      >
      <h1 className="text-gray-300 block text-xl mb-10">Log in to Portfolio</h1>
      <div className='w-full'>
      <label 
        htmlFor="email" 
        className='block text-sm mb-2'>
          Email Address
      </label>
      <input 
        type="text" 
        id='email' 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}  
        placeholder="e.g example@email.com" 
        name="Email" 
        className="py-3 px-4 block w-full border-gray-200 border-solid border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      />
      {signInData.error==="This email not exist"&&<p className="text-red-500 font-normal text-sm">Email incorrect</p>}
      </div>
      <div className='w-full '>
        <div className='flex justify-between items-center '>
          <label htmlFor="password"  className='block text-sm mb-2'>Password</label>
          <button className='text-green-600 font-semibold'>
            <Link to="/recover">
              Forgot password
            </Link>
          </button>
        </div>
        <div className='relative'>
        <div class="max-w-sm ">
   <input 
    id="hs-toggle-password-with-checkbox" 
    value={password} 
    onChange={(e)=>setPassword(e.target.value)} 
    type={`${hiddenPassword?"password":"text"}`} 
    class={`py-3 px-4 block w-full ${signInData.error==='Wrong password'?"border-gray-200 border":"border-red-500 border-2"}  border-solid rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`} 
    placeholder="Enter current password" 
    />

    {signInData.error==="Wrong password"&&<p className="text-red-500 font-normal text-sm"> wrong password</p>}
  <div class="flex mt-4">
    <input data-hs-toggle-password='{"target": "#hs-toggle-password-with-checkbox"}' 
      id="hs-toggle-password-checkbox" 
      type="checkbox" 
      value={hiddenPassword}
      onChange={(e)=>setHiddenPassword(!hiddenPassword)}
      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
    />
    <label 
      for="hs-toggle-password-checkbox" 
      class="text-sm text-gray-500 ms-3 dark:text-neutral-400">
        Show password
    </label>
    </div>

    </div>
        </div>
         </div>
      <button 
        id='submit' 
        disabled={signInData.loading}
        className={`rounded-lg ${disableButton?"bg-green-950":"bg-green-600"} w-full p-1 ${disableButton?"text-gray-":"text-black"} font-semibold`}>
          Login {signInData.loading===true && <Loading/> }
      </button>
      </form>
      <p className='flex place-items-center items-center justify-center '>
        Don't have an account?
        <span className='text-green-500 space-x-3 font-semibold hover:text-blue-600 cursor-pointer'>
          <Link to="/signup">
            Sign Up
          </Link>
        </span>
      </p>
     </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    signInData:state.login
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    login:(email, password)=>dispatch(login(email,password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (LoginPage)
