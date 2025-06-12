import React from 'react';
import { Instagram, Facebook, Twitter, PhoneCall, HelpCircle, Home, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow pt-10 pb-6 px-6 md:px-20 text-sm">
      <div className="grid md:grid-cols-5 gap-8 border-b border-gray-200 pb-6">
        <div className="md:col-span-1">
          <img
            src="https://farmhousehub.in/UserAssets/v2/images/logo.svg"
            alt="FarmHouseHub"
            className="mb-2 hover:opacity-80 transition duration-300"
          />
          <p className="text-gray-600">©2025 FARMHOUSEHUB STAYCATIONS PVT. LTD.</p>
          <p className="text-gray-500 mt-2">
            316, Marvella Business Hub, <br /> Nr. Pal RTO, Adajan Road, <br /> Adajan, Surat - 395009
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-800 hover:text-emerald-600 cursor-pointer">Company</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-emerald-600 cursor-pointer"><Link to="/aboutus">About Us</Link></li>
            <li className="hover:text-emerald-600 cursor-pointer"><Link to="CareerSection">Career</Link></li>
            <li className="hover:text-emerald-600 cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-800 hover:text-emerald-600 cursor-pointer">Contact</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-emerald-600 cursor-pointer"><Link to="/ContactUs">Help & Support</Link></li>
            <li className="hover:text-emerald-600 cursor-pointer">List Your Property</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-800 hover:text-emerald-600 cursor-pointer">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-emerald-600 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-emerald-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-emerald-600 cursor-pointer">Cancellation policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-800 hover:text-emerald-600 cursor-pointer">Social Links</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">
              <Instagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">
              <Facebook size={16} /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">
              <PhoneCall size={16} /> Whatsapp
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-600 cursor-pointer">
              <Twitter size={16} /> Twitter
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left text-gray-600 text-sm mt-6">
        <p className="hover:text-emerald-600 cursor-pointer">Farmhouse on rent in Surat</p>
        <p className="hover:text-emerald-600 cursor-pointer">Villa on rent in Surat</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Home on rent in Surat</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Apartment on rent in Surat</p>
        <p className="hover:text-emerald-600 cursor-pointer">Farmhouse on rent in Daman</p>
        <p className="hover:text-emerald-600 cursor-pointer">Villa on rent in Daman</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Home on rent in Daman</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Apartment on rent in Daman</p>
        <p className="hover:text-emerald-600 cursor-pointer">Farmhouse on rent in Navsari</p>
        <p className="hover:text-emerald-600 cursor-pointer">Villa on rent in Navsari</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Home on rent in Navsari</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Apartment on rent in Navsari</p>
        <p className="hover:text-emerald-600 cursor-pointer">Farmhouse on rent in Baroda</p>
        <p className="hover:text-emerald-600 cursor-pointer">Villa on rent in Baroda</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Home on rent in Baroda</p>
        <p className="hover:text-emerald-600 cursor-pointer">Weekend Apartment on rent in Baroda</p>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-between border-t pt-4 border-gray-200">
        <p className="text-center text-gray-600 mb-3 md:mb-0">© 2025 Farmhouse Hub. All rights reserved.
</p>
        <div className="flex gap-4">
          {/* <img
            src="https://farmhousehub.in/UserAssets/v2/images/googleplay-img.svg"
            alt="Google Play"
            className="h-10 hover:scale-105 transition duration-300 cursor-pointer"
          />
          <img
            src="https://farmhousehub.in/UserAssets/v2/images/appstore-img.svg"
            alt="App Store"
            className="h-10 hover:scale-105 transition duration-300 cursor-pointer"
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
