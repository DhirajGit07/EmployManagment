// import React from 'react'
// import './Style.css'
// import loginImage from '../assets/illustratIMG.png'
// import { FaUser } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const navigate = useNavigate();

//   const handleAdminLoginClick = () => {
//     navigate('/adminlogin');
//   };


//   return (
//     <div className='container-fluid'>
//       <div className='row vh-100'>
//         <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
//           <img src={loginImage} alt='login img' className='logimg' />
//         </div>
//         <div className='col-12 col-md-6 d-flex justify-content-center align-items-center LoginformBg'>
//           <div className=' rounded w-75  loginForm '>
//             <div className='usericons'>
//               <FaUser />
//             </div>

//             <h2>Wellcome Back User</h2>
//             <br></br>
//             <form>
//               <div className='input-icon mb-3'>
//                 <i className='fas fa-envelope'></i>

//                 <input
//                   type='email'
//                   name='email'
//                   autoComplete='off'
//                   placeholder='Enter Email'
//                   className='form-control rounded-0'
//                 />
//               </div>

//               <br></br>
//               <br></br>
//               <div className='input-icon mb-3'>
//                 <i className='fas fa-lock'></i>
//                 <input
//                   type='password'
//                   name='password'
//                   autoComplete='off'
//                   placeholder='Enter Password'
//                   className='form-control rounded-0'
//                 />
//               </div>
//               <br></br>
//               <button className='btn w-100 rounded-0 mt-3'>
//                 <b>Sign In</b>
//               </button>

//               <p className='center-text'>
//                 <br></br>For AdminLogin Click Heare{' '}
//                 <span  className="decoration"
//                 onClick={handleAdminLoginClick}
//                 style={{ cursor: 'pointer', color:'black'}}
//                 >
//                       AdminLogin
//                 </span>
           
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login






import React, { useState } from 'react';
import './Style.css';
import loginImage from '../assets/Add.png';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Login = () =>  {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInClick = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Clear the error message if both fields are filled
    setError('');
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/employeedb');
  };

  const handleAdminLoginClick = () => {
    navigate('/adminlogin');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={loginImage} alt="login img" className="logimg" />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center LoginformBg">
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
              <button className="btn_sing  w-100 rounded-0 mt-3" onClick={handleSignInClick}>
                <b>Sign In</b>
              </button>
              <p className='center-text'>
                <br />For Admin Login Click Here{' '}
                <span
                  className="decoration"
                  onClick={handleAdminLoginClick}
                  style={{ cursor: 'pointer', color: 'black' }}
                >
                  Admin Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Details are Saved Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
