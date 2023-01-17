import React from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import { GiBarbecue } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Header = () => {

  const handleToggle = () => {
    document.body.classList.toggle('toggle');
  };

  
  return (
    <header className="bg-white  dark:bg-gray-800  shadow ">
      <div className="flex  relative items-center justify-content-between ">
        <div className="flex  items-center ml-3 mx-5 pb-20">
          <button onClick={() => handleToggle()} className="toggle-sidebar-btn">
            <FaBars className="text-2xl text-green-600" />
          </button>
          <Link
            to="/dashboard"
            className="ml-8 flex items-center cursor-pointer -"
          >
            <div className="logo1"></div>
            <h1 className="text-2xl font-bold text-green-600">
              Online Clearance System
            </h1>
          </Link>
        </div>
        <div className="flex relative pb-20">
          <input
            type="text"
            className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent"
            placeholder="Search here..."
          />
          <span className="inline-flex  items-center px-3 border-t bg-white  border-b border-r border-gray-300 text-gray-500 shadow-sm text-sm">
            <FaSearch />
          </span>
        </div>
      
        <Link
          to="profile"
          className="pb-20 user_info flex items-center "
        >
          <h6>Admin</h6>
          <FaUserCircle className="text-2xl mx-5 text-green-600" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
