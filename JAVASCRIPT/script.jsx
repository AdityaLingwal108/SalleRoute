// Building data configuration
const buildingData = {
    hall: {
      name: "Hall Building",
      floors: Array.from({length: 12}, (_, i) => i + 1),
      // For demonstration, generating rooms for each floor
      getRooms: (floor) => {
        const rooms = [];
        // Create 50 rooms per floor with proper numbering
        for (let i = 1; i <= 100; i++) {
          const roomNumber = parseInt(`${floor}${i.toString().padStart(2, '0')}`);
          rooms.push({
            id: roomNumber,
            name: `Room ${roomNumber}`
          });
        }
        return rooms;
      }
    },
    library: {
      name: "Library Building",
      floors: Array.from({length: 9}, (_, i) => i + 1),
      getRooms: (floor) => {
        const rooms = [];
        // Create 30 rooms per floor with proper numbering for library
        for (let i = 1; i <= 30; i++) {
          const roomNumber = parseInt(`${floor}${i.toString().padStart(2, '0')}`);
          rooms.push({
            id: roomNumber,
            name: `Room ${roomNumber}`
          });
        }
        return rooms;
      }
    }
  };
  
  // DOM Elements
  const buildingSelect = document.getElementById('building-select');
  const floorSelect = document.getElementById('floor-select');
  const roomSelect = document.getElementById('room-select');
  const searchBtn = document.getElementById('search-btn');
  const mapContainer = document.getElementById('map-container');
  
  // Event Listeners
  buildingSelect.addEventListener('change', handleBuildingChange);
  floorSelect.addEventListener('change', handleFloorChange);
  roomSelect.addEventListener('change', handleRoomChange);
  searchBtn.addEventListener('click', handleSearch);
  
  // Event Handlers
  function handleBuildingChange() {
    const selectedBuilding = buildingSelect.value;
    
    // Reset floor and room selects
    floorSelect.innerHTML = '<option value="" disabled selected>Select a floor</option>';
    roomSelect.innerHTML = '<option value="" disabled selected>Select a room</option>';
    roomSelect.disabled = true;
    searchBtn.disabled = true;
    
    if (selectedBuilding) {
      // Enable floor select
      floorSelect.disabled = false;
      
      // Populate floor options
      const building = buildingData[selectedBuilding];
      building.floors.forEach(floor => {
        const option = document.createElement('option');
        option.value = floor;
        option.textContent = `Floor ${floor}`;
        floorSelect.appendChild(option);
      });
    } else {
      floorSelect.disabled = true;
    }
  }
  
  function handleFloorChange() {
    const selectedBuilding = buildingSelect.value;
    const selectedFloor = floorSelect.value;
    
    // Reset room select
    roomSelect.innerHTML = '<option value="" disabled selected>Select a room</option>';
    searchBtn.disabled = true;
    
    if (selectedFloor) {
      // Enable room select
      roomSelect.disabled = false;
      
      // Populate room options
      const rooms = buildingData[selectedBuilding].getRooms(selectedFloor);
      rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        option.textContent = room.name;
        roomSelect.appendChild(option);
      });
    } else {
      roomSelect.disabled = true;
    }
  }
  
  function handleRoomChange() {
    // Enable/disable search button based on room selection
    searchBtn.disabled = !roomSelect.value;
  }
  
  function handleSearch() {
    const building = buildingSelect.value;
    const floor = floorSelect.value;
    const room = roomSelect.value;
    
    // For demonstration, show selection in the map container
    mapContainer.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <h2>Location Selected:</h2>
        <p>Building: ${buildingData[building].name}</p>
        <p>Floor: ${floor}</p>
        <p>Room: ${room}</p>
        <p style="margin-top: 1rem; color: #666;">Map visualization would be loaded here</p>
      </div>
    `;
    
    // In a real application, this is where you would load your map
    // and perhaps highlight the selected room
    
    console.log(`Navigating to: Building ${building}, Floor ${floor}, Room ${room}`);
  }