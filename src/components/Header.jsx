import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
        <nav className={styles.navBar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div>
            <h1>Bariloche Trip Planner</h1>
        </div>
    </header>
  )
}
