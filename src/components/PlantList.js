// src/components/PlantList.js
import React from 'react';
import Plant from './Plant';

function PlantList({ plants, onDelete, onEdit, onViewDetails }) {
  return (
    <div>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} onDelete={onDelete} onEdit={onEdit} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}

export default PlantList;
