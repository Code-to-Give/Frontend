import { Link } from "react-router-dom";
import "./LoggedInNavbar.css";

function LoggedInNavbar() {
  return (
    <div id="navbar">
      <div id="navbar-left">
        <Link to="/" className="word">
          Food-Connections
        </Link>
      </div>
      <div id="navbar-right">
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        &nbsp;
        <Link to="/">
          <button>Log-Out</button>
        </Link>
      </div>
    </div>
  );
}

export default LoggedInNavbar;
