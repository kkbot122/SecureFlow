import React from 'react';
import { Wallet, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black py-4 border-b border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Wallet className="text-red-500 mr-2" size={24} />
            <span className="text-xl font-bold">SecureFlow</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white">Trading</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full">
              Get Started
            </button>
            <button className="md:hidden text-gray-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;