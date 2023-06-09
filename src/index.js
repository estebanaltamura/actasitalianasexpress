import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initFireBase } from './firebase/config';
import './index.css';
import App from './App';
import { GraciasPorSuConsulta } from './components/GraciasPorSuConsulta/GraciasPorSuConsulta';
import { IsLoadingContext } from './Contexts/IsLoadingContext';
import { FormularioWhatsapp } from './components/FormularioWhatsapp/FormularioWhatsapp';

initFireBase()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IsLoadingContext>
        <Routes>
          <Route path="*" element = {<App />}/>
          <Route path="/home" element = {<App />}/>
          <Route path="/graciasPorSuConsulta" element = {<GraciasPorSuConsulta />}/>        
          <Route path="/chatearConUnOperador" element = {<FormularioWhatsapp />}/>    
        </Routes>
      </IsLoadingContext>
    </BrowserRouter>
  </React.StrictMode>
);



