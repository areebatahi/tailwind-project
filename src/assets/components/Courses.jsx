import React from 'react'

const Courses = () => {
    return (
        <>
            <div className="mt-10 pt-5 mb-5 pb-5 h-fit grid grid-rows-1 flex-row overflow-hidden bg-gray-100">
                <h2 className="text-5xl font-bold text-black text-center">Our Popular Courses</h2>
                <div className="mx-auto flex justify-center mt-6 w-250">
                    <div className="flex items-start flex-col p-3 shadow-[2p] ">
                        <h2 className="text-4xl font-bold text-gray-900 text-center">Graphic Design</h2>
                        <p className='text-gray-500'>using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.</p>
                        <img src="src\assets\img\GraphicDesigners.PNG" className="w-80 mt-2" />
                        <div className="w-80 p-2 text-white bg-[#02062e] rounded-b-[9px] flex justify-between items-center">
                            <p className='font-extrabold text-lg'>$129</p>
                            <button className='bg-white text-[10px] font-bold text-[#02062e] p-2 rounded-[10px]'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="flex items-start flex-col p-3 shadow-[2p] ">
                        <h2 className="text-4xl font-bold text-gray-900">Web Development</h2>
                        <p className='text-gray-500'>Web development is the work involved in developing a website for the Internet or an intranet.</p>
                        <img src="src\assets\img\WebDevelopment.PNG" className="w-80 mt-2" />
                        <div className="w-80 p-2 text-white bg-[#02062e] rounded-b-[9px] flex justify-between items-center">
                            <p className='font-extrabold text-lg'>$180</p>
                            <button className='bg-white text-[10px] font-bold text-[#02062e] p-2 rounded-[10px]'>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="flex items-start flex-col p-3 shadow-[2p] ">
                        <h2 className="text-4xl font-bold text-gray-900 text-center">SEO</h2>
                        <p className='text-gray-500'>SEO (Search Engine Optimization) is the practice of growing a website's traffic from organic search results.</p>
                        <img src="src\assets\img\SEO.PNG" className="w-80 mt-2" />
                        <div className="w-80 p-2 text-white bg-[#02062e] rounded-b-[9px] flex justify-between items-center">
                            <p className='font-extrabold text-lg'>$250</p>
                            <button className='bg-white text-[10px] font-bold text-[#02062e] p-2 rounded-[10px]'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses
