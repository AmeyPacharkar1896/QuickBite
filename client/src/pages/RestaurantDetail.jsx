import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { fetchRestaurantMenu } from '../services/restaurantService.js';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Debug: log the restaurant id
    console.log("Fetching menu for restaurant id:", id);

    fetchRestaurantMenu(id)
      .then(data => {
        // Debug: log the returned data
        console.log("Fetched menu items:", data);
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (item) => {
    console.log("Add to Cart clicked for:", item);
    // Here you would update your cart state (Context/Redux/etc.)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        {loading ? (
          <p className="text-center">Loading menu...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : menuItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map(item => (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="mt-2 font-bold">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No menu items found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
