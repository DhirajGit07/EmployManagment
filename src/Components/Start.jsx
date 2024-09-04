import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUserTie } from 'react-icons/fa';
import LOGONAV from "../assets/istockphoto-1412141099-612x612.jpg"
const Start = () => {
  const navigate = useNavigate();

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPageS'>
      <div className='p-5 rounded shadow-lg bg-light loginStart'>
      <img src={LOGONAV} alt='Logo' className='logo-start mt-4'/>
        <h1 className='text-center mb-4'>
          <span className='text-primary'>Welcome</span> to the Employee Management System 
        </h1>
        <p className='text-center mb-5'>
          Please choose your role to proceed. Select your role below to access the system with appropriate privileges and manage your tasks efficiently.
        </p>
        <div className='d-flex flex-column flex-md-row justify-content-center'>
          <button 
            type='button' 
            className='adminLoginButton mx-2 mb-3 mb-md-0 w-100 w-md-45' 
            onClick={() => navigate('/adminlogin')}
          >
            <FaUserShield className='me-2' /> Admin Login
          </button>
          <button 
            type='button' 
            className='employeeLoginButton mx-2 w-100 w-md-45' 
            onClick={() => navigate('/employeelogin')}
          >
            <FaUserTie className='me-2' /> Employee Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
