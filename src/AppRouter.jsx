import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Historial from './Pages/Historial.jsx'
import App from './App.jsx'
import './styles/index.css'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/historial" element={<Historial />}></Route>
          </Route>
          <Route path="/*" element={<h1>Error 404 - Page not found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
