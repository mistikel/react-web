// src/components/Home.js
import React, { useState } from 'react';
import Products from './Products';
import Claims from './Claims';

const Home = () => {
  const [activeTab, setActiveTab] = useState('products'); // Track active tab
 

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Warranty Claims Management System</h1>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('products')}
          className={`py-2 px-4 mr-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('claims')}
          className={`py-2 px-4 ${activeTab === 'claims' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
        >
          Warranty Claims
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'products' && <Products />}
        {activeTab === 'claims' && <Claims />}
      </div>
    </div>
  );
};

export default Home;
