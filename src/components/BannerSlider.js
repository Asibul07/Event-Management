import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const banners = [
    {
      title: 'Empowering Business Success',
      image: 'https://tmgmakeit.co.uk/wp-content/uploads/2021/05/corporate-award-ceremonies.jpg',
      description: "Explore our comprehensive suite of solutions designed to drive innovation, foster collaboration, and elevate your corporate performance. Unlock your business's full potential with our tailored strategies, cutting-edge technologies, and unparalleled expertise. Welcome to the future of corporate success."
    },
    {
      image: 'https://www.hospitalitynet.org/picture/xxl_153137308.jpg?t=1643795966',
    },
    {
      image: 'https://media.licdn.com/dms/image/C4D12AQH55P9WxwFlOw/article-cover_image-shrink_600_2000/0/1613693630108?e=1702512000&v=beta&t=uAhOlIz-oWqAMfiuC9W_dDJEkTgc694x-jV_dG5o6wY',
    },
  ];

  return (
    <div className="flex md:flex-row flex-col h-[100vh] md:h-[70vh] max-w-7xl mx-auto justify-between">
      <div className="w-full md:w-3/5 p-4 flex flex-col items-center md:items-start justify-center h-full">
        <h2 className="text-3xl font-bold mb-2">{banners[0].title}</h2>
        <p className="text-lg mb-4">{banners[0].description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-2/5 flex items-center justify-center px-5">
        <div className="w-1/3">
          <img style={{opacity: 0.7}} className="w-full md:h-80 h-44 object-cover" src={banners[0].image} alt={banners[0].title} />
        </div>
        <div className="w-1/3">
          <img className="w-full md:h-96 h-52 object-cover" src={banners[1].image} alt={banners[1].title} />
        </div>
        <div className="w-1/3">
          <img style={{ opacity: 0.7}} className="w-full md:h-80 h-44 object-cover" src={banners[2].image} alt={banners[2].title} />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
