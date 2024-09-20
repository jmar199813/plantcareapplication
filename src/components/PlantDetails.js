// src/components/PlantDetails.js
import React, { useState } from 'react';

function PlantDetails({ plant, onBack, onEdit }) {
  const [details, setDetails] = useState({ ...plant });

  const handleEdit = () => {
    onEdit(plant.id, details);
    onBack(); // Go back after editing
  };

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Watering schedule: {details.wateringSchedule}</p>
      <textarea
        value={details.description || ''}
        onChange={(e) => setDetails({ ...details, description: e.target.value })}
        placeholder="Add more details..."
        style={{ width: '100%', height: '100px' }} // Make it full width
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default PlantDetails;
