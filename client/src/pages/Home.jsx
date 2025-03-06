import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';
import Footer from '../components/Footer.jsx';
import { fetchRestaurants } from '../services/restaurantService.js';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants()
      .then(data => setRestaurants(data))
      .catch(err => console.error('Error fetching restaurants:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Restaurants Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.length > 0 ? (
            restaurants.map(restaurant => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))
          ) : (
            <p>Loading restaurants...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
