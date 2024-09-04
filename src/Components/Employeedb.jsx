
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';
import LOGONAV from "../assets/istockphoto-1412141099-612x612.jpg"
export default function Admindb() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='empdashboard col-auto col-md-3 col-xl-2 px-sm-2 px-0 '>
            <div className='empdash d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              <Link
                to='/Employeedb'
                className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'
              >
                <img src={LOGONAV} alt='Logo' className='logo mt-4' />
                <span className='fs-5 d-bolder d-sm-inline heading-margin'>Dhiraj Hatwar</span>
              </Link>
              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                <li className='w-100'>
                  <Link
                    to='/Employeedb'
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-speedometer2 ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                  </Link>
                </li>

                <li className='w-100'>
                  <Link
                    to='/Employeedb/Get_Leave'
                    className='nav-link text-white px-0 align-middle'
                  >
                    <i className='fs-4 bi-columns ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Get Leave</span>
                  </Link>
                </li>
                <li className='w-100'>
                  <Link
                    to='/employeedb/ApproveHistory' 
                    className='nav-link text-white px-0 align-middle'
                  >
                    {/* <i className='fs-4 bi-columns ms-2'></i> */}
                    <i class="fs-4 bi bi-hourglass-split ms-2"></i>
                    <span className='ms-2 d-none d-sm-inline'>Approve</span>
                  </Link>
                </li>

                <li className='w-100'>
                  <Link
                    to='/'
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
          <div className='p-2 d-flex justify-content-between align-items-center shadow'>
              <h4>Employee Management System</h4>
                <Link to='/' className='btn btn-primary mr-2'>Logout</Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
     </div>
  );
}
