// Building data configuration
const buildingData = {
    hall: {
      name: "Hall Building",
      floors: Array.from({length: 12}, (_, i) => i + 1),
      // Generating rooms for each floor
      getRooms: (floor) => {
        const rooms = [];
        // Create 100 rooms per floor with proper numbering
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
      floors: Array.from({length: 12}, (_, i) => i + 1),
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
  
  export default buildingData;