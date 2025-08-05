import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<App />} />
    </Routes>
  </BrowserRouter>,

  </StrictMode>,
)
