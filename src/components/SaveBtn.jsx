import React from 'react'
import styles from '../styles/SaveBtn.module.css'
import Swal from 'sweetalert2'

export default function SaveBtn({ cotizacionActual, numDias, hotel, numPersonas }) {
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
        const datosCotiz = {
            fechaCotiz: new Date().toLocaleString(),
            selectHotel: hotel,
            nDias: numDias,
            nPersonas: numPersonas,
            valorCotiz: cotizacionActual 
        }

        const cotizacionesGuardadas = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
        cotizacionesGuardadas.push(datosCotiz);
        localStorage.setItem('historialCotizaciones', JSON.stringify(cotizacionesGuardadas));
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
