import React from 'react';

const cardData = [
  {
    img: '/assets/img/Capture1.PNG',
    title: 'Expert Instruction',
    line: '/assets/img/line.PNG',
    text: 'The gradual accumulation of information about atomic and small-scale behaviour...'
  },
  {
    img: '/assets/img/Capture1.PNG',
    title: 'Expert Instruction',
    line: '/assets/img/line.PNG',
    text: 'The gradual accumulation of information about atomic and small-scale behaviour...'
  },
  {
    img: '/assets/img/Capture1.PNG',
    title: 'Expert Instruction',
    line: '/assets/img/line.PNG',
    text: 'The gradual accumulation of information about atomic and small-scale behaviour...'
  }
];

const Header = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Main Hero Section */}
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <button className="mb-6 bg-gray-200 text-green-500 font-bold text-xl px-6 py-2 rounded-md hover:bg-gray-300 transition">
            Join Us
          </button>
          <h2 className="text-5xl font-bold text-black leading-tight sm:text-6xl">
            25K+ STUDENTS TRUST US
          </h2>
          <p className="mt-6 text-lg text-gray-600 tracking-wide">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition">
              Get Quote Now
            </button>
            <button className="border-2 border-green-500 text-green-500 font-semibold px-6 py-2 rounded-md hover:bg-green-50 transition">
              Get Quote Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/img/Capture.PNG"
            alt="Hero Illustration"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="container mx-auto max-w-screen-xl px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-64 bg-white dark:bg-gray-800 border-2 border-green-400 rounded-lg p-5 shadow-xl hover:scale-[1.02] transition"
          >
            <img src={card.img} alt="Instruction Icon" className="mb-4 w-full h-auto rounded-md" />
            <h1 className="font-bold text-xl text-black dark:text-white mb-2">{card.title}</h1>
            <img src={card.line} alt="Separator Line" className="my-2" />
            <p className="text-gray-500 font-medium text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
