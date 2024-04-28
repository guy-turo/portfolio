import React from 'react';
import {Routes,Route}from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage";
import LoginPage from './pages/auth/LoginPage';
import RecoverPage from './pages/auth/RecoverPage';
import NoPage from "./pages/NoPage";
import AdminPage from "./pages/AdminPage";
import SignUpPage from './pages/auth/RegisterPage';
const App=()=> {
  
  return (
  <main>
     <Routes>
      <Route path="/" element={<PortfolioPage/>}/>
        <Route path='/signIn' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/recover" element={<RecoverPage/>}/>
     
    </Routes>
  </main>
   
 
  );
}

export default App;