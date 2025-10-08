import React from 'react';

const Home = () => {
  return (
   
    <div 
      id="home" 
      className='relative h-screen pt-20 flex items-center justify-center overflow-hidden'
    >
     
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('src/assets/image_hotel.jpg')" 
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      
      <div className='relative z-10 text-center text-white p-6 max-w-4xl mx-auto'>
        
        
        <p className='text-lg sm:text-xl font-light tracking-widest uppercase mb-4'>
          Escape to Tranquility
        </p>

        <h1 className='text-5xl sm:text-7xl font-serif font-bold leading-tight drop-shadow-lg'>
          Luxury Stays with Breathtaking Views
        </h1>

        
        
      </div>
    </div>
  );
};

export default Home;