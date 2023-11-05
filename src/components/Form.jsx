import React from 'react';
import { useState, useEffect } from 'react';
import SelectHotel from './SelectHotel';
import styles from '../styles/Form.module.css';
import InputNumber from '../components/InputNumber'
import Cotizador from '../components/Cotizador';

export default function Form({ dataHoteles }) {
    const [selectedHotel, setSelectedHotel] = useState('');
    const [days, setDays] = useState('');
    const [persons, setPersons] = useState('');
    const dataGuardada = dataHoteles;

    console.log(dataGuardada);
    console.log("Todo inicializado con éxito");


  return (
    <div className={styles.formContainer}>
      <h2>Calculá tu precio</h2>
      <h3>Completá con los datos solicitados</h3>

      <form action="https://formsubmit.co/rodriguezabbril9@gmail.com" method="POST" onSubmit={e => {
        e.preventDefault();
        }}>
        <SelectHotel 
          label="Selecciona el hotel"
          options={[
            { value: '', label: '...', selected: true, disabled: true }, 
            ...dataGuardada.map((hotel) => ({
            
            value: hotel.id,
            label: hotel.nombre,
            tarifaNoche: hotel.tarifaNoche,
            tarifaPersona: hotel.tarifaPersona,
            }))
          ]}
          value={selectedHotel}
          onChange={(e) => setSelectedHotel(e.target.value)} 
          />
          
          <InputNumber 
            id='dias'
            label='Selecciona la cantidad de noches'
            value={days}
            valueMax={30}
            valueMin={1}
            onChange={(e) => setDays(e.target.value)}
          />

          <InputNumber 
            id='personas'
            label='Selecciona la cantidad de personas'
            value={persons}
            valueMax={10}
            valueMin={1}
            onChange={(e) => setPersons(e.target.value)}
          />
          
          <Cotizador dataHoteles={dataGuardada} dias={days} personas={persons} hotel={selectedHotel} />
      </form>
    </div>
  )
}
