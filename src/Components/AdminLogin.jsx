


// import React, { useState } from 'react';
// import './Style.css';
// import loginImage from '../assets/Add.png';
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () =>  {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleAdminLoginClick = () => {
//     navigate('/employeelogin');
//   };

//   const handleSignInClick = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in both fields');
//       return;
//     }

//     // Clear the error message if both fields are filled
//     setError('');
//     navigate('/admindb');
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         <div className="col-12 col-md-6 d-flex justify-content-center align-items-center adminformBg">
//           <div className="rounded w-75 loginForm">
//             <div className='usericons'>
//               <FaUser />
//             </div>
//             <h2>Welcome Back User</h2>
//             <br />
//             <form>
//               <div className="input-icon mb-3">
//                 <i className="fas fa-envelope"></i>
//                 <input
//                   type="email"
//                   name="email"
//                   autoComplete="off"
//                   placeholder="Enter Email"
//                   className="form-control rounded-0"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <br />
//               <br />
//               <div className="input-icon mb-3">
//                 <i className="fas fa-lock"></i>
//                 <input
//                   type="password"
//                   name="password"
//                   autoComplete="off"
//                   placeholder="Enter Password"
//                   className="form-control rounded-0"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <br />
//               {error && <div className="error-message">{error}</div>}
//               <button className="btn1 w-100 rounded-0 mt-3" onClick={handleSignInClick}>
//                 <b>Sign In</b>
//               </button>
//               <p className='center-text'>
//                 <br />For Employee Login Click Here{' '}
//                 <span
//                   className="decoration"
//                   onClick={handleAdminLoginClick}
//                   style={{ cursor: 'pointer', color: 'black' }}
//                 >
//                   Employee Login
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//         <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
//           <img src={loginImage} alt="login img" className="logimg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import './Style.css';
import loginImage from '../assets/Add.png';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>  {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAdminLoginClick = () => {
    navigate('/employeelogin');
  };

  const handleSignInClick = (e) => {
    e.preventDefault();

    // Define the valid credentials
    const validUsername = 'Dhiraj';
    const validPassword = 'dhiraj123';

    if (!name || !password) {
      setError('Please fill in both fields');
      return;
    }

    if (name !== validUsername || password !== validPassword) {
      setError('Invalid credentials. Please try again.');
      return;
    }

    // Clear the error message if both fields are valid
    setError('');
    navigate('/admindb');
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
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Username"
                  className="form-control rounded-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <br />
              {/* <div className="input-icon mb-3">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                  className="form-control rounded-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
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
                  style={{ cursor: 'pointer', color: 'black' }}
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
