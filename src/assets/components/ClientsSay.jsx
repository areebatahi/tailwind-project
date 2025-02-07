import React from 'react'

const ClientsSay = () => {
    return (
        <>
            <div className="mt-10 pt-5 mb-5 pb-5 h-fit grid grid-rows-1 flex-row overflow-hidden bg-gray-100">
                <div className="mx-auto flex justify-center items-center flex-col">
                    <h2 className="text-4xl font-semibold text-black text-center">What our <span className='text-blue-500'>clients</span> say</h2>
                    <p className='font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia <br /> error alias, adipisci rem similique, at omnis eligendi optio eos harum.</p>
                    <div className="flex m-3">
                        <div className="p-10 flex items-start flex-col">
                            <p className='text-gray-400'>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>
                            <div className="p-3 flex items-start">
                                <img src="src\assets\img\images (1).jpg" className="w-15 rounded-[100px]" />
                                <div className="p-2">
                                    <p className="font-bold text-black">Robert</p>
                                    <p className="text-gray-400">CTO, Robert Consultency</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 flex items-start flex-col">
                            <p className='text-gray-400'>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>
                            <div className="p-3 flex items-start">
                                <img src="src\assets\img\images (2).jpeg" className="w-15 rounded-[100px]" />
                                <div className="p-2">
                                    <p className="font-bold text-black">David Henry</p>
                                    <p className="text-gray-400">CEO, Jeny Consultency</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 flex items-start flex-col">
                            <p className='text-gray-400'>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>
                            <div className="p-3 flex items-start">
                                <img src="src\assets\img\images (3).jpeg" className="w-15 rounded-[100px]" />
                                <div className="p-2">
                                    <p className="font-bold text-black">Mark Toun</p>
                                    <p className="text-gray-400">Marketing Manager at Stech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientsSay
