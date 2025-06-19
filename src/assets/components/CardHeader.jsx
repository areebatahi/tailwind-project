import React from 'react';

const CardHeader = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-2 border-green-400 rounded-lg p-5 shadow-xl hover:scale-[1.02] transition">
      <img src="/src/assets/img/Capture1.PNG" alt="Instruction Icon" className="mb-4 w-full h-auto rounded-md" />
      <h1 className="font-bold text-xl text-black dark:text-white mb-2">Expert Instruction</h1>
      <img src="/src/assets/img/line.PNG" alt="Separator Line" className="my-2" />
      <p className="text-gray-500 font-medium text-sm">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  );
};

export default CardHeader;
