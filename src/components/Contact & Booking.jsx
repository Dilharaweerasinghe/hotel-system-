import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  const sendWhatsApp = () => {
    const phone = "+94567893234"; 
    const message = `I want to book a room.
Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}
Room Type: ${roomType}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-200 py-12 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 pt-16">Contact & Booking</h1>

    
      <div className="mb-10 text-center">
        <p> Phone: +94 773674578</p>
        <p> Email: luxuryhe=aven@gamil.com</p>
        <p> Address:Colombo , Sri Lanka</p>
      </div>

     
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-3 border rounded"  value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" className="w-full p-2 mb-3 border rounded"  value={checkIn} onChange={(e) => setCheckIn(e.target.value)}  />
        <input type="date" className="w-full p-2 mb-3 border rounded"   value={checkOut}  onChange={(e) => setCheckOut(e.target.value)}  />

        <select  className="w-full p-2 mb-3 border rounded"   value={roomType}  onChange={(e) => setRoomType(e.target.value)}  >
          <option value="">Select Room Type</option>
          <option value="Superior Room">Superior Room</option>
          <option value="Deluxe Ocean View Room">Deluxe Ocean Room</option>
          <option value="Luxury Presidential Suite">Luxury Room</option>
        </select>

        <button
          onClick={sendWhatsApp}
          className="w-full bg-cyan-700 text-white py-2 rounded hover:bg-cyan-600"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Contact;