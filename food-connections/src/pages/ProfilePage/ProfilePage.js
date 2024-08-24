import React from 'react';
// import { Link } from 'react-router-dom';
import './ProfilePage.css';
import ProfileHeader from '../../components/Profile-header/Profile-header';
import Piechart from '../../components/Piechart/Piechart';
import AgeHistogram from '../../components/Histogram/Histogram';

function ProfilePage() {

  return (
    <div className='profile-screen'>
      <ProfileHeader />
      <div className="analytics">
        <Piechart />
        <AgeHistogram />
        <Piechart />
        <Piechart />
      </div>
    </div>

    

  );
}

export default ProfilePage;
