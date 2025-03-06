import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">QuickBite</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="text-gray-700 hover:text-blue-500">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
