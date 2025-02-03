import React from 'react'
import CardHeader from './cardHeader'

const Header = () => {
    return (
        <>
            <div className="m-0 p-0 grid grid-rows-6 flex-row overflow-hidden bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto flex justify-center px-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <button type="button" className="relative bg-gray pb-8 text-green-400 font-bold cursor-pointer rounded-[10px] text-[25px] ">Join Us</button>
                        <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">25K+ STUDENTS TRUST US</h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-black tracking-[.15em] sm:text-xl/8 ">Every day brings with it a fresh set of learning possibilities</p>
                        <button type="button" className="relative m-2 border-2 border-solid border-green-400 bg-green-400 p-2 text-white font-semibold cursor-pointer">Get Qoute Now</button>
                        <button type="button" className="relative p-2 border-2 border-solid border-green-400 text-green-400 font-semibold cursor-pointer">Get Qoute Now</button>
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <img src="src\assets\img\Capture.PNG" className="w-100" />
                    </div>
                </div>
                <div className="mx-auto flex justify-between px-6 mt-10">
                    <CardHeader />
                    <CardHeader />
                    <CardHeader />
                </div>
            </div>
        </>
    )
}

export default Header