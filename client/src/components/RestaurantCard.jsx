import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={restaurant.image || 'https://via.placeholder.com/300x200'} 
        alt={restaurant.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{restaurant.name}</h3>
        <p className="text-gray-500 mb-4">{restaurant.address}</p>
        <Link 
          to={`/restaurant/${restaurant._id}`} 
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
