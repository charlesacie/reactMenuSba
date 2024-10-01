import React from 'react';

const Navbar = ({ currentUser }) => {
  return (
    <nav>
      <h2>Welcome, {currentUser}!</h2>
    </nav>
  );
};

export default Navbar;
