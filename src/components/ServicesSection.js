import React from 'react';
import ServiceCard from './ServiceCard';

function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Conference Planning',
      image: 'https://akcongress.com/blog/wp-content/uploads/2022/05/academic_conference_shutterstock_481869205.jpg',
      price: '400',
      description: 'Plan and organize your next conference or seminar with our full-service event planning team. We offer a range of services to make your corporate or social event a success.',
      longDescription: "Plan and organize your next conference or seminar with our full-service event planning team. We offer a range of services to make your corporate or social event a success. With our expertise, we will ensure that your conference or seminar runs smoothly, from start to finish. Whether you need help with venue selection, catering, transportation, or any other aspect of your event, we have you covered. Let us take care of the details so you can focus on the content and networking opportunities of your event. We pride ourselves on our attention to detail, creativity, and ability to execute events seamlessly. Contact us today to start planning your next conference or seminar.",
    },
    {
      id: 2,
      name: 'Trade Shows and Expos',
      image: 'https://cdn-dgeck.nitrocdn.com/TUSdkaacjaYPPWWDqAuNOXKTzlClbxXd/assets/images/optimized/rev-1d14adb/wp-content/uploads/2023/02/Motorcoach-expo.jpg',
      price: '500',
      description: "Showcase your business at a trade show or expo with our creative and unique venue decoration services. We'll help you make a lasting impression on your audience",
      longDescription: "Showcase your business at a trade show or expo with our creative and unique venue decoration services. We'll help you make a lasting impression on your audience. Our team of experienced designers and decorators will work with you to create a booth that stands out and attracts attention. We'll also provide logistical support to ensure that your participation in the trade show or expo is smooth and successful. From setup to teardown, we'll handle all the details so you can focus on promoting your business and making connections with potential clients and customers. Let us help you make a lasting impression at your next trade show or expo.",
    },
    {
      id: 3,
      name: 'Team Building Workshops',
      image: 'https://blog.unfranchise.com/wp-content/uploads/2013/06/shutterstock_125338145.jpg',
      price: '800',
      description: 'Strengthen your team with our team building workshops. Our workshops are designed to improve communication, collaboration, and problem-solving skills.',
      longDescription: "Strengthen your team with our team building workshops. Our workshops are designed to improve communication, collaboration, and problem-solving skills. Our experienced facilitators will lead your team through a series of engaging and interactive exercises that will challenge them to think creatively and work together. We'll help your team build trust, develop effective communication skills, and enhance their ability to work collaboratively. Whether you're looking to improve team morale, resolve conflicts, or simply have fun together, our team building workshops can be customized to meet your specific needs and goals. Let us help you strengthen your team and improve their performance.",
    },
    {
      id: 4,
      name: 'Product Launches',
      image: 'https://media.licdn.com/dms/image/C4D12AQH55P9WxwFlOw/article-cover_image-shrink_600_2000/0/1613693630108?e=1702512000&v=beta&t=uAhOlIz-oWqAMfiuC9W_dDJEkTgc694x-jV_dG5o6wY',
      price: '600',
      description: 'Launch your product with a bang! Our professional event planning services will help you plan and execute a successful product launch event',
      longDescription: "Launch your product with a bang! Our professional event planning services will help you plan and execute a successful product launch event. We will work with you to develop a creative and effective launch strategy that generates excitement and interest in your product. From choosing the right venue to designing eye-catching promotional materials, we'll take care of all the details to ensure your product launch is a success. We can also help you plan and execute pre-launch and post-launch marketing campaigns to maximize the impact of your launch. Let us help you introduce your product to the world in style.",
    },
    {
      id: 5,
      name: 'Corporate Meetings',
      image: 'https://www.hospitalitynet.org/picture/xxl_153137308.jpg?t=1643795966',
      price: '700',
      description: 'Make your corporate meetings more engaging and productive with our event planning services. We offer a range of services to help you organize a successful meeting.',
      longDescription: "Make your corporate meetings more engaging and productive with our event planning services. We offer a range of services to help you organize a successful meeting. From venue selection and setup to catering and audio-visual support, we'll handle all the logistics so you can focus on the content of your meeting. We can also help you plan and facilitate team-building activities, workshops, and breakout sessions to enhance the effectiveness of your meeting. Whether you're planning a board meeting, sales conference, or training session, we have the expertise and resources to make your corporate meeting a success.",
    },
    {
      id: 6,
      name: 'Award Ceremonies',
      image: 'https://tmgmakeit.co.uk/wp-content/uploads/2021/05/corporate-award-ceremonies.jpg',
      price: '1200',
      description: "Celebrate achievements and milestones with our award ceremony planning services. We'll help you create a memorable event to honor your team or organization's accomplishments.",
      longDescription: "Celebrate achievements and milestones with our award ceremony planning services. We'll help you create a memorable event to honor your team or organization's accomplishments. From selecting a venue and designing invitations to coordinating entertainment and managing guest lists, we'll take care of all the details to make your award ceremony a success. Our experienced event planners will work with you to create a theme, design a program, and coordinate all aspects of the event to ensure that it reflects your organization's values and goals. Let us help you celebrate your achievements in style.",
    },
];


  return (
    <section className="py-12 bg-white md:w-auto max-w-7xl mx-auto justify-between w-80 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
