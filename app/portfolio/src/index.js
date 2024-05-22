import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from "react-router-dom"
import {registerLicense} from "@syncfusion/ej2-base"
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhMYVF/WmFZfVpgcV9CZ1ZSRGYuP1ZhSXxXdkBhW39bdHNWRmlaV0E=")
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    
 
);
reportWebVitals();
