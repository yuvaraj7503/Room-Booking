
import React from 'react';
import './Rooms.css'; 

const roomsData = [
  {
    id: 1,
    title: 'Deluxe Room',
    image: 'src/assets/room1.jpg',
    rating: 5,
  },
  {
    id: 2,
    title: 'Luxury Bed Room',
    image: 'src/assets/room5.jpg',
    rating: 5,
  },
  {
    id: 3,
    title: 'Couple Room',
    image: ' src/assets/room4.jpg',
    rating: 5,
  },
  {
    id: 4,
    title: 'Double Bed Room',
    image: 'src/assets/room3.jpg',
    rating: 5,
  },
  
];

const RoomCard = ({ room }) => (
  <div className="room-card">
    <img src={room.image} alt={room.title} className="room-image" />
    <h3>{room.title}</h3>
    <div className="rating">
      {'⭐'.repeat(room.rating)}
    </div>
  </div>
);

const Rooms = () => (
  <div className="rooms-section">
    <h3>Explore Amazing Rooms</h3>
    <div className="rooms-grid">
      {roomsData.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  </div>
);


export default Rooms;
