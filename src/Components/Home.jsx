import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Style.css';

export default function ImgMediaCard() {

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Number of items per page
  // const [show, setShow] = useState(false);
  // const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8081/getLeave')
      .then((result) => {
        if (result.data.Status) {
          setCategories(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // const handleShow = (card) => {
  //   setSelectedCard(card);
  //   setShow(true);
  // };

  // const handleClose = () => setShow(false);

  const offset = currentPage * itemsPerPage;
  const currentItems = categories.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className='container mt-4 back-side'>
      <div className='row'>
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Total Employees</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-people p-3 fs-1'></i>
                <div className="text-end">
                  <h3>230</h3>
                  <p>Employees</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/Admindb/Profile'>
                View Profiles
              </Link>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Registration</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                {/* <i className='bi bi-building p-3 fs-1'></i> */}
                <i class="bi bi-building-check p-3 fs-1"></i>
                <div className="text-end">
                  <h3>15</h3>
                  <p>Registration</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/Admindb/add_category'>
                Registration details
              </Link>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pending Approvals</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-hourglass-split p-3 fs-1'></i>
                <div className="text-end">
                  <h3>8</h3>
                  <p>Pending</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/Admindb/ApprovalStart'>
                Review Approvals
              </Link>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Payroll</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-cash-coin p-3 fs-1'></i>
                <div className="text-end">
                  <h3>$150K</h3>
                  <p>Monthly Payroll</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/Admindb/Category'>
                Manage Payroll
              </Link>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='card-T'>
            <div className='card-body ml-2 mr-2 mt-4'>
              <h5 className='card-title p-2'>Employee Data</h5>
              <table className='table border shadow'>
                <thead>
                  <tr>
                    <th className='th-leave p-3'>Sr.No</th>
                    <th className='th-leave p-3'>Name</th>
                    <th className='th-leave p-3'>Type</th>
                    <th className='th-leave p-3'>Start Date</th>
                    <th className='th-leave p-3'>End Date</th>
                    <th className='th-leave p-3'>Reason</th>
                    <th className='th-leave p-3'>Mail</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map(c => (
                    <tr key={c.ID}>
                      <td>{c.ID}</td>
                      <td>{c.Name}</td>
                      <td>{c.Type}</td>
                      <td>{c.Sdate}</td>
                      <td>{c.Edate}</td>
                      <td>{c.Reason}</td>
                      <td>{c.Mail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={'← '}
                nextLabel={' →'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-end'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
