import React from 'react'
import styles from '../styles/SaveBtn.module.css'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';

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

    const handleSave = (e) => {
        e.preventDefault();
        if (cotizacionActual !== 0) {
            const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones')) || [];
            cotizacionesGuardadas.push(cotizacionActual);
            localStorage.setItem('cotizaciones', JSON.stringify(cotizacionesGuardadas));
            alerta(' ', 'Cotización guardada con éxito', 'success');
        } else {
            alerta(' ', 'Debes realizar una cotización para guardarla', 'warning');
        }
    }
    return (
        <div>
            <button type='submit' onClick={handleSave} className={styles.btnSave}>Guardar</button>
        </div>
  )
}
