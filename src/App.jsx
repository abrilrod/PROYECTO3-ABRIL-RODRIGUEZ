import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './styles/App.css';
import Header from './components/Header';
import Form from './components/Form.jsx';

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
      {/* <Outlet /> */}
      <Header></Header>
      <Form dataHoteles={datosHoteles}></Form>
    </main>
  )
}
  
export default App
