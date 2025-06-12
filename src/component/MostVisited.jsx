import React from "react";
import Slider from "react-slick";
import { Heart, BedDouble, Building2, MapPin, Percent, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10 hover:bg-gray-200"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10 hover:bg-gray-200"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const properties = [
  {
    id: "FH161",
    name: "Dream Room 1",
    bedrooms: 1,
    type: "Apartment",
    image: "public/Farmimg/FH854LeMeridian/1.jpg",
    location: "Tavdi, Navsari",
    distance: "64.7km",
    priceOld: "₹5,253",
    priceNew: "₹4,003",
    discount: "24% off",
    rating: 4.2,
  },
  {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
   {
    id: "FH637",
    name: "Brooklyn",
    bedrooms: 4,
    type: "Farmhouse",
    image: "/images/brooklyn.jpg",
    location: "Dipla, Navsari",
    distance: "62.3km",
    priceOld: "₹9,575",
    priceNew: "₹4,574",
    discount: "52% off",
    rating: 4.8,
  },
  // Add more as needed...
];

const MostVisited = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // large mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#3f0000] p-15">
      <h2 className="text-white text-xl font-bold mb-4">Most Visited</h2>
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="px-2">
            <div className="w-full relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:scale-110 transition">
                <Heart size={20} className="text-black" />
              </button>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <BedDouble size={16} />
                    {property.bedrooms} bedroom{property.bedrooms > 1 ? "s" : ""}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 size={16} />
                    {property.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold truncate">
                  {property.id} | {property.name}
                </h3>

                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <MapPin size={14} />
                  {property.location} · {property.distance}
                </div>

                <hr className="border-gray-200" />

                <p className="text-xs text-gray-500">
                  13 Jun, 10AM - 9PM | 5 guests
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="text-gray-400 line-through text-sm">
                    {property.priceOld}
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    {property.priceNew}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                    <Percent size={14} className="mr-1" />
                    {property.discount}
                  </span>

                  {property.rating && (
                    <span className="flex items-center text-sm text-orange-500">
                      <Star size={14} className="mr-1" />
                      {property.rating}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostVisited;
