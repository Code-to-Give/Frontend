import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignUpPage';
import BeneHomePage from './pages/HomePage/BeneHomePage';
import DonorProfilePage from './pages/ProfilePage/DonorProfilePage';
import FormPage from './pages/FormPage/FormPage';
import DonorApprovalPage from './pages/DonorApprovalPage/DonorApprovalPage';
import DonorHomePage from "./pages/HomePage/DonorHomePage";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/donor-approval" element={<DonorApprovalPage />} />
        <Route path="/home" element={<DonorHomePage />} />
        <Route path="/profile" element={<DonorProfilePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
