import React from 'react';


const servicesList= [
    {
        name: "Swimming Pool",
        description: "Relax and unwind in our expansive outdoor pool area. We also have a separate, shallow section perfect for children.",
        icon: (
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4m12 0a4 4 0 01-4 4m0-8a4 4 0 00-4 4"></path></svg>
        )
    },
    {
        name: "Modern Fitness Center (Gym)",
        description: "A fully equipped gymnasium featuring the latest cardio machines, free weights, and dedicated yoga space.",
        icon: (
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        )
    },
    {
        name: "Fine Dining Restaurant",
        description: "Indulge in a culinary journey at our signature restaurant, offering exquisite local and international dishes with personalized service.",
        icon: (
            <svg className="w-12 h-12 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v6m0 0v2m0-2h2m0 0h2m-4 0v2m0 0v-2m4 0v2m0 0v-2m4 0v2m0 0v-2m-4 0h2m0 0h2m-4 0v-2m0 0v-2"></path></svg>
        )
    },
    {
        name: "High-Speed Wi-Fi",
        description: "Complimentary high-speed internet access is available throughout the hotel, keeping you connected during your stay.",
        icon: (
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M9.899 12.121a3 3 0 100-4.242 3 3 0 000 4.242z"></path></svg>
        )
    },
    {
        name: "Secure Parking",
        description: "We offer secure, on-site parking facilities for all guests. Valet service is available upon request.",
        icon: (
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        )
    },
    {
        name: "Luxury Spa",
        description: "A sanctuary for relaxation. Our spa offers therapeutic massages and holistic treatments to ensure total tranquility.",
        icon: (
             <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.05 13.05l-4-4m4 4l-4 4m4-4H4m16 0h-4"></path></svg>
        )
    }
];

const ServicesPage = () => {
    return (
        <section className="pt-16 pb-20 bg-gray-200 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-black mb-4 pt-10">
                        Hotel Services & Features
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are dedicated to providing world-class amenities and exceptional services to enhance every aspect of your stay.
                    </p>
                </header>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesList.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 text-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            <div className="flex justify-center mb-5">
                                
                                {service.icon}
                            </div>
                            
                           
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {service.name}
                            </h3>
                            
                           
                            <p className="text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;