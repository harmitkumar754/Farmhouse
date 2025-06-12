import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <>
      <div className="w-full border-b border-gray-300 bg-white relative z-40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
           <Link to="/"><img src="public/img/logo.svg" alt="Logo" className="w-27 h-15" /></Link> 
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
       
      </div>
    </>
  );
}
