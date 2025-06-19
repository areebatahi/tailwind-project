import React from 'react';

const ClientsSay = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto max-w-screen-xl px-4">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black">
                        What our <span className="text-blue-500">clients</span> say
                    </h2>
                    <p className="mt-4 font-medium text-gray-600 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia
                        error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <p className="text-gray-600 mb-6">
                            “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora
                            doloribus expedita laborum saepe voluptas...”
                        </p>
                        <div className="flex items-center">
                            <img src="/src/assets/img/images (1).jpg" className="w-14 h-14 rounded-full object-cover" alt="Robert" />
                            <div className="ml-4">
                                <p className="font-bold text-black">Robert</p>
                                <p className="text-gray-400 text-sm">CTO, Robert Consultency</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <p className="text-gray-600 mb-6">
                            “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora
                            doloribus expedita laborum saepe voluptas...”
                        </p>
                        <div className="flex items-center">
                            <img src="/src/assets/img/images (2).jpeg" className="w-14 h-14 rounded-full object-cover" alt="David Henry" />
                            <div className="ml-4">
                                <p className="font-bold text-black">David Henry</p>
                                <p className="text-gray-400 text-sm">CEO, Jeny Consultency</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <p className="text-gray-600 mb-6">
                            “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora
                            doloribus expedita laborum saepe voluptas...”
                        </p>
                        <div className="flex items-center">
                            <img src="/src/assets/img/images (3).jpeg" className="w-14 h-14 rounded-full object-cover" alt="Mark Toun" />
                            <div className="ml-4">
                                <p className="font-bold text-black">Mark Toun</p>
                                <p className="text-gray-400 text-sm">Marketing Manager at Stech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsSay;
