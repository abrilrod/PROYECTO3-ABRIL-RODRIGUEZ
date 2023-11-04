import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Historial from './components/Historial.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/historial" element={<Historial />}></Route>
          {/* <Route path="/home" element={<App />}></Route>
          <Route path="/about" element={<App />}></Route> */}
          <Route path="/*" element={<h1>Error 404 - Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
