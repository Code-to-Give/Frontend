import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  // Check if access token exists in local storage
  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("accessToken") !== null);
  useEffect(() => {
    setisLoggedIn(localStorage.getItem("accessToken") !== null);
  } );
  const navigate = useNavigate();

  return (
    <div id="navbar" className={isLoggedIn ? "logged-in-navbar" : "logged-out-navbar"}>
      <div id="navbar-left">
        {isLoggedIn && <img src="/hamburger.png" alt="Hamburger" id="hamburger-image" />}
        <Link to="/" className={isLoggedIn ? "word logged-in-word" : "word logged-out-word"}>
          Food-Connections
        </Link>
      </div>
      <div id="navbar-right">
        {isLoggedIn ? (
          <>
            <input type="text" className="search-bar" placeholder="Search..." />
            <Link to="/profile">
              <button className="nav-button logged-in-button">Profile</button>
            </Link>
            <Link to="/">
              <button
                className="nav-button logged-in-button"
                onClick={() => {
                  localStorage.removeItem("accessToken"); // Log out by removing token

                  window.location.reload(); // Refresh the page to update the navbar
                //   navigate('/');
                  
                }}
              >
                Log-Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button logged-out-button">
              Log In
            </Link>
            <Link to="/signup" className="nav-button logged-out-button">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
