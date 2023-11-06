import React from 'react'
import styles from '../styles/Cotizador.module.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import SaveBtn from './SaveBtn'

export default function Cotizador({ dataHoteles, dias, personas, hotel }) {
  const alerta = (titulo, mensaje, icono)=> {
    Swal.fire({
        icon: icono || '', 
        title: titulo || '',
        text: mensaje,
        showConfirmButton: false,
        timer: 3500,
        width: '240px',
        customClass: {
          alerta:'alert-text'
        }
      })
  }

  // variables obtenidas
    const data = dataHoteles;
    const qDays = parseInt(dias);
    const qPersonas = parseInt(personas);
    const hotelId = parseInt(hotel);
    const hotelSeleccionado = data.find((hotel) => hotel.id === hotelId);
    const [cotizacion, setCotizacion] = useState(0);

    // verificacion 
    console.log("qDays:", qDays);
    console.log("qPersonas:", qPersonas);
    console.log("hotelSeleccionado:", hotelSeleccionado);
    const datosCompletos = () => {
      if ((qDays !== "..." && qDays <= 30 ) && (qPersonas !== "..." && qPersonas <= 10) && hotelSeleccionado !== "...") {
        return true;
      } else {
        return false;
      }
    }
    console.log("datosCompletos:", datosCompletos());

    const handleCotiz = (e) => {
        e.preventDefault();
        if (datosCompletos()) {
          if (hotelSeleccionado && data[5]) {
              const costoEmpresa = data[5].costoFijo;
              // verificacion 
              console.log("costoEmpresa:", costoEmpresa);
              const tarifaNoche = hotelSeleccionado.tarifaNoche;
              const tarifaPersona = hotelSeleccionado.tarifaPersona;
              const cotizacionCalculada = qDays * tarifaNoche + qPersonas * tarifaPersona + costoEmpresa;
              setCotizacion(cotizacionCalculada.toFixed(2));
          } else {
              alerta('', 'No se encontró el hotel seleccionado', 'error');
          } 
        } else {  
            alerta('', 'Debes completar todos los datos en pantalla..', 'warning');
        }
    }

    console.log('nueva cotizacion ' + cotizacion)
    
  return (
    <div className={styles.cotizContainer}>
        <button type='submit' className={styles.btnCotizar} onClick={handleCotiz}>Cotizar</button>
        <p>Tu precio estimado en dólares es de: </p><span>{'US$ ' + cotizacion}</span>
        <SaveBtn cotizacionActual={cotizacion} numDias={qDays} hotel={hotelSeleccionado} numPersonas={qPersonas} />
    </div>
  )
}
