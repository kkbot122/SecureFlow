import React from 'react';
import { TrendingUp, TrendingDown, Bitcoin, Coins } from 'lucide-react';

const cryptoData = [
  { 
    id: 1, 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    price: 52410.50, 
    change: 2.34, 
    volume: '32,410 SOL',
    floor: '5.7 SOL',
    nfts: '7,500 NFTs'
  },
  { 
    id: 2, 
    name: 'Ethereum', 
    symbol: 'ETH', 
    price: 2845.67, 
    change: -1.23, 
    volume: '26,452 SOL',
    floor: '5.8 SOL',
    nfts: '7,000 NFTs'
  },
  { 
    id: 3, 
    name: 'Solana', 
    symbol: 'SOL', 
    price: 143.89, 
    change: 5.67, 
    volume: '14,515 SOL',
    floor: '8.49 SOL',
    nfts: '5,005 NFTs'
  },
  { 
    id: 4, 
    name: 'Cardano', 
    symbol: 'ADA', 
    price: 0.58, 
    change: 1.45, 
    volume: '12,409 SOL',
    floor: '1.819 SOL',
    nfts: '4,900 NFTs'
  },
  { 
    id: 5, 
    name: 'Polkadot', 
    symbol: 'DOT', 
    price: 7.23, 
    change: -0.89, 
    volume: '9,767 SOL',
    floor: '5.15 SOL',
    nfts: '4,850 NFTs'
  }
];

const CryptoTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cryptoData.slice(0, 4).map((crypto) => (
          <div key={crypto.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-md mr-3 bg-black flex items-center justify-center">
                  <Coins size={20} className={crypto.change > 0 ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div>
                  <h3 className="font-bold">{crypto.name}</h3>
                  <p className="text-sm text-gray-400">{crypto.nfts}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-400">Floor</p>
                  <p className="font-medium">{crypto.floor}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">30d Avg Price</p>
                  <p className={`font-medium ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change > 0 ? '+' : ''}{crypto.change}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="flex justify-between p-4 border-b border-gray-800">
          <div className="flex space-x-4">
            <button className="bg-black px-3 py-1 rounded-md text-sm">1D</button>
            <button className="bg-red-500 px-3 py-1 rounded-md text-sm">7D</button>
            <button className="bg-black px-3 py-1 rounded-md text-sm">30D</button>
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="p-4">Collection</th>
              <th className="p-4">7D Volume</th>
              <th className="p-4">Floor Price</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr key={crypto.id} className="border-t border-gray-800">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md mr-3 bg-black flex items-center justify-center">
                      <Coins size={16} className={crypto.change > 0 ? 'text-green-500' : 'text-red-500'} />
                    </div>
                    <div>
                      <p className="font-medium">{crypto.name}</p>
                      <p className="text-sm text-gray-400">{crypto.nfts}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">{crypto.volume}</td>
                <td className="p-4">
                  <div className="flex items-center">
                    {crypto.floor}
                    <span className={`ml-2 ${crypto.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.change > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;