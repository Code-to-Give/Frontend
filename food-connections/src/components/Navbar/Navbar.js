import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { getCurrentUser } from "../../api/authApi"; // Import your API function
import "./Navbar.css";

function Navbar() {
  const { token, saveToken, removeToken, saveUser, removeUser } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(token !== null);
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setisLoggedIn(token !== null);
    if (token) {
      fetchUserRole();
    }
  }, [token]);

  const fetchUserRole = async () => {
    try {
      const user = await getCurrentUser();
      const parsedUser = JSON.stringify(user);
      saveUser(parsedUser);
      console.log("User data:", user);

      setUserRole(user.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
      setError("Failed to fetch user role.");
      removeToken();
      removeUser();
      navigate("/login");
    }
  };

  const handleLogout = () => {
    removeToken();
    removeUser();
    setisLoggedIn(false);
    navigate("/");
  };

  return (
    <div id="navbar" className={isLoggedIn ? "logged-in-navbar" : "logged-out-navbar"}>
      <div id="navbar-left">
        {isLoggedIn && <img src="/hamburger.png" alt="Hamburger" id="hamburger-image" />}
        <Link to="/" className={isLoggedIn ? "word logged-in-word" : "word logged-out-word"}>
          Food-Connections
        </Link>
      </div>
      <div id="navbar-right">
        {token ? (
          <>
            <input type="text" className="search-bar" placeholder="Search..." />
            {userRole === "Donor" && <Link to="/donor-profile"><button className="nav-button logged-in-button">Profile</button></Link>}
            {userRole === "Beneficiary" && <Link to="/bene-profile"><button className="nav-button logged-in-button">Profile</button></Link>}
            {userRole === "Volunteer" && <Link to="/home"><button className="nav-button logged-in-button">Home</button></Link>}
            <button className="nav-button logged-in-button" onClick={handleLogout}>
              Log-Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button logged-out-button">Log In</Link>
            <Link to="/signup" className="nav-button logged-out-button">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
