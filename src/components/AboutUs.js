import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <img
            src="https://blog.unfranchise.com/wp-content/uploads/2013/06/shutterstock_125338145.jpg"
            alt="Corporate Event Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Corporate Event Management, we specialize in creating memorable and impactful events for our clients. Whether you are planning a conference, trade show, team-building workshop, product launch, corporate meeting, or award ceremony, we have the expertise and resources to make your event a success.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team of experienced event planners is dedicated to providing exceptional service and ensuring that every detail of your event is taken care of. From venue selection and catering to logistics and entertainment, we handle all aspects of event planning and management, so you can focus on what matters most - your business and your guests.
          </p>
          <p className="text-lg text-gray-700">
            Contact us today to start planning your next corporate event. We look forward to working with you to create an unforgettable experience for your attendees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
