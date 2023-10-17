import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


function NotFoundPage() {
  return (
    <div>
    <NavBar />
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
    <Footer /></div>
  );
}

export default NotFoundPage;
