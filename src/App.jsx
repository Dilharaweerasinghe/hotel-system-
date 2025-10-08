import Navbar from './components/Navbar';
import Home from './components/Home';
import Image_hotel from './assets/Image_hotel.jpg';
import AboutUs from './components/About Us';
import RoomsAndSuites from './components/RoomsAndSuites';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ServicesPage from './components/Services';
import GalleryPage from './components/Gallery';
import HotelFooter from './components/footer';
import Contact from './components/Contact & Booking';
import SignUp_login from './components/SignUp';

function App() {
  return (
    <div>
      <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/rooms" element={<RoomsAndSuites/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<SignUp_login/>}/>
        
      </Routes>
      </Router>
      <Home/>
      <AboutUs/>
      <RoomsAndSuites/>
      <ServicesPage/>
      <GalleryPage/>
      <HotelFooter/>
     
      
      
    </div>)}

export default App;