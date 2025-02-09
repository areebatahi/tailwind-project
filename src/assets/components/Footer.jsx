import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="mt-5 pt-5 mb-5 pb-5 h-fit grid grid-rows-1 flex-row overflow-hidden bg-gray-100">
                <div className="mx-auto flex justify-center items-center">
                    <div className="mx-auto max-w-2xl ml-20">
                        <img src="src\assets\img\footer-img.PNG" className="w-120" />
                    </div>
                    <div className="mx-auto w-lg ml-20">
                        <h2 className="text-4xl font-semibold tracking-tight text-black">Download Our Free Mobile App</h2>
                        <p className="mt-4 mb-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio.</p>
                        <div className="flex flex-row justify-center">
                            <button type="button" className="flex relative bg-[#02062e] p-2 text-white font-semibold cursor-pointer rounded-[6px]"><img src="src\assets\img\app-store.png" className='w-7 mr-2 ml-2' />  Get it on the App Store</button>
                            <button type="button" className="flex relative p-2 bg-blue-500 text-white font-semibold cursor-pointer rounded-[6px]"><img src="src\assets\img\google-play.png" className='w-7 mr-2 ml-2' /> Get it on the google play</button>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-white-100 h-20 justify-between">
                <div className="relative flex p-3 h-16 items-center justify-between sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <a href="#" className="block rounded-md px-3 py-2 font-bold text-3xl text-gray-700 hover:text-green-400 ">AreebaPRO</a>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 text-gray-500">
                        © Copyright 2022. All Rights Reserved.
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <img src="src\assets\img\facebookLogo.png" className="w-7 m-1 cursor-pointer" />
                        <img src="src\assets\img\linkedinLogo.png" className="w-7 m-1 cursor-pointer" />
                        <img src="src\assets\img\twiterLogo.png" className="w-7 m-1 cursor-pointer" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer
