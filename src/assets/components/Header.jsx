import React from 'react'

const Header = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <button type="button" className="relative bg-gray pb-8 text-green-400 font-bold cursor-pointer rounded-[10px] text-[25px] ">Join Us</button>
                        <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">25K+ STUDENTS TRUST US</h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-black tracking-[.15em] sm:text-xl/8 ">Every day brings with it a fresh set of learning possibilities</p>
                        <button type="button" className="relative bg-green-400 p-2 text-white font-semibold cursor-pointer">Login</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header