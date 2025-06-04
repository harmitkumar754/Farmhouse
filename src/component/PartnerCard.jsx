import React from 'react';
import { ChevronRight } from 'lucide-react';

const PartnerCard = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 my-20 hover:scale-105 transition-transform duration-300 ">
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-gray-50 transition-colors duration-300">
        
        {/* Left Text Content */}
        <div>
          <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1">
            PARTNER WITH US
            <ChevronRight size={16} />
          </h3>
          <p className="text-sm text-gray-500">
            Have a farmhouse?{' '}
            <span className="text-emerald-600 font-semibold cursor-pointer hover:underline">
              List Now
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="w-40 md:w-56">
          <img
            src="https://farmhousehub.in/UserAssets/v2/images/joinboost-img.svg"
            alt="List Farmhouse"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
