// src/App.js
import React, { useState } from 'react';
import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';
import PlantDetails from './components/PlantDetails'; // Import new component
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null); // State for selected plant

  const addPlant = (plant) => {
    setPlants([...plants, { ...plant, id: Date.now() }]);
  };

  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  const editPlant = (id, updatedPlant) => {
    setPlants(plants.map((plant) => (plant.id === id ? { ...plant, ...updatedPlant } : plant)));
  };

  const viewDetails = (plant) => {
    setSelectedPlant(plant);
  };

  const goBack = () => {
    setSelectedPlant(null); // Reset selected plant
  };

  return (
    <div className="container">
      {selectedPlant ? (
        <div className="form-container">
          <PlantDetails plant={selectedPlant} onBack={goBack} onEdit={editPlant} />
        </div>
      ) : (
        <>
          <div className="form-container">
            <h1>Plant Care Tracker</h1>
            <PlantForm onSubmit={addPlant} />
          </div>
          <div className="plant-list-container">
            <PlantList plants={plants} onDelete={deletePlant} onEdit={editPlant} onViewDetails={viewDetails} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

