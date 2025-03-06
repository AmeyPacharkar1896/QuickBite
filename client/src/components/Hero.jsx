import React from 'react';

const Hero = () => {
  return (
    <section 
      className="bg-cover bg-center h-64" 
      style={{ backgroundImage: "url('https://via.placeholder.com/1500x400')" }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
        <h1 className="text-white text-4xl font-bold mb-4">
          Delicious Food, Delivered Fast
        </h1>
        <p className="text-white text-lg mb-6">
          Discover the best local restaurants and cuisines.
        </p>
        <input 
          type="text" 
          placeholder="Search restaurants or cuisines" 
          className="px-4 py-2 rounded-md focus:outline-none w-80"
        />
      </div>
    </section>
  );
};

export default Hero;
