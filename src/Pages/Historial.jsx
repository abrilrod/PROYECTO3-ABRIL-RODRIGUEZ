import React from 'react'
import styles from '../styles/Historial.module.css'
import { useState, useEffect } from 'react'

export default function Historial() {
    const [cotizacionesGuardadas, setCotizacionesGuardadas] = useState([])
    
    useEffect(() => {
        const historial = JSON.parse(localStorage.getItem("historialCotizaciones")) || []
        setCotizacionesGuardadas(historial)
    }, [])

    
    console.log(cotizacionesGuardadas)

  return (
    <div className={styles.historial}>
        <h2>Ver Historial</h2>
        <div className={styles.tableContainer}>
            <ul className={styles.tableHead}>
                <li>Fecha de cotización</li>
                <li>Hotel</li>
                <li>Cantidad de noches</li>
                <li>Cantidad de personas</li>
                <li>Cotización Aproximada</li>
            </ul>
            <div className={styles.tableBody}>
                {cotizacionesGuardadas.map((cotizacion, index) => (
                <ul key={index} className={styles.cotizUl}>
                    <li>{cotizacion.fechaCotiz}</li>
                    <li>{cotizacion.selectHotel.nombre}</li>
                    <li>{cotizacion.nDias + ' noches'}</li>
                    <li>{cotizacion.nPersonas + ' personas'}</li>
                    <li>{cotizacion.valorCotiz}</li>
                </ul>
                ))}
            </div>
    </div></div>
  )
}
