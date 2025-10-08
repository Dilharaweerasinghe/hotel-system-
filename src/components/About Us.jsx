import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black pt-8">
          Our Hotel
        </h2>
        
        <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
          
          
          <div className="w-full md:w-1/2">
            
            <h3 className="text-3xl font-bold mb-4 text-black">
              Welcome to Luxury Haven, your perfect getaway for comfort, luxury, and unforgettable memories.
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-black">
              Nestled in the heart of Colombo, our hotel offers a unique blend of modern amenities and warm hospitality. Whether you're traveling for business, leisure, or a romantic escape, we strive to make your stay truly exceptional
            </p>
            <p className="mb-6 text-lg leading-relaxed text-black">
               With elegantly designed rooms, top-class service, and a serene atmosphere, we ensure that every guest feels at home. Our facilities include a fine-dining restaurant, rooftop bar, swimming pool, spa, fitness center, and more all crafted to meet your every need
            </p>
            
          
           
            <p className="mb-8 text-base text-black">
              At Luxuty Heaven, your satisfaction is our top priority. Our dedicated staff is available 24/7 to assist you and make your stay enjoyable and relaxing.

Thank you for choosing us. We look forward to welcoming you soon!
            </p>

            
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-800 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
             Contact Us
            </a>
          </div>
          
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img 
              src={"src/assets/Image_hotel2.jpg" } 
              alt="Hotel"
              className="rounded-xl shadow-2xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;