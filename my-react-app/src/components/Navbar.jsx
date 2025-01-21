import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={HomeIcon} alt="Home Icon" />
      </Link>
      <h1> Apartment Rentals</h1>

    </nav>
  );
}

export default Navbar;