import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Style.css'; // Ensure this path is correct based on your directory structure
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';

function FormExample() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(""); // New state for salary
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const [validated, setValidated] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setShowPreview(false); 
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Role', role);
      formData.append('MobileNumber', mobile);
      formData.append('City', city);
      formData.append('Email', email);
      formData.append('Salary', salary); // Add salary to form data
      formData.append('Image', image); // Add the image to the form data

      axios.post("http://localhost:8081/add_category", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(result => {
        if (result.data.Status) {
          Swal.fire({
            title: 'Success!',
            text: 'Your registration has been successful.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            navigate('/Admindb/Category'); // Navigate after the alert is closed
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: result.data.Error,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      })
      .catch(err => {
        console.error('Error during Axios request:', err);
        if (err.response) {
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
        } else if (err.request) {
          console.error('Request data:', err.request);
        } else {
          console.error('Error message:', err.message);
        }
      });

      // setShowModal(true);
    }

    setValidated(true);
  };

  // const handleCloseModal = () => setShowModal(false);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='registration-form'>
      <h3 className='heading'>EMPLOYEE REGISTRATION FORM</h3>

      <Form.Group as={Col} md='12' controlId='validationCustom01'>
        <FloatingLabel controlId='floatingInput' label='Name' className='floating-label'>
          <Form.Control required type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom02'>
        <FloatingLabel controlId='floatingSelect' label='Select Role' className='floating-label'>
          <Form.Select aria-label='Role' required onChange={(e) => setRole(e.target.value)}>
            <option value=''>Select Role</option>
            <option value='React Developer'>React Developer</option>
            <option value='Web Development'>Web Development</option>
            <option value='Flutter'>Flutter</option>
            <option value='.NET Developer'>.NET Developer</option>
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom03'>
        <FloatingLabel controlId='floatingInput' label='Mobile No' className='floating-label'>
          <Form.Control required type='text' placeholder='Mobile Number' onChange={(e) => setMobile(e.target.value)} />
          <Form.Control.Feedback type='invalid'>Please provide a valid mobile number.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom04'>
        <FloatingLabel controlId='floatingInput' label='Enter City' className='floating-label'>
          <Form.Control required type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />
          <Form.Control.Feedback type='invalid'>Please provide a valid city.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom05'>
        <FloatingLabel controlId='floatingInput' label='Enter Email' className='floating-label'>
          <Form.Control required type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
          <Form.Control.Feedback type='invalid'>Please provide a valid email.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom07'>
        <FloatingLabel controlId='floatingInput' label='Enter Salary' className='floating-label'>
          <Form.Control required type='number' placeholder='Enter Salary' onChange={(e) => setSalary(e.target.value)} />
          <Form.Control.Feedback type='invalid'>Please provide a valid salary.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom06' className='d-flex align-items-center'>
        <div {...getRootProps()} className='dropzone flex-grow-1'>
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one</p>
        </div>
        <Button 
          variant='primary' 
          className='preview-btn' 
          onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Hide' : 'Preview'}
        </Button>
      </Form.Group>

      {showPreview && image && (
        <Form.Group as={Col} md='12' className='mt-3'>
          <div className='preview-container'>
            <img id='image-preview' src={URL.createObjectURL(image)} alt='Preview' className='image-preview' />
          </div>
        </Form.Group>
      )}

      <Button type='submit' className='mt-3'>ADD NOW</Button>
    </Form>
  );
}

export default FormExample;
