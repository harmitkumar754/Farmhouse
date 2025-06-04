import { useState } from "react";
import { ChevronLeft, ChevronRight, Navigation, Share2, Heart, ParkingCircle, TreePalm, Snowflake, Tv2, IndianRupee, Check, X, Bed, Users, Star  } from "lucide-react";

const images = [
  "./src/assets/img/0.jpg",
  "./src/assets/img/image.png"
  // replace with your image URLs or imports
];




export default function Viewfarm() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[400px] object-cover"
        />

        {/* Share and Heart Icons */}
        <div className="absolute top-4 right-4 flex space-x-3 z-10">
          <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
            <Share2 size={20} />
          </button>
          <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
            <Heart size={20} />
          </button>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${current === index ? "bg-green-600" : "bg-gray-300"
                }`}
            ></div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 text-sm bg-white px-2 py-1 rounded shadow">
          {current + 1}/{images.length}
        </div>
      </div>

      {/* Details */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">FH917 | CROWN</h2>
        <p className="text-gray-600 flex items-center gap-1">
          <Navigation size={15} strokeWidth={2} /> Vasna Bujarg, Kheda • 174.1km
        </p>
        <div className="flex gap-2 mt-2 text-sm">
          <span className="bg-gray-200 px-3 py-1 rounded-full">2 BEDROOMS</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">FARMHOUSE</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full">22500 SQ YD</span>
        </div>
      </div>
    </div>
     <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Rating & Review */}
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-40 p-3 shadow-md rounded-lg text-center">
          <div>
            <div className="text-xl font-semibold">0<Star /></div>
            <p className="text-blue-500 text-sm cursor-pointer">Ratings</p>
          </div>
          <div className="border-l h-8 mx-2" />
          <div>
            <div className="text-xl font-semibold">0</div>
            <p className="text-blue-500 text-sm cursor-pointer">Review</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Offers */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Offers for You</h3>
        <div className="flex items-center p-4 bg-gray-50 border rounded-lg">
          <div className="text-yellow-500 mr-3 text-2xl">💰</div>
          <p>
            <span className="font-semibold">Save ₹1000 with this coupon</span><br />
            Use code <span className="font-bold">FIRSTSTAY</span> & Get 30% off on bookings above ₹6999.
            <br />
            Maximum discount: ₹1000
          </p>
        </div>
      </div>

      <hr />

      {/* Guest Capacity */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Guest Capacity</h3>
        <div className="flex gap-4">
          <div className="flex-1 p-4 border rounded-lg">
            <div className="flex items-center gap-2 text-lg">
              <Users size={20} />
              <span className="font-semibold">25 Guests</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Gathering Capacity</p>
          </div>
          <div className="flex-1 p-4 border rounded-lg">
            <div className="flex items-center gap-2 text-lg">
              <Bed size={20} />
              <span className="font-semibold">15 Guests</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Sleeping Facility</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Amenities */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-green-600">
          <div className="flex items-center gap-2"><ParkingCircle size={18} /> Parking Facility</div>
          <div className="flex items-center gap-2"><TreePalm size={18} /> Private Garden Area</div>

          <div className="flex items-center gap-2"><Snowflake size={18} /> Air Conditioner</div>
          <div className="flex items-center gap-2"><Tv2 size={18} /> Television</div>
        </div>
        <button className="mt-4 w-full border rounded-lg py-2 text-green-600 font-semibold hover:bg-green-600 hover:text-white">
  VIEW ALL 30 AMENITIES
</button>

      </div>

      <hr />

      {/* House Rules */}
      <div>
        <h3 className="font-semibold text-lg mb-2">House Rules</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-2 text-red-500"><X size={16} /> Couples</div>
          <div className="flex items-center gap-2 text-green-600"><Check size={16} /> Pets</div>
          <div className="flex items-center gap-2 text-green-600"><Check size={16} /> Non Veg</div>
          <div className="flex items-center gap-2 text-red-500"><X size={16} /> Smoking</div>
          <div className="flex items-center gap-2 text-green-600"><Check size={16} /> Decoration</div>
          <div className="flex items-center gap-2 text-green-600"><Check size={16} /> Bachelors</div>
        </div>
      </div>

      {/* Security Deposit */}
      <div className="p-4 mt-4 border rounded-lg flex items-center gap-4 bg-gray-50">
        <div className="text-green-600"><IndianRupee size={28} /></div>
        <div className="flex-1">
          <p className="font-bold text-sm">₹5000 <span className="font-normal text-gray-600">Security Deposit</span></p>
          <div className="mt-1 flex items-center gap-2">
            <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded">Refund at Check-out</span>
            <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">Cash/Online</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
