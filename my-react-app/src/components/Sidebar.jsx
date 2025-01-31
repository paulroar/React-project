import { Link } from "react-router-dom";


function SideBar() {
  return (
    <nav className="sidebar">

      <Link to="/">
      <button>Return to Home</button>
      </Link>

      <Link to="/listings">
        <button>Available Rentals</button>
      </Link>

      <Link to="/addRental">
        <button>Add New Rental</button>
      </Link>
      <Link to="/about">
        <button>About Page</button>
      </Link>
    </nav>
  );
}

export default SideBar;