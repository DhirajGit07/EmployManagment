import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Modal, Button } from 'react-bootstrap';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

export default function EmpHome() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5); // Number of items per page
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleShow = (card) => {
    setSelectedCard(card);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const offset = currentPage * itemsPerPage;
  const currentItems = categories.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(categories.length / itemsPerPage);

  // Example data for the graph
  const data = [
    { name: 'Jan', Employees: 30 },
    { name: 'Feb', Employees: 45 },
    { name: 'Mar', Employees: 70 },
    { name: 'Apr', Employees: 55 },
    { name: 'May', Employees: 80 },
    { name: 'Jun', Employees: 60 },
  ];

  return (
    <div className='container mt-4 back-side'>
      <div className='row'>
        {/* Card 1 */}
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-people p-3 fs-1'></i>
                <div className="text-end">
                  <h3>230</h3>
                  <p>Employees</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/Employeedb/Get_Leave'>
                About
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-person p-3 fs-1'></i>
                <div className="text-end">
                  <h3>230</h3>
                  <p>Employees</p>
                </div>
              </p>
              <Link className='btn btn-primary' to='/employeedb/ApproveHistory'>
                Employee Details
              </Link>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-columns p-3 fs-1'></i>
                <div className="text-end">
                  <h3>230</h3>
                  <p>Employees</p>
                </div>
              </p>
              <Button variant="primary" onClick={() => handleShow('Approval Details')}>
                Approval Details
              </Button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className='col-sm-6 col-lg-3 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text d-flex align-items-center justify-content-between'>
                <i className='bi bi-speedometer2 p-3 fs-1'></i>
                <div className="text-end">
                  <h3>230</h3>
                  <p>Employees</p>
                </div>
              </p>
              <Button variant="primary" onClick={() => handleShow('Go Salary..')}>
                Go Salary..
              </Button>
            </div>
          </div>
        </div>

        <div className='col-12'>
          <div className='card-T '>
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

      {/* Modal for Graph */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Employees" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
