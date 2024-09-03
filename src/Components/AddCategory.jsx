import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import './Style.css'; // Ensure this path is correct based on your directory structure
import axios from "axios"
function FormExample() {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState();
    const [email, setEmail] = useState();

  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault()
    const responce =    axios.post("http://localhost:3000/auth/add_category",{name,role,mobile,city,email})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
        console.log(responce.data);
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setShowModal(true); 
    }

    setValidated(true);
   
  };
  
  const handleCloseModal = () => setShowModal(false); 


  const handleKeyPress = event => {
    const charCode = event.which ? event.which : event.keyCode;
    // Only allow numbers
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='registration-form'>
      <h3 className='heading'>EMPLOYEE REGISTRATION FORM</h3>
      <Form.Group as={Col} md='12' controlId='validationCustom01'>
        <FloatingLabel controlId='floatingInput' label='Name'  className='floating-label'>
          <Form.Control required type='text' placeholder='Enter Name' name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

     
      <Form.Group as={Col} md='12' controlId='validationCustom02'>
        <FloatingLabel controlId='floatingSelect' label='Select Role' className='floating-label'name="role" onChange={(e) => setRole(e.target.value)}>
          <Form.Select aria-label='Role' required>
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
          <Form.Control required type='text'onKeyPress={handleKeyPress} placeholder='Mobile Number'onChange={(e) => setMobile(e.target.value)}  />
          <Form.Control.Feedback type='invalid'>Please provide a valid city.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom04'>
        <FloatingLabel controlId='floatingInput' label='Enter City' className='floating-label'>
          <Form.Control required  type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />
          <Form.Control.Feedback type='invalid'>Please provide a valid state.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group as={Col} md='12' controlId='validationCustom05'>
        <FloatingLabel controlId='floatingInput' label='Enter Email' className='floating-label'>
          <Form.Control required type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}/>
          <Form.Control.Feedback type='invalid'>Please provide a valid zip.</Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Check
          required
          label='Agree to terms and conditions'
          feedback='You must agree before submitting.'
          feedbackType='invalid'
          className='form-check-label'
        />
      </Form.Group>

      <Button type='submit'>Register</Button>

      {/* Modal for Registration Success */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! Your registration has been successful.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default FormExample;
