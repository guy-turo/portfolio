import {Routes,Route}from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import AdminPage from "./pages/AdminPage";
const App=()=> {
  return (
  <main>
     <Routes>
      <Route path="/" element={<PortfolioPage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='*' element={<NoPage/>}/>
     
    </Routes>
  </main>
   
 
  );
}

export default App;
