import React from 'react'
import styles from '../styles/Select.module.css';

export default function SelectHotel({ options, value, onChange, label, id }) {
  return (
    <div className={styles.selectContainer}>
        <label htmlFor={id}>{label}</label>
        <select 
          id={id} 
          value={value} 
          onChange={onChange}>{options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}>
              {option.label} - Tarifa: ${option.tarifaNoche} por noche, ${option.tarifaPersona} por persona
            </option>
          ))} 
        </select>
    </div>
  );
}
