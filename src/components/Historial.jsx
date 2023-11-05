import React from 'react'
import Header from './Header'

export default function Historial() {
  return (
    <div>
        <Header />
        <h1>Ver Historial</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Fecha de cotización</th>
                        <th>Hotel</th>
                        <th>Cantidad de noches</th>
                        <th>Cantidad de personas</th>
                        <th>Cotización Aproximada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aquí</td>
                        <td>verás</td>
                        <td>las</td>
                        <td>cotizaciones</td>
                        <td>realizadas</td>
                    </tr>
                </tbody>
            </table>
        <div>
            <a  href="/"><button>VOLVER</button></a>
        </div>
    </div></div>
  )
}
