import React from 'react';
import { Search } from 'lucide-react';

function Cantfind() {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 rounded-lg">
        {/* Left Content */}
        <div className="text-center md:text-left md:max-w-xl ms-35">
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
        <div className="w-full flex justify-center">
          <img
            src="https://farmhousehub.in/UserAssets/v2/images/lookingfor-img.svg"
            alt="Looking Illustration"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Cantfind;
