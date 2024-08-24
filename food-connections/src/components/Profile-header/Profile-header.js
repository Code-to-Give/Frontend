import React from 'react';
// import { Link } from 'react-router-dom';
import './Profile-header.css';

function ProfileHeader() {
    const [user, setUser] = React.useState("MBS");

    return (
        <>
            <div className="profile-info">
                <button>Make a donation</button>
                <img src="./profile.png" alt="Profile"/>
            </div>
            <div className="profile-container">
                <h1>Hello there, &nbsp;</h1>
                <h1>{ user }</h1>
            </div>
        </>
    );
}

export default ProfileHeader;
