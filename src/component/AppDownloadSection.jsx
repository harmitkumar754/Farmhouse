import React from 'react';

const AppDownloadSection = () => {
  return (
   <div className='px-30 py-5'>
     <section className="px-6 md:px-20  bg-teal-600 rounded-lg flex flex-col md:flex-row justify-between items-center text-white overflow-hidden">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://farmhousehub.in/UserAssets/v2/images/logo.svg"
          alt="FarmHouseHub"
          className="h-10 mb-4 hover:opacity-80 transition duration-300 cursor-pointer"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Get the FarmHouseHub App now!
        </h2>
        <p className="text-sm text-white/90">
          For best offers and discounts curated especially for you.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://farmhousehub.in/UserAssets/v2/images/appmobile-img.svg"
          alt="Download QR"
          className="h-72 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
   </div>
  );
};

export default AppDownloadSection;
