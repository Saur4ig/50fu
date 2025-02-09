import { NavLink, Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-black text-slate-800 hover:text-slate-600 transition-colors"
        >
          fu50
        </Link>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium text-base px-3 py-2 rounded-lg ${
                    isActive
                      ? "text-slate-800 bg-gray-100"
                      : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice"
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium text-base px-3 py-2 rounded-lg ${
                    isActive
                      ? "text-slate-800 bg-gray-100"
                      : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
                  }`
                }
              >
                Practice
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
