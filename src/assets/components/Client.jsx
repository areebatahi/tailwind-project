import React from 'react'

const Client = () => {
  return (
    <>
      <div className="mt-3 pt-0 h-fit grid grid-rows-1 flex-row overflow-hidden bg-gray-100">
        <div className="mx-auto flex justify-center items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img src="src\assets\img\line.PNG" className="pt-2 pb-2" />
            <h2 className="text-5xl font-bold text-black">Every Client Matters</h2>
            <p className="mt-4 text-pretty text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            <button type="button" className="relative mt-2 border-2 border-solid border-green-400 bg-green-400 p-2 text-white font-semibold cursor-pointer rounded-[6px]">Get Qoute Now</button>                    </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img src="src\assets\img\Client.PNG" className="w-100" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Client
