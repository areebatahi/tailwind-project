import React from 'react';

const Courses = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto max-w-screen-xl px-4">
                <h2 className="text-5xl font-bold text-black text-center mb-12">
                    Our Popular <span className="text-blue-500">Courses</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Course Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img src="/public/img/GraphicDesigners.PNG" alt="Graphic Design" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Graphic Design</h3>
                            <p className="text-gray-600 mb-4">
                                Use computer software or by hand to communicate ideas that inspire, inform, and captivate consumers.
                            </p>
                        </div>
                        <div className="bg-[#02062e] p-4 text-white flex justify-between items-center">
                            <span className="font-extrabold text-lg">$129</span>
                            <button className="bg-white text-[#02062e] text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100">
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                    {/* Course Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img src="/public/img/WebDevelopment.PNG" alt="Web Development" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development</h3>
                            <p className="text-gray-600 mb-4">
                                Web development is the work involved in developing a website for the Internet or an intranet.
                            </p>
                        </div>
                        <div className="bg-[#02062e] p-4 text-white flex justify-between items-center">
                            <span className="font-extrabold text-lg">$180</span>
                            <button className="bg-white text-[#02062e] text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100">
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                    {/* Course Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        <img src="/public/img/SEO.PNG" alt="SEO" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO</h3>
                            <p className="text-gray-600 mb-4">
                                SEO is the practice of growing a website's traffic from organic search results.
                            </p>
                        </div>
                        <div className="bg-[#02062e] p-4 text-white flex justify-between items-center">
                            <span className="font-extrabold text-lg">$250</span>
                            <button className="bg-white text-[#02062e] text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
