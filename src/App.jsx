import { useState, useEffect } from 'react'
import { Outlet, useOutlet } from 'react-router-dom'
import './styles/App.css';
import Header from './components/Header';
import Form from './components/Form.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  const outlet = useOutlet();
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
      <NavBar />
      <Header></Header>
      {!outlet && <Form dataHoteles={datosHoteles}></Form>}
      <Outlet />
    </main>
  )
}
  
export default App
