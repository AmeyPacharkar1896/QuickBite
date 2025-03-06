import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Checkout = () => {
  // In a complete app, you’d use state management (Context/Redux) for cart data.
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>Your cart is empty.</p>
          <p className="mt-4">Please add items from a restaurant to proceed to checkout.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
