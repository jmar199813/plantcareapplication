// src/components/Plant.js
import React, { useState } from 'react';
import './Plant.css'; // Import CSS for styling

function Plant({ plant, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlant, setEditedPlant] = useState({ name: plant.name, wateringSchedule: plant.wateringSchedule });

  const handleEdit = () => {
    onEdit(plant.id, editedPlant);
    setIsEditing(false);
  };

  return (
    <div className="plant-entry"> {/* Styled box around each plant */}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedPlant.name}
            onChange={(e) => setEditedPlant({ ...editedPlant, name: e.target.value })}
          />
          <input
            type="text"
            value={editedPlant.wateringSchedule}
            onChange={(e) => setEditedPlant({ ...editedPlant, wateringSchedule: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{plant.name}</h3>
          <p>Watering schedule: {plant.wateringSchedule}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(plant.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Plant;
