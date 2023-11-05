import React from 'react'
import styles from '../styles/Historial.module.css'
import { useState } from 'react'

export default function Historial({ cotizacionesData }) {
    const [cotizacionesGuardadas, setCotizacionesGuardadas] = useState([])
    // const [historial, setHistorial] = useState(cotizacionesData);
    // function getCurrentDateTime() {
    //     const now = new Date();
    //     return now.toLocaleString();
    // }

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
            <div>

            </div>
    </div></div>
  )
}
