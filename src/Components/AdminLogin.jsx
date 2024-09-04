import React, { useState } from 'react';
import './Style.css';
import loginImage from '../assets/3081648.jpg';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminLogin = () =>  {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAdminLoginClick = () => {
    navigate('/employeelogin');
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();

    // Define the valid credentials
    const validUsername = 'Dhiraj';
    const validPassword = 'dhiraj12345';

    if (!name || !password || !email ) {
      setError('Please fill in all fields');
      return;
    }

    if (name !== validUsername || password !== validPassword) {
      setError('Invalid credentials. Please try again.');
      return;
    }

    // Clear the error message if all fields are valid
    setError('');

    // Show SweetAlert2 popup and navigate on confirmation
    const result = await Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    if (result.isConfirmed) {
      navigate('/Admindb');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center adminformBg">
          <div className="rounded w-75 loginForm">
            <div className='usericons'>
              <FaUser />
            </div>
            <h2>Welcome Back User</h2>
            <br />
            <form>
              <div className="input-icon mb-3">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter Username"
                  className="form-control rounded-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            
              <br />
              <div className="input-icon mb-3">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  className="form-control rounded-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="input-icon mb-3 password-container">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                  className="form-control rounded-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <br />
              {error && <div className="error-message">{error}</div>}
              <button className="btn1 w-100 rounded-0 mt-3" onClick={handleSignInClick}>
                <b>Sign In</b>
              </button>
              <p className='center-text'>
                <br />For Employee Login Click Here{' '}
                <span
                  className="decoration"
                  onClick={handleAdminLoginClick}
                  style={{ cursor: 'pointer', color: 'black',fontWeight:'bold'}}
                >
                  Employee Login
                </span>
              </p>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={loginImage} alt="login img" className="logimg" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
