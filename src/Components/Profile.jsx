


import React from 'react';
import './Style.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import userImage from '../assets/AdminProfile.png';

const Profile = ({ user }) => {
  const { name = 'Dhiraj Hatwar', email = 'dhiraj2000hatwar@gmail.com', mobile = '+91 8600770710', address = 'Darshana Society Koradi Naka, Nagpur'} = user || {};

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image-container">
            <img src={userImage} alt="User" className="profile-image" />
          </div>
          <h2 className="profile-name">{name}</h2>
          <p className="profile-role">Administrator</p>
        </div>
        <div className="profile-body">
          <h3 className="profile-section-title">Personal Information</h3>
          <div className="profile-info">
            <div className="profile-info-item">
              <FaEnvelope className="profile-info-icon" />
              <span>{email}</span>
            </div>
            <div className="profile-info-item">
              <FaPhone className="profile-info-icon" />
              <span>{mobile}</span>
            </div>
            <div className="profile-info-item">
              <FaMapMarkerAlt className="profile-info-icon" />
              <span>{address}</span>
            </div>
          </div>
          <h3 className="profile-section-title">Administrative Responsibilities</h3>
          <p className="profile-description">
            As an administrator, you are responsible for overseeing the platform's operations, managing user accounts, and ensuring the security and integrity of the system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
