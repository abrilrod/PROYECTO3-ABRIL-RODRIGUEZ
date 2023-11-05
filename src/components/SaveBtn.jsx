import React from 'react'
import styles from '../styles/SaveBtn.module.css'
import Swal from 'sweetalert2'

export default function SaveBtn({ cotizacionActual }) {
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

    const saveHistorial = () => {
        const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones')) || [];
        cotizacionesGuardadas.push(cotizacionActual);
        localStorage.setItem('cotizaciones', JSON.stringify(cotizacionesGuardadas));
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (cotizacionActual !== 0) {
            saveHistorial();
            alerta(' ', 'Cotización guardada con éxito', 'success');
        } else {
            alerta(' ', 'Debes realizar una cotización para guardarla', 'warning');
        }
    }
    return (
        <button type='submit' onClick={handleSave} className={styles.btnSave}>Guardar</button>
  )
}
