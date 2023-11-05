import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
        <ul>
            <li><Link to="/">Cotizador</Link></li>
            <li><Link to="/historial">Historial</Link></li>
            <li><Link to="/about">Conócenos</Link></li>
        </ul>
    </nav>
  )
}
