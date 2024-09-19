// src/components/PlantForm.js
import React, { useState } from 'react';

function PlantForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [wateringSchedule, setWateringSchedule] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, wateringSchedule });
    setName('');
    setWateringSchedule('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Plant Name" 
        required 
      />
      <input 
        type="text" 
        value={wateringSchedule} 
        onChange={(e) => setWateringSchedule(e.target.value)} 
        placeholder="Watering Schedule" 
        required 
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default PlantForm;
