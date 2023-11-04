import React from 'react'
import styles from '../styles/Cotizador.module.css'
import { useState } from 'react'

export default function Cotizador({ dataHoteles, dias, personas, hotel }) {
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
    

    const handleCotiz = (e) => {
        e.preventDefault;
        if (hotelSeleccionado && data[5]) {
          const costoEmpresa = data[5].costoFijo;
          // verificacion 
          console.log("costoEmpresa:", costoEmpresa);
          const tarifaNoche = hotelSeleccionado.tarifaNoche;
          const tarifaPersona = hotelSeleccionado.tarifaPersona;
          const cotizacionCalculada = qDays * tarifaNoche + qPersonas * tarifaPersona + costoEmpresa;
          setCotizacion(cotizacionCalculada.toFixed(2));
      } else {
          alert("No se encontró el hotel seleccionado")
      }
    }

  return (
    <div className={styles.cotizContainer}>
        <button type='submit' className={styles.btnCotizar} onClick={handleCotiz}>Cotizar</button>
        <p>Tu precio estimado en dólares es de: </p><span>{'US$ ' + cotizacion}</span>
    </div>
  )
}
