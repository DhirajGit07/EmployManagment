import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Swal from 'sweetalert2';
import { Modal, Button, Form } from 'react-bootstrap';


const Category = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedCategory, setUpdatedCategory] = useState({ Name: '', Role: '', MobileNumber: '', City: '', Email: '' });
  const [image, setImage] = useState(null); // New state to handle the image upload

  const roles = ['React Developer', 'Web Development', 'Flutter', '.NET Developer'];

  useEffect(() => {
    axios.get('http://localhost:8081/Category')
      .then(result => {
        if (result.data.Status) {
          setCategories(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const filteredCategories = categories.filter(category =>
    category.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.Role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.MobileNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.City.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.Email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowModal = (category) => {
    setSelectedCategory(category);
    setUpdatedCategory({
      Name: category.Name,
      Role: category.Role,
      MobileNumber: category.MobileNumber,
      City: category.City,
      Email: category.Email,
    });
    setImage(null); // Reset the image state when opening the modal
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleUpdateChange = (e) => {
    setUpdatedCategory({ ...updatedCategory, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Name', updatedCategory.Name);
    formData.append('Role', updatedCategory.Role);
    formData.append('MobileNumber', updatedCategory.MobileNumber);
    formData.append('City', updatedCategory.City);
    formData.append('Email', updatedCategory.Email);
    if (image) {
      formData.append('Image', image); // Append the image only if it is selected
    }

    axios.put(`http://localhost:8081/Category/${selectedCategory.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        if (response.data.Status) {
          setCategories(categories.map(cat => cat.id === selectedCategory.id ? { ...cat, ...updatedCategory, Image: response.data.ImagePath } : cat));
          Swal.fire('Updated!', 'Category updated successfully.', 'success');
          handleCloseModal();
        } else {
          Swal.fire('Error!', response.data.Error, 'error');
        }
      })
      .catch(err => Swal.fire('Error!', err.message, 'error'));
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#007bff',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8081/Category/${id}`)
          .then(response => {
            if (response.data.Status) {
              setCategories(categories.filter(category => category.id !== id));
              Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
            } else {
              Swal.fire('Error!', response.data.Error, 'error');
            }
          })
          .catch(err => Swal.fire('Error!', err.message, 'error'));
      }
    });
  };

  // PopUp Image When User Click on Table Image***************
  const handleImageClick = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: 'Category Image',
      imageWidth: 450,  // Set the desired width here
      imageHeight: 500,

    });
  };


  // ************Payment GetWay**************
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // This data should ideally come from your backend API
    const options = {
      key: 'rzp_test_w9jSiPHiOpvDzj', // Enter the Key ID generated from the Dashboard
      amount: '50000', // Amount is in paise. Convert 500 INR to 50000 paise
      currency: 'INR',
      name: 'Dhiraj Hatwar',
      description: 'Test Transaction',
      // Your logo URL
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can also verify the payment on your server here by sending the payment ID
      },
      prefill: {
        name: 'Dhiraj Hatwar',
        email: 'dhiraj2000hatwar@gmail.com',
        contact: '8600770710',
      },
      notes: {
        address: 'Dhiraj Company Happy Stret Nandanwan,Nagpur',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className='px-5 m-4'>
      <h3 className='d-flex justify-content-center mb-4'>Employee Page</h3>
      <Link to="/Admindb/add_category" className='btn btn-success mb-4'>
        <i className="bi bi-person-plus"></i> Add Employee
      </Link>
      <div className='d-flex justify-content-end mb-3'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='form-control w-25'
        />
      </div>
      <div>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Mobile Number</th>
              <th>City</th>
              <th>Email</th>
              <th>Image</th>
              <th>Actions</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              currentItems.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.Name}</td>
                  <td>{c.Role}</td>
                  <td>{c.MobileNumber}</td>
                  <td>{c.City}</td>
                  <td>{c.Email}</td>
                  <td>
                    <img
                      src={`http://localhost:8081/uploads/${c.Image}`}
                      alt="category"
                      style={{ width: '50px', height: '50px', borderRadius: "10px", cursor: 'pointer' }}
                      onClick={() => handleImageClick(`http://localhost:8081/uploads/${c.Image}`)} // Add onClick event
                    />
                  </td>
                  <td>
                    <button
                      className='btn btn-outline-primary mx-2'
                      onClick={() => handleShowModal(c)}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-outline-danger'
                      onClick={() => handleDelete(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-outline-info'
                      onClick={handlePayment}>Pay Now</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Pagination className="justify-content-end">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>

      {/*************** Modal for updating category ************8*/}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={updatedCategory.Name}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="Role"
                value={updatedCategory.Role}
                onChange={handleUpdateChange}
                required
              >
                <option value="">Select Role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="MobileNumber"
                value={updatedCategory.MobileNumber}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="City"
                value={updatedCategory.City}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                value={updatedCategory.Email}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="Image"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Category;
