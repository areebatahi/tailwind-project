import React from 'react'

const CardHeader = () => {
    return (
        <>
            <div className="mr-29 border-2 border-solid border-green-400 w-60 h-70 bg-white dark:bg-gray-800 rounded-lg p-4 ring shadow-xl ring-gray-900/5">
                <img src="src\assets\img\Capture1.PNG" alt="" />
                <h1 className='font-bold text-x'>Expert Instruction</h1>
                <img src="src\assets\img\line.PNG" className="pt-2 pb-2" />
                <p className="text-gray-500 font-semibold">The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>
        </>
    )
}

export default CardHeader
