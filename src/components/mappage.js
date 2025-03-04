import React, { useState } from 'react';
import buildingData from '../data/Building';

function MapPage() {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [mapDisplay, setMapDisplay] = useState(null);

  // Handle building selection
  const handleBuildingChange = (e) => {
    const building = e.target.value;
    setSelectedBuilding(building);
    setSelectedFloor('');
    setSelectedRoom('');
    setMapDisplay(null);
  };

  // Handle floor selection
  const handleFloorChange = (e) => {
    setSelectedFloor(e.target.value);
    setSelectedRoom('');
    setMapDisplay(null);
  };

  // Handle room selection
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    setMapDisplay({
      building: buildingData[selectedBuilding].name,
      floor: selectedFloor,
      room: selectedRoom
    });
    
    console.log(`Navigating to: Building ${selectedBuilding}, Floor ${selectedFloor}, Room ${selectedRoom}`);
  };

  return (
    <>
      <div className="search-container">
        <h1 className="title">Hi, where do you want to go today?</h1>
        
        <div className="search-controls">
          <div className="select-wrapper">
            <select 
              value={selectedBuilding} 
              onChange={handleBuildingChange} 
              className="form-select"
            >
              <option value="" disabled>Select a building</option>
              <option value="hall">Hall</option>
              <option value="library">Library</option>
            </select>
          </div>
          
          <div className="select-wrapper">
            <select 
              value={selectedFloor} 
              onChange={handleFloorChange} 
              disabled={!selectedBuilding}
              className="form-select"
            >
              <option value="" disabled>Select a floor</option>
              {selectedBuilding && buildingData[selectedBuilding].floors.map(floor => (
                <option key={floor} value={floor}>
                  Floor {floor}
                </option>
              ))}
            </select>
          </div>
          
          <div className="select-wrapper">
            <select 
              value={selectedRoom} 
              onChange={handleRoomChange} 
              disabled={!selectedFloor}
              className="form-select"
            >
              <option value="" disabled>Select a room</option>
              {selectedBuilding && selectedFloor && 
                buildingData[selectedBuilding].getRooms(selectedFloor).map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))
              }
            </select>
          </div>
          
          <button 
            onClick={handleSearch} 
            disabled={!selectedRoom}
            className="btn btn-search"
          >
            Search
          </button>
        </div>
      </div>
      
      <div className="map-container">
        {mapDisplay ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Location Selected:</h2>
            <p>Building: {mapDisplay.building}</p>
            <p>Floor: {mapDisplay.floor}</p>
            <p>Room: {mapDisplay.room}</p>
            <p style={{ marginTop: '1rem', color: '#666' }}>Map visualization would be loaded here</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default MapPage;