import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Event Management</h2>
            <p>&copy; {new Date().getFullYear()} Event Management. All rights reserved.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
