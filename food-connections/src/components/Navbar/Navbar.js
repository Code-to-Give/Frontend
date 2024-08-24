import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div id="navbar">
            <div id="navbar-left">
                <Link to="/" className='word'>Food-Connections</Link>
            </div>
            <div id="navbar-right">
                <Link to="/login" className="nav-login-button">Log In</Link>
                <Link to="/signup" className="nav-signup-button">Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar;