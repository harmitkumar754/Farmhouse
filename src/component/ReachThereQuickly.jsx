import { BedDouble, Building2, MapPin, Star, Percent } from "lucide-react";

const properties = [
  {
    id: "FH854",
    name: "Le Meridian",
    type: "Farmhouse",
    bedrooms: 4,
    location: "Bhathaiya, Daman",
    distance: "1km",
    priceOld: "₹33,486",
    priceNew: "₹20,486",
    discount: "39% off",
    rating: 4.3,
    image: "/Farmimg/FH854LeMeridian/FH854LeMeridian.jpg",
  },
  {
    id: "FH932",
    name: "Laguna Room",
    type: "Apartment",
    bedrooms: 1,
    location: "Moti Daman, Daman",
    distance: "1.5km",
    priceOld: "₹10,399",
    priceNew: "₹7,149",
    discount: "31% off",
    rating: null,
    image: "/images/property2.jpg",
  },
  {
    id: "FH933",
    name: "Laguna Room",
    type: "Apartment",
    bedrooms: 1,
    location: "Moti Daman, Daman",
    distance: "1.5km",
    priceOld: "₹9,999",
    priceNew: "₹7,149",
    discount: "29% off",
    rating: null,
    image: "/images/property3.jpg",
  },
  {
    id: "FH944",
    name: "Laguna Room",
    type: "Apartment",
    bedrooms: 1,
    location: "Moti Daman, Daman",
    distance: "1.5km",
    priceOld: "₹9,999",
    priceNew: "₹7,149",
    discount: "29% off",
    rating: null,
    image: "/images/property4.jpg",
  },
  
  
];

const ReachThereQuickly = () => {
  return (
    <div className="px-20 py-8">
      <h2 className="text-2xl font-bold mb-6">Reach There Quickly</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
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
              <h3 className="text-lg font-semibold truncate">{property.id} | {property.name}</h3>
              <div className="flex items-center text-sm text-gray-500 gap-1">
                <MapPin size={14} />
                {property.location} · {property.distance}
              </div>
              <p className="text-gray-300">-------------------------------</p>
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
        ))}
      </div>
    </div>
  );
};

export default ReachThereQuickly;
