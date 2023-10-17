import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-between mx-auto">
      <div>
        <img
          className="w-full h-60 items-center mx-auto"
          src={service.image}
          alt={service.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {service.name}
          </div>
          <p className="text-gray-700 text-base">
            {service.description}
          </p>
          <p className="font-bold mt-2">
            ${service.price}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/service/${service.id}`}
          state={{ service }}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
