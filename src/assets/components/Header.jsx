import React from 'react';
import CardHeader from './cardHeader';

const Header = () => {
    return (
        <div className="bg-gray-100 py-16">
            {/* Main Hero Section */}
            <div className="container mx-auto max-w-screen-xl px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
                {/* Left: Content */}
                <div className="flex-1 text-center lg:text-left">
                    <button className="mb-6 bg-gray-200 text-green-500 font-bold text-xl px-6 py-2 rounded-md hover:bg-gray-300 transition">
                        Join Us
                    </button>
                    <h2 className="text-5xl font-bold text-black leading-tight sm:text-6xl">
                        25K+ STUDENTS TRUST US
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 tracking-wide">
                        Every day brings with it a fresh set of learning possibilities.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition">
                            Get Quote Now
                        </button>
                        <button className="border-2 border-green-500 text-green-500 font-semibold px-6 py-2 rounded-md hover:bg-green-50 transition">
                            Get Quote Now
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/src/assets/img/Capture.PNG"
                        alt="Hero Illustration"
                        className="max-w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Card Section */}
            <div className="container mx-auto max-w-screen-xl px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <CardHeader />
                <CardHeader />
                <CardHeader />
            </div>
        </div>
    );
};

export default Header;
