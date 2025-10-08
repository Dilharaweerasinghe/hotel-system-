import React from 'react';


const galleryImages = [
    { id: 1, src: 'src/assets/ImagePool.jpg', alt: 'Luxury Swimming Pool'},
    { id: 2, src: 'src/assets/hotel_roomImage.jpg', alt: 'Room Interior' },
    { id: 3, src: 'src/assets/spaImage.jpg', alt: 'Relaxing Spa Area'},
    { id: 4, src: 'src/assets/resturant.jpg', alt: 'Fine Dining Restaurant' },
    { id: 5, src: 'src/assets/livingAreaInside.jpg', alt: 'Inside View' },
    { id: 6, src: 'src/assets/gymPhoto.jpg', alt: 'Modern Fitness Center',},
    { id: 7, src: 'src/assets/lobbyImage.jpeg', alt: 'Elegant Lobby Area', },
    { id: 8, src: 'src/assets/livingAreaOutside.jpg', alt: 'Outside View',  },
];

const GalleryPage = () => {
    return (
        <section className="pt-16 pb-20 bg-gray-200 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <header className="text-center mb-16 ">
                    <h1 className="text-4xl font-extrabold text-black mb-4 pt-8">
                        Our Photo Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A visual journey through the luxury, elegance, and beauty of our hotel.
                    </p>
                </header>
                
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((image) => (
                        <div 
                            key={image.id} 
                            className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer transform transition duration-500 hover:shadow-2xl hover:scale-[1.02]"
                        >
                           
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-72 object-cover transition duration-500 group-hover:opacity-80"
                            />
                            
                            
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end opacity-0 group-hover:opacity-100 transition duration-300">
                                <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                                    <p className="text-white text-lg font-semibold">{image.alt}</p>
                                    
                                
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;