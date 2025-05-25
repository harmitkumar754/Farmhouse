import { BedDouble, House, Navigation } from 'lucide-react'
import React from 'react'
import { Heart } from "lucide-react"; // import the icon

function HighlyAffordable() {
    return (
        <>
            <div className="flex gap-5 flex-wrap justify-center">
                <div className="w-[330px] rounded-xl overflow-hidden shadow-lg  bg-white relative">
                    {/* Top-right icon */}
                    <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md hover:bg-gray-100">
                        <Heart size={18} />
                    </button>

                    <img className="w-full h-60 object-cover" src=".\src\assets\img\0.jpg" alt="Boho Farm" />

                    <div className="p-4">
                        {/* Tags: Bedrooms & Farmhouse */}
                        <div className="flex gap-2 text-gray-600 text-sm mb-2">
                            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                                <BedDouble size={20} strokeWidth={2} />
                                3 bedrooms
                            </div>
                            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                                <House size={20} strokeWidth={2} />
                                Farmhouse
                            </div>
                        </div>

                        {/* Title & Status */}
                        <div className="flex justify-between items-center py-3">
                            <h2 className="text-lg font-semibold">FH913 | Boho Farm</h2>
                            <span className="bg-green-100 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-gray-500 text-sm py-3">
                            <Navigation size={15} strokeWidth={2} />
                            Samarkha, Anand · 64km
                        </div>

                        <hr className="border-dotted my-2" />

                        {/* Booking Info */}
                        <div className="text-sm text-gray-600 mt-2">
                            26 May, 10AM – 9PM · 5 guests
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-400 line-through text-sm">₹7,483</span>
                                <span className="text-lg font-semibold text-gray-800">₹5,033</span>
                            </div>
                            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full border border-yellow-700 border-dotted">
                                33% off
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-[330px] rounded-xl overflow-hidden shadow-lg  bg-white relative">
                    {/* Top-right icon */}
                    <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md hover:bg-gray-100">
                        <Heart size={18} />
                    </button>

                    <img className="w-full h-60 object-cover" src="\src\assets\img\image.png" alt="Boho Farm" />

                    <div className="p-4">
                        {/* Tags: Bedrooms & Farmhouse */}
                        <div className="flex gap-2 text-gray-600 text-sm mb-2">
                            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                                <BedDouble size={20} strokeWidth={2} />
                                3 bedrooms
                            </div>
                            <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                                <House size={20} strokeWidth={2} />
                                Farmhouse
                            </div>
                        </div>

                        {/* Title & Status */}
                        <div className="flex justify-between items-center py-3">
                            <h2 className="text-lg font-semibold">FH913 | Boho Farm</h2>
                            <span className="bg-green-100 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1 text-gray-500 text-sm py-3">
                            <Navigation size={15} strokeWidth={2} />
                            Samarkha, Anand · 64km
                        </div>

                        <hr className="border-dotted my-2" />

                        {/* Booking Info */}
                        <div className="text-sm text-gray-600 mt-2">
                            26 May, 10AM – 9PM · 5 guests
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-400 line-through text-sm">₹7,483</span>
                                <span className="text-lg font-semibold text-gray-800">₹5,033</span>
                            </div>
                            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full border border-yellow-700 border-dotted">
                                33% off
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HighlyAffordable