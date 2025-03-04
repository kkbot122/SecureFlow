import React from 'react';
import { Wallet, TrendingUp, Shield, ArrowRight, Download, ExternalLink } from 'lucide-react';
import CryptoTable from './components/CryptoTable';
import VisionMission from './components/VisionMission';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-3xl md:text-4xl font-light mb-2">SecureFlow</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Your new favorite <br />
              <span className="text-red-500">Secure transactions</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Store, send, receive, and trade cryptocurrencies with advanced 
              fraud detection powered by machine learning and secured by blockchain technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full flex items-center">
                <Download size={18} className="mr-2" /> Download on the App Store
              </button>
              <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full flex items-center transition-colors">
                <ExternalLink size={18} className="mr-2" /> Follow Us
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <Wallet size={64} className="text-red-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold">Secure Wallet</div>
                  <div className="text-gray-400 mt-2">Powered by blockchain technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fraud Detection</h3>
              <p className="text-gray-300">
                Our advanced machine learning algorithms analyze transaction patterns to identify and prevent fraudulent activities.
              </p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Wallet size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Wallet</h3>
              <p className="text-gray-300">
                Store your cryptocurrencies safely with our blockchain-powered wallet featuring multi-layer security.
              </p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Trading</h3>
              <p className="text-gray-300">
                Execute trades with confidence using our AI-powered market analysis and smart contract integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading View Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Featured Collections</h2>
          <p className="text-gray-400 mb-8">Track the most popular cryptocurrencies in real-time</p>
          <CryptoTable />
        </div>
      </section>

      {/* Vision and Mission Section */}
      <VisionMission />

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Wallet className="mr-2 text-red-500" /> SecureFlow
              </h2>
              <p className="text-gray-400 mt-2">Secure transactions powered by ML and blockchain</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">Features</a>
              <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SecureFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;