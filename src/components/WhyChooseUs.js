import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              title: "Expertise",
              description:
                "Our team of experienced event planners has the expertise and knowledge to plan and execute corporate events of all sizes and types.",
            },
            {
              title: "Attention to Detail",
              description:
                "We pay attention to every detail to ensure that your event runs smoothly and meets your expectations.",
            },
            {
              title: "Customized Solutions",
              description:
                "We work closely with you to understand your needs and goals, and we create customized solutions that fit your requirements.",
            },
          ].map((item, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
