import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

function ServiceDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { service } = location.state || {};

  const navigate = useNavigate();

  if (!service) {
    return <Navigate to="/" />;
  }

  const handleBookingClick = () => {
    navigate('/contact'); // Assuming your contact page route is '/contact'
  };

  return (
    <div>
      <NavBar />
      <BannerSlider />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto text-center min-h-[60vh]">
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img
            className="w-100 h-80 object-cover"
            src={service.image}
            alt={service.name}
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col items-start justify-center text-left">
          <div className="font-bold text-2xl mb-4">
            {service.name}
          </div>
          <p className="text-gray-700 text-base mb-4">
            {service.longDescription}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            ${service.price}
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBookingClick}
          >
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDetailPage;
