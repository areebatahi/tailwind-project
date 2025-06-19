import React from 'react';

const Client = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <img src="/assets/img/line.PNG" alt="Line Design" className="mb-4" />
          <h2 className="text-5xl font-bold text-black mb-4">Every Client Matters</h2>
          <p className="text-gray-600 text-lg mb-6">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-500 transition">
            Get Quote Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src="/assets/img/Client.PNG" alt="Client Illustration" className="w-full max-w-md rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Client;
