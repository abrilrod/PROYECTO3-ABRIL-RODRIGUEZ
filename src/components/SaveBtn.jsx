import React from 'react'
import styles from '../styles/SaveBtn.module.css'
import Swal from 'sweetalert2'

export default function SaveBtn({cotizacionActual}) {
    const cotizacion = cotizacionActual;
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

    const handleSave = (e) => {
        e.prevenDefault
        if (cotizacion !== 0) {
            localStorage.setItem('cotizacion', JSON.parse(cotizacion));
            alerta(' ', 'Cotizacion guardada con éxito', 'success')
        } else {
            alerta(' ', 'Debes realizar una cotizacion para guardarla', 'warning') 
        }
     } 
    return (
        <div>
            <button type='submit' onClick={handleSave} className={styles.btnSave}>Guardar</button>
        </div>
  )
}
