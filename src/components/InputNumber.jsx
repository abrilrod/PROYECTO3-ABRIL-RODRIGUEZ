import React from 'react'
import styles from '../styles/InputNumber.module.css'

export default function InputNumber({ valueMin, valueMax, onChange, label, id, value }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input type='number' min={valueMin} max={valueMax} onChange={onChange} id={id} value={value}></input>
    </div>
  )
}
