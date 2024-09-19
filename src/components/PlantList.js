// src/components/PlantList.js
import React from 'react';
import Plant from './Plant';

function PlantList({ plants, onDelete, onEdit }) {
  return (
    <div>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default PlantList;
