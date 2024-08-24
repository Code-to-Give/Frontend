import { Link } from "react-router-dom";
import "./LoggedInNavbar.css";

function LoggedInNavbar() {
  return (
    <div id="navbar">
      <div id="navbar-left">
        <img src="/hamburger.png" alt="Hamburger" id="hamburger-image" />
        <Link to="/" className="word">
          Food-Connections
        </Link>
      </div>
      <div id="navbar-right">
        <input type="text" className="search-bar" placeholder="Search..." />
        <Link to="/profile">
          <button className="nav-button">Profile</button>
        </Link>
        <Link to="/">
          <button className="nav-button">Log-Out</button>
        </Link>
      </div>
    </div>
  );
}

export default LoggedInNavbar;
