import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className='text-center md:flex flex-row justify-between items-center w-full mb-3 px-4 py-3 bg-gray-700 z-50 text-white'>
      <h1 className='md:text-xl font-semibold'>
        <i className={`text-2xl ${icon}`}></i> {title}
      </h1>
      <ul className='flex justify-center'>
        <li className='p-2 my-0 mx-1 hover:text-gray-300'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-2 my-0 mx-1 hover:text-gray-300'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Lightning Weather",
  icon: "fas fa-cluod-sun",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
