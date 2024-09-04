
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';
import LOGONAV from "../assets/istockphoto-1412141099-612x612.jpg";
// import axios from 'axios';
export default function Admindb() {
  const nvigate = useNavigate()
  const handleLogout =() =>{
    nvigate("/")  }
  return (
    <div>

      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 '>
            <div className='d-flex flex-column align-items-center align-items-sm-start  px-3 pt-2 text-white min-vh-100'>
              <Link
                to='/Admindb'
                className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'
              >
                  <img src={LOGONAV} alt='Logo' className='logo mt-4' />
                <span className='fs-5 d-bolder d-sm-inline heading-margin'>Dhiraj Hatwar</span>
              </Link>
              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                <li className='w-100'>
                  <Link
                    to='/Admindb'
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-speedometer2 ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                  </Link>
                </li>
               
                <li className='w-100'>
                  <Link
                    to='/Admindb/Category'
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-columns ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Employees</span>
                  </Link>
                </li>
                <li className='w-100'>
                  <Link
                    to='/Admindb/ApprovalStart'
                    className='nav-link text-white px-0 align-middle'
                  >
                    {/* <i className='fs-4 bi-people ms-2'></i> */}
                    <i class="fs-4 bi bi-hourglass-split ms-2"></i>
                    <span className='ms-2 d-none d-sm-inline'>Approval</span>
                  </Link>
                </li>
                <li className='w-100'>
                  <Link
                    to='/Admindb/Profile'
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-person ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Profile</span>
                  </Link>
                </li>
                <li className='w-100' onClick={handleLogout}>
                  <Link
                    to="/Logout"
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-power ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <div className='col p-0 m-0'>
            <div className='pl-2 d-flex justify-content-between align-items-center shadow'>
          
              <h4>Employee Management System</h4>
              <div className='dropdown'>
                
                <ul  className='btn btn-primary mt-2 mr-3' onClick={handleLogout}>
                <Link className='logout-btn'>Logout</Link>
                </ul>
              </div>

            </div>
            <Outlet />
          </div>


        </div>
      </div>

    </div>


  );
}
