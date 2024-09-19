// src/App.js
import React, { useState } from 'react';
import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';
import './App.css'; // Import your global styles

function App() {
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    setPlants([...plants, { ...plant, id: Date.now() }]);
  };

  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  const editPlant = (id, updatedPlant) => {
    setPlants(plants.map((plant) => (plant.id === id ? { ...plant, ...updatedPlant } : plant)));
  };

  return (
    <div className="container"> {/* Main container */}
      <div className="form-container"> {/* Form container within the main container */}
        <h1>Plant Care Tracker</h1>
        <PlantForm onSubmit={addPlant} />
      </div>
      <div className="plant-list-container"> {/* Container for the plant list */}
        <PlantList plants={plants} onDelete={deletePlant} onEdit={editPlant} />
      </div>
    </div>
  );
}

export default App;
