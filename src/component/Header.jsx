import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { LocateFixed } from 'lucide-react';

export default function Header() {
  //date
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  //who
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (type, change) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + change),
    }));
  };

  //city nearby
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const cities = ['Ahemedabad', 'Suart', 'Bhavnagar', 'Rajkot', 'Junagadh'];

  const handleNearMe = () => {
    setLoading(true);
    setShowDropdown(false);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const res = await axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
              format: 'json',
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
          });

          const cityName =
            res.data?.address?.city ||
            res.data?.address?.town ||
            res.data?.address?.village ||
            'Unknown';

          setCity(cityName);
        } catch (err) {
          console.error('Reverse geocoding error', err);
          setShowDropdown(true);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error('Geolocation denied or failed', err);
        setLoading(false);
        setShowDropdown(true);
      }
    );
  };


  return (
    <>
      <div className="w-full border-b border-gray-300 bg-white relative z-40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <img src="public/img/logo.svg" alt="Logo" className="w-27 h-15" />
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-0 md:space-x-6 w-full md:w-auto gap-2">
            <a
              href="#"
              className="text-sm md:text-lg text-gray-600 hover:text-black w-full md:w-auto text-center"
            >
              List your property
            </a>
            <button className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-md text-sm md:text-lg w-full md:w-auto">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
              </svg>
              LOGIN / SIGNUP
            </button>
          </div>
        </div>


        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mt-1 mb-4 bg-white border border-gray-300 flex flex-col sm:flex-row items-stretch sm:items-center px-4 py-4 gap-4 sm:gap-6 relative rounded-xl sm:rounded-full">

          {/* Where */}
          <div className="flex-1 w-full sm:w-auto">
            <p className="text-sm text-gray-500">Where</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-sm text-black-700">{city || 'Address not found'}</span>
              <div className="relative mt-2 sm:mt-0">
                <button
                  onClick={handleNearMe}
                  className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-full flex items-center"
                >
                  <LocateFixed size={20} strokeWidth={2} />
                  {loading ? 'Locating...' : 'Near Me'}
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <select
                    onChange={(e) => {
                      setCity(e.target.value);
                      setShowDropdown(false);
                    }}
                    className="absolute left-0 mt-2 w-44 border border-gray-300 rounded-md px-2 py-1 bg-white shadow-md focus:ring-emerald-500"
                  >
                    <option value="">Select your city</option>
                    {cities.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px sm:h-8 sm:w-px w-full bg-gray-300" />

          {/* When */}
          <div className="flex-1 w-full sm:w-auto relative">
            <p className="text-sm text-gray-500">When</p>
            <p
              className="text-sm text-black-700 cursor-pointer"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {format(dateRange[0].startDate, 'MMM dd, h:mm a')} - {format(dateRange[0].endDate, 'MMM dd, h:mm a')}
            </p>

            {showCalendar && (
              <div className="absolute top-14 z-50 bg-white shadow-lg rounded-xl p-4">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  rangeColors={['#10b981']}
                />
                <div className="text-right mt-2">
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px sm:h-8 sm:w-px w-full bg-gray-300" />

          {/* Who */}
          <div className="relative flex-1 w-full sm:w-auto">
            <p className="text-sm text-gray-500">Who</p>
            <button
              onClick={() => setShowGuestDropdown(!showGuestDropdown)}
              className="text-sm text-black-700 focus:outline-none"
            >
              {guests.adults + guests.children + guests.infants + guests.pets}
            </button>

            {showGuestDropdown && (
              <div className="absolute z-20 top-14 right-0 w-80 bg-white border rounded-xl shadow-xl p-4">
                {[
                  { label: 'Adults', note: 'Ages 13 or above', key: 'adults' },
                  { label: 'Children', note: 'Ages 2 - 12 years', key: 'children' },
                  { label: 'Infants', note: 'Below 2 years', key: 'infants' },
                  { label: 'Pets', note: 'Cats, Dogs etc.', key: 'pets' },
                ].map(({ label, note, key }) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b last:border-none">
                    <div>
                      <p className="font-semibold">{label}</p>
                      <p className="text-xs text-gray-500">{note}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateGuest(key, -1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-black"
                      >
                        −
                      </button>
                      <span>{guests[key]}</span>
                      <button
                        onClick={() => updateGuest(key, 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setGuests({ adults: 0, children: 0, infants: 0, pets: 0 })}
                    className="text-red-500 font-semibold"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setShowGuestDropdown(false)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-md self-center sm:self-auto">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}
