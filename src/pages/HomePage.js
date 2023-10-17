import React from 'react';
import BannerSlider from '../components/BannerSlider';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';


function HomePage() {
  return (
    <div>
     <NavBar />
      <BannerSlider />
      <AboutUs />
      <ServicesSection />
      <WhyChooseUs />
      {/* Add any other sections you need here */}
      <Footer />
    </div>
  );
}

export default HomePage;
