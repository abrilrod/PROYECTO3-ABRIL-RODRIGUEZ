import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Form from './components/Form.jsx'

function App() {
  const [datosHoteles, setDatosHoteles] = useState([]);

  useEffect(() => {
    fetch('/datos.json')
      .then((response) => response.json())
      .then((data) => setDatosHoteles(data))
      .catch((error) => {
        alerta("Error inesperado", "Se ha producido un error. Intente nuevamente, por favor.", "error")
        console.error("Se ha producido un error inesperado. Intente nuevamente por favor.", error)
      })
  }, []);

  return (
    <main>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/historial" element={<Historial />}></Route>
          </Route>
          {/* <Route path="/home" element={<App />}></Route>
          <Route path="/about" element={<App />}></Route>
          <Route path="*" element={<h1>Error 404 - Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter> */}

      <Header></Header>
      {/* <Outlet /> */}
      <Form dataHoteles={datosHoteles}></Form>
    </main>
  )
}
  
export default App
