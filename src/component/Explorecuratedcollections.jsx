import React from "react";

const categories = [
  {
    title: "WEEKEND HOME",
    subtitle: "Weekend home on rent near surat",
    image: "public/Explorecuratedcollections/home.jpg",
  },
  {
    title: "VILLA",
    subtitle: "Villas on rent near surat",
    image: "/Explorecuratedcollections/villa.jpg",
  },
  {
    title: "FARMHOUSE",
    subtitle:
      "Surat's Best Holiday Farmhouse On Rental With Private Swimming Pool – FarmHouseHub",
    image: "/Explorecuratedcollections/farmhouse.jpg",
  },
  {
    title: "APARTMENT",
    subtitle: "Private Rooms on rent for couples near surat",
    image: "/Explorecuratedcollections/aparment.jpg", 
  },
];

const ExploreCuratedCollections = () => {
  return (
    <div className="px-5 md:px-20 py-10"> {/* Better responsive padding */}
      <h2 className="text-xl font-semibold mb-6">Explore curated collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="overflow-hidden relative h-44">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-md">{item.title}</h3>
                <p className="text-white/90 text-xs">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCuratedCollections;
