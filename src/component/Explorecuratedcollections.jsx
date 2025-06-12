const categories = [
  {
    title: "WEEKEND HOME",
    subtitle: "Weekend home on rent near surat",
    image: "public/Explorecuratedcollections/home.jpg",
  },
  {
    title: "VILLA",
    subtitle: "Villas on rent near surat",
    image: "public/Explorecuratedcollections/villa.jpg",
    
  },
  {
    title: "FARMHOUSE",
    subtitle:
      "Surat's Best Holiday Farmhouse On Rental With Private Swimming Pool – FarmHouseHub",
     image: "public/Explorecuratedcollections/farmhouse.jpg",
  },
  {
    title: "APARTMENT",
    subtitle: "Private Rooms on rent for couples near surat",
    image: "public/Explorecuratedcollections/aparment.jpg",
  },
];

const Explorecuratedcollections = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-xl font-semibold mb-6">Explore curated collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-md bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
              <h3 className="text-white font-bold text-md">{item.title}</h3>
              <p className="text-white text-xs">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorecuratedcollections;
