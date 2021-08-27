import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className='text-center md:flex flex-row justify-between items-center w-full mb-4 px-4 py-4 bg-gradient-to-b from-blue-700 to-blue-500 z-50 text-white'>
      <h1 className='text-xl font-semibold'>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Lightning Weather",
  icon: "fas fa-bolt",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
