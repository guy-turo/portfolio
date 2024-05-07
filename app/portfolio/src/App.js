import React,{useState} from 'react';
import {Routes,Route}from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage";
import LoginPage from './pages/auth/LoginPage';
import RecoverPage from './pages/auth/RecoverPage';
import NoPage from "./pages/NoPage";
import AdminPage from "./pages/AdminPage";
import SignUpPage from './pages/auth/RegisterPage';
import axios from "axios"
import PrivateRoute from "./pages/auth/helper/PrivateRoute";
import { useNavigate } from 'react-router-dom';


const App=()=> {
  const accessToken=localStorage.getItem("accessToken")!==null
  const [isAuthenticate,seIsAuthenticate]=useState(accessToken)
  const navigate= useNavigate()

  const login=( e,email, password,)=>{
    e.preventDefault()
    console.log(email, password)
    const URI="http://localhost:8000/api/v1/auth/login"
    axios.post(URI,
      {
      email:email,
      password:password,
    })
    .then((res)=>{
      if(res){
        if(res.data.accessToken && res.data.refreshToken){
        localStorage.setItem("accessToken", res.data.accessToken)
        localStorage.setItem("refreshToken", res.data.refreshToken)
        seIsAuthenticate(true)
        navigate('/admin')
        }
      }
    }).catch(e=>{
      navigate('/signin')
      alert(e.message)
    }
  )
}
  return (
  <main>
     <Routes>
      <Route path="/" element={<PortfolioPage/>}/>
        <Route path='/signIn' element={
          <LoginPage login={login}/>
        }/>
        <Route path='/admin' element={
          <PrivateRoute isAuthenticated={isAuthenticate} >
            <AdminPage/>
        </PrivateRoute>
        }/>
        <Route path='*' element={<NoPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/recover" element={<RecoverPage/>}/>
     
    </Routes>
  </main>
  );
}

export default App;