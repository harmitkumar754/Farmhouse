import { useState } from "react";
import { ChevronLeft, ChevronRight, Navigation, Share2, Heart, ParkingCircle, TreePalm, Snowflake, Tv2, IndianRupee, Check, X, Bed, Users, Star } from "lucide-react";

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
          <div className="flex items-center justify-between w-40 p-3 shadow-md rounded-lg text-center border border-gray-100 border-1">
            <div>
              <div className="text-xl font-semibold flex">5<Star size={20} className=" text-yellow-500 mt-1" /></div>
              <p className="text-blue-500 text-sm cursor-pointer">Ratings</p>
            </div>
            <div className="border-l h-8 mx-2 border-gray-500 " />
            <div>
              <div className="text-xl font-semibold">0</div>
              <p className="text-blue-500 text-sm cursor-pointer">Review</p>
            </div>
          </div>
        </div>

        <hr className="border-5 border-gray-200" />


        {/* Guest Capacity */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Guest Capacity</h3>
          <div className="flex gap-4">
            <div className="flex-1 p-4 border rounded-lg border-1 border-gray-300">
              <div className="flex items-center gap-2 text-lg ">
                <Users size={20} />
                <span className="font-semibold">25 Guests</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Gathering Capacity</p>
            </div>
            <div className="flex-1 p-4 border rounded-lg border-1 border-gray-300">
              <div className="flex items-center gap-2 text-lg">
                <Bed size={20} />
                <span className="font-semibold">15 Guests</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Sleeping Facility</p>
            </div>
          </div>
        </div>

        <hr className="border-3 border-gray-200" />

        {/* Amenities */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Amenities</h3>
          <div className="text-green-600">
            <div className="flex items-center gap-2"><ParkingCircle size={24} strokeWidth={1} /> Parking Facility</div>
            <div className="flex items-center gap-2"><TreePalm size={24} strokeWidth={1} /> Private Garden Area</div>

            <div className="flex items-center gap-2"><Snowflake strokeWidth={1} size={24} /> Air Conditioner</div>
            <div className="flex items-center gap-2"><Tv2 size={24} strokeWidth={1} /> Television</div>
          </div>
          <button className="mt-4 w-full border rounded-lg py-2 text-green-600 font-semibold hover:bg-green-600 hover:text-white">
            VIEW ALL 30 AMENITIES
          </button>

        </div>

        <hr className="border-3 border-gray-200" />
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
        <div className="p-4 mt-4 border rounded-lg flex items-center gap-4  border-1 border-gray-300">
          <div className="text-green-600 border-2 border-gary-200 rounded-full p-1 "><IndianRupee size={28} /></div>
          <div className="flex-1">
            <p className="font-bold text-sm">₹5000 <span className="font-normal text-gray-600">Security Deposit</span></p>
            <div className="mt-1 flex items-center gap-2">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white text-xs px-2 py-0.5 rounded">Refund at Check-out</span>
              <span className="border-1 border-gray-400 text-xs px-2 py-0.5 rounded hover:border-green-600">Cash/Online</span>
            </div>
          </div>
        </div>
        <hr className="border-3 border-gray-200" />

        {/*google map*/}
        <div>
          {/* Title */}
          <h2 className="text-xl font-semibold mb-1">Location</h2>
          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-4">
            This is an approximate location of the property. Exact location of the property will be provided after booking.
          </p>
          {/* Map Image */}
          <div className="rounded-lg overflow-hidden shadow-md relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13958.612079712468!2d72.5559743!3d23.0492335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1749059863697!5m2!1sen!2sin"
              className="h-[300px] w-[865px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>


        {/* Booking */}
        <div>


          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 relative">
              <p className="flex items-center gap-1 text-base font-medium text-gray-800">
                <IndianRupee width={14} strokeWidth={1} />
                5000
              </p>
              
            </div>
            <div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-white hover:text-green-600 hover:border-1 transition">
                Booking Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
