import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Download App Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Image */}
                    <div className="flex justify-center lg:justify-start">
                        <img src="/assets/img/footer-img.PNG" alt="Mobile App" className="w-[300px] sm:w-[400px] rounded-md" />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left max-w-xl">
                        <h2 className="text-4xl font-semibold text-black mb-4">Download Our Free Mobile App</h2>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum,
                            consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam?
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="flex items-center bg-[#02062e] text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90">
                                <img src="/assets/img/app-store.png" className="w-6 h-6 mr-2" alt="App Store" />
                                Get it on the App Store
                            </button>
                            <button className="flex items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                                <img src="/assets/img/google-play.png" className="w-6 h-6 mr-2" alt="Google Play" />
                                Get it on Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <footer className="bg-white border-t">
                <div className="container mx-auto max-w-screen-xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                    {/* Branding */}
                    <a href="#" className="text-2xl font-bold text-gray-700 hover:text-green-500 mb-4 sm:mb-0">
                        AreebaPRO
                    </a>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm mb-4 sm:mb-0">
                        © 2022 AreebaPRO. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <img src="/assets/img/facebookLogo.png" alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-105 transition" />
                        <img src="/assets/img/linkedinLogo.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:scale-105 transition" />
                        <img src="/assets/img/twiterLogo.png" alt="Twitter" className="w-6 h-6 cursor-pointer hover:scale-105 transition" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
