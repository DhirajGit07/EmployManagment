import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Swal from 'sweetalert2';
import { Eye } from 'lucide-react';

const ApprovalStart = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/getLeave')
      .then(result => {
        if (result.data.Status) {
          setCategories(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredCategories = categories.filter(item =>
    item.Name.toLowerCase().includes(searchQuery) ||
    item.Type.toLowerCase().includes(searchQuery) ||
    item.Reason.toLowerCase().includes(searchQuery) ||
    item.Mail.toLowerCase().includes(searchQuery)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewStatus = (id) => {
    const selectedItem = categories.find(item => item.ID === id);

    if (selectedItem) {
      Swal.fire({
        title: 'Leave Request Details',
        html: `
          <hr />
          <div style="text-align: left;">
          <strong>Name:</strong> ${selectedItem.Name} <br>
          <strong>Type:</strong> ${selectedItem.Type} <br>
          <strong>Start Date:</strong> ${selectedItem.Sdate} <br>
          <strong>End Date:</strong> ${selectedItem.Edate} <br>
          <strong>Reason:</strong> ${selectedItem.Reason} <br>
          <strong>Mail:</strong> ${selectedItem.Mail} <br>
          </div>
          <hr />
        `,
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Reject',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545',
        reverseButtons: true,
      }).then((result) => {
        const status = result.isConfirmed ? 'Accepted' : 'Rejected';
        if (result.isConfirmed || result.dismiss === Swal.DismissReason.cancel) {
          axios.post('http://localhost:8081/updateLeaveStatus', { id, Status: status })
            .then(response => {
              if (response.data.Status) {
                Swal.fire({
                  title: `${status}!`,
                  text: `Do you want to send an email to ${selectedItem.Name}?`,
                  icon: 'success',
                  showCancelButton: true,
                  confirmButtonText: 'Send Email',
                  cancelButtonText: 'Cancel',
                  confirmButtonColor: '#007bff',
                  cancelButtonColor: '#dc3545',
                }).then((sendMailResult) => {
                  if (sendMailResult.isConfirmed) {
                    axios.post('http://localhost:8081/updateLeaveStatus', { id, Status: status }) // Reuse the same API to send the email
                      .then(emailResponse => {
                        if (emailResponse.data.Status) {
                          Swal.fire('Email Sent!', '', 'success');
                        } else {
                          Swal.fire('Error!', emailResponse.data.Error, 'error');
                        }
                      })
                      .catch(err => Swal.fire('Error!', err.message, 'error'));
                  }
                });
              } else {
                Swal.fire('Error!', response.data.Error, 'error');
              }
            })
            .catch(err => Swal.fire('Error!', err.message, 'error'));
        }
      });
    }
  };

  return (
    <div className='px-5 m-4'>
      <div className='d-flex justify-content-center'>
        <h3>Approval Page</h3>
      </div>

      <div className='mt-4'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearch}
          className='form-control w-25 mb-3'
        />

        <table className='table border shadow'>
          <thead>
            <tr>
              <th className='th-leave p-3'>Name</th>
              <th className='th-leave p-3'>Type</th>
              <th className='th-leave p-3'>Start Date</th>
              <th className='th-leave p-3'>End Date</th>
              <th className='th-leave p-3'>Reason</th>
              <th className='th-leave p-3'>Mail</th>
              <th className='th-leave p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(c => (
              <tr key={c.ID}>
                <td>{c.Name}</td>
                <td>{c.Type}</td>
                <td>{c.Sdate}</td>
                <td>{c.Edate}</td>
                <td>{c.Reason}</td>
                <td>{c.Mail}</td>
                <td>
                  <button className='btn btn-outline-primary mx-2' onClick={() => handleViewStatus(c.ID)}>
                    <Eye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='d-flex justify-content-end'>
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </Pagination.Prev>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </Pagination.Next>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ApprovalStart;
