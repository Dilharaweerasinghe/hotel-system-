import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';



const PhoneIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.226 5.485a1 1 0 01-.428 1.123l-1.544.772a11.042 11.042 0 005.516 5.516l.772-1.544a1 1 0 011.123-.428l5.485 1.226a1 1 0 01.836.986V17a1 1 0 01-1 1h-11A11.042 11.042 0 012 7V3z" /></svg>
);
const MailIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
);
const LocationIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 1110.9 0L10 9.05l-5.45-5zM10 10a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
);


const HotelFooter = () => {
    
   
    const contactInfo = {
        phone: '+94 773674578',
        email: 'luxuryhaven@gmail.com',
        address: 'Colombo, Sri Lanka'
    };

    const quickLinks = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Gallery', url: '/gallery' },
        { name: 'Contact', url: '/contact' },
    ];

    
    return (
        <footer className="bg-cyan-800 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 border-b border-b-blackpb-8">
                    
                    
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Luxury Haven</h4>
                        <p className="text-sm">
                            Enjoy luxury and comfort at Luxury Haven. We provide cosy rooms, excellent service and unforgettable experiences.
                        </p>
                    </div>

                    
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.url} 
                                        className="text-sm hover:text-white transition duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                   
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <PhoneIcon />
                                <a href={'tel:{contactInfo.phone.replace}'}>{contactInfo.phone}</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon />
                                <a href={'mailto:{contactInfo.email}'}>{contactInfo.email}</a>
                            </li>
                            <li className="flex items-center">
                                <LocationIcon />
                                <span>{contactInfo.address}</span>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-800 hover:bg-cyan-600 transition duration-200" aria-label="Facebook">
                                <AiOutlineFacebook className="text-blue-500 text-lg font-bold"/>
                            </a>
                            
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-800 hover:bg-cyan-600 transition duration-200" aria-label="Twitter">
                                <AiOutlineTwitter className="text-white text-lg font-bold"/>
                            </a>
                            
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-800 hover:bg-cyan-600 transition duration-200" aria-label="YouTube">
                                <AiOutlineInstagram className="text-white text-lg font-bold"/>
                            </a>
                        </div>
                    </div>

                </div>
                
                {}
                <div className="pt-4 text-center text-sm text-amber-50">
                    &copy; 2025 Luxury Haven Hotel. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default HotelFooter;