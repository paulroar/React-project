import React from "react";

function Navbar() {
  return (
    <nav className="navbar"> style={{ background: 'lightblue', textAlign: 'center'}}
      <img src="/src/assets/logo.png" alt="Logo" className="logo" />
      <h1>Listings</h1>
    </nav>
  );
}

export default Navbar;