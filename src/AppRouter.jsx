import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Historial from './components/Historial.jsx'
import App from './App.jsx'
import './styles/index.css'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/historial" element={<Historial />}></Route>
          {/* <Route path="/home" element={<App />}></Route>
          <Route path="/about" element={<App />}></Route> */}
          <Route path="/*" element={<h1>Error 404 - Page not found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
