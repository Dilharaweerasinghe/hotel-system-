import React from "react";


const roomCategories = [
    {
        id: 1,
        name: "Superior Room",
        price: "LKR 18,000",
        image: "src/assets/hotel_roomImage.jpg", 
        description:"Designed for comfort and convenience, our Superior Room offers a delightful stay with modern amenities. Features large windows with city or garden views.",
    },
    {
        id: 2,
        name: "Deluxe Ocean View Room",
        price: "LKR 28,000",
        image: "src/assets/hotel_roomImage2.jpg", 
        description: "The Deluxe Room provides an elevated level of relaxation. Enjoy stunning sea views from your private balcony. Perfect for couples or small families.",
    },
    {
        id: 3,
        name: "Luxury Presidential Suite",
        price: "LKR 65,000",
        image: "src/assets/hotel_rommImage3.jpeg", 
        description: "Our Presidential Suite is the epitome of luxury and opulence. It includes two bedrooms, a separate living area, and dedicated Butler service.",
    }
];

const RoomsAndSuitesSimple = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-4xl font-extrabold text-center text-black mb-12 pt-10">
                     Our Rooms and Suites
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomCategories.map((room) => (
                       
                        <div 
                            key={room.id} 
                            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-[1.03]">
                        
                           
                            <img 
                                src={room.image} 
                                alt={room.name} 
                                className="w-full h-64 object-cover"/>
                            

                            <div className="p-6">
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {room.name}
                                </h3>
                                
                                
                                <p className="text-xl font-extrabold text-orange-600 mb-4">
                                    {room.price} <span className="text-sm font-normal text-gray-500">  per night</span>
                                </p>
                                
                                
                                <p className="text-gray-700 mb-6 line-clamp-4"> 
                                    {room.description}
                                </p>

                                
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomsAndSuitesSimple;
                
                