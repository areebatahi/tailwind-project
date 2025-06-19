import React from 'react';

const Economy = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Stat 1 */}
          <div>
            <h2 className="text-6xl font-bold text-green-400 tracking-tight">15K</h2>
            <p className="text-gray-700 mt-2">Happy Customers</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-6xl font-bold text-green-400 tracking-tight">150K</h2>
            <p className="text-gray-700 mt-2">Monthly Visitors</p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-6xl font-bold text-green-400 tracking-tight">15</h2>
            <p className="text-gray-700 mt-2">Countries Worldwide</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h2 className="text-6xl font-bold text-green-400 tracking-tight">100+</h2>
            <p className="text-gray-700 mt-2">Top Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
