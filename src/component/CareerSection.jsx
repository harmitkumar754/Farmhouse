import { Briefcase, MapPin } from 'lucide-react';

const CareerSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Career Form */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 p-2 rounded-full text-white">
              <Briefcase size={20} />
            </div>
            <h2 className="text-xl font-bold">Career</h2>
          </div>
          <p className="text-gray-600 mb-6">
            At FarmHouseHub, we build product & solution that redefine finding the best place for small celebrations in neighborhoods.
            Every bit of your work at FarmHouseHub will help us to change how India celebrates holidays, every single weekend.
          </p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="file"
              accept=".pdf"
              className="border rounded-full px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
            <p className="text-sm text-gray-500 col-span-2">**Only Resume PDF file up to 1 MB.</p>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full col-span-2 w-fit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Office Address */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-500 p-2 rounded-full text-white">
              <MapPin size={20} />
            </div>
            <h2 className="text-xl font-bold">Office Address</h2>
          </div>
          <div className="text-gray-700 space-y-3">
            <p>
              <strong>Phone:-</strong> +91 7279 099099
            </p>
            <p>
              <strong>E-Mail:-</strong>{' '}
              <a href="mailto:hr@farmhousehub.in" className="text-green-600 hover:underline">
                hr@farmhousehub.in
              </a>
            </p>
            <p>
              <strong>Address:-</strong> 443, Bellissimo Hub, New Gauravpath Road, Near Monarch,
              Surat - 395004.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
