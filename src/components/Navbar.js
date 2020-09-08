import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          color: 'black'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        activeStyle={{
          color: 'black'
        }}
      >About</NavLink>
      <NavLink
        to="/sellers"
        exact
        activeStyle={{
          color: 'black'
        }}
      >Sellers</NavLink>
    </div>
  );
};

export default Navbar;
