import React from 'react';
import { Search } from 'lucide-react';

function Cantfind() {
  return (
   <div>
    <div className='pt-35'>
         <div className="py-12 px-4 md:px-12 bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-lg">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left ps-30 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Can’t find what you’re looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Tell us what you need so we can show you results accordingly
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition">
            <Search size={20} />
            Show me what I’m looking for
          </button>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-[400px] flex justify-center pe-20  transform -translate-y-4 md:-translate-y-35 transform -translate-x-34">
          <img
            src="https://farmhousehub.in/UserAssets/v2/images/lookingfor-img.svg"
            alt="Looking Illustration"
            className="w-400 max-w-[400px] md:max-w-[450px] "
          />
        </div>
      </div>
    </div>
    </div>
   </div>
  );
}

export default Cantfind;
