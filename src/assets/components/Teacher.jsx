import React from 'react';

const Teacher = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto max-w-screen-xl px-4 text-center">
                {/* Heading */}
                <p className="text-md font-semibold text-gray-600">Teacher's Panel</p>
                <h2 className="text-5xl font-bold text-black mb-12">See Our Talented Teachers</h2>

                {/* Teachers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Teacher 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/src/assets/img/images.jpeg" alt="Roy Hardy" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                        <p className="text-xl font-semibold text-black">Roy Hardy</p>
                        <p className="text-gray-500">Web Developer</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <img src="/src/assets/img/emailIcon.jpg" className="w-5 h-5 cursor-pointer" alt="email" />
                            <img src="/src/assets/img/twiter.png" className="w-5 h-5 cursor-pointer" alt="twitter" />
                            <img src="/src/assets/img/linkend.PNG" className="w-5 h-5 cursor-pointer" alt="linkedin" />
                            <img src="/src/assets/img/git.png" className="w-5 h-5 cursor-pointer" alt="github" />
                        </div>
                    </div>

                    {/* Teacher 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/src/assets/img/images (1).jpg" alt="Jake Burke" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                        <p className="text-xl font-semibold text-black">Jake Burke</p>
                        <p className="text-gray-500">Graphic Designer</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <img src="/src/assets/img/emailIcon.jpg" className="w-5 h-5 cursor-pointer" alt="email" />
                            <img src="/src/assets/img/twiter.png" className="w-5 h-5 cursor-pointer" alt="twitter" />
                            <img src="/src/assets/img/linkend.PNG" className="w-5 h-5 cursor-pointer" alt="linkedin" />
                            <img src="/src/assets/img/git.png" className="w-5 h-5 cursor-pointer" alt="github" />
                        </div>
                    </div>

                    {/* Teacher 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/src/assets/img/images (2).jpeg" alt="Donnie Houston" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                        <p className="text-xl font-semibold text-black">Donnie Houston</p>
                        <p className="text-gray-500">Visual Designer</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <img src="/src/assets/img/emailIcon.jpg" className="w-5 h-5 cursor-pointer" alt="email" />
                            <img src="/src/assets/img/twiter.png" className="w-5 h-5 cursor-pointer" alt="twitter" />
                            <img src="/src/assets/img/linkend.PNG" className="w-5 h-5 cursor-pointer" alt="linkedin" />
                            <img src="/src/assets/img/git.png" className="w-5 h-5 cursor-pointer" alt="github" />
                        </div>
                    </div>

                    {/* Teacher 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="/src/assets/img/images (3).jpeg" alt="Vicki Morales" className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                        <p className="text-xl font-semibold text-black">Vicki Morales</p>
                        <p className="text-gray-500">App Developer</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <img src="/src/assets/img/emailIcon.jpg" className="w-5 h-5 cursor-pointer" alt="email" />
                            <img src="/src/assets/img/twiter.png" className="w-5 h-5 cursor-pointer" alt="twitter" />
                            <img src="/src/assets/img/linkend.PNG" className="w-5 h-5 cursor-pointer" alt="linkedin" />
                            <img src="/src/assets/img/git.png" className="w-5 h-5 cursor-pointer" alt="github" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;
