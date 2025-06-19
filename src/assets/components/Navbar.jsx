import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-black hover:text-green-500 transition">
                            AreebaPRO
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex space-x-6">
                        {['Home', 'Info', 'Pricing', 'Teacher', 'Review', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-base text-black font-medium hover:text-green-500 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden sm:flex space-x-3">
                        <button className="px-4 py-2 text-green-600 font-semibold bg-gray-200 rounded-md hover:bg-gray-300 transition">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">
                            Join Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button className="text-gray-500 hover:text-black focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="sm:hidden mt-2 space-y-1">
                    {['Home', 'Info', 'Pricing', 'Teacher', 'Review', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block px-3 py-2 text-black rounded-md hover:bg-gray-100"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex space-x-2 px-3 pt-2">
                        <button className="w-full px-4 py-2 text-green-600 font-semibold bg-gray-200 rounded-md">
                            Login
                        </button>
                        <button className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
