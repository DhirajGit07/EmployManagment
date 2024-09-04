import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';

const GetLeave = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [sdate, setSdate] = useState('');
  const [edate, setEdate] = useState('');
  const [reason, setReason] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const leaveData = {
        Name: name,
        Type: role,
        Sdate: sdate,
        Edate: edate,
        Reason: reason,
        Mail: mail,
      };

      try {
        const response = await axios.post('http://localhost:8081/add_Leave', leaveData);
        console.log(response);
        if (response.data.Status) {
          toast.success('Leave request submitted successfully!');
        } else {
          toast.error('Failed to submit leave request.');
        }
      } catch (error) {
        toast.error('An error occurred while submitting the request.');
      }
    }

    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='registration-form'>
        <h3 className='heading'>Request For Leave</h3>
       
        <Form.Group as={Col} md='12' controlId='validationCustom01'>
          <FloatingLabel controlId='floatingInput' label='Name' className='floating-label'>
            <Form.Control required type='text' placeholder='Enter Name' name="name" onChange={(e) => setName(e.target.value)} />
            <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='12' controlId='validationCustom02'>
          <FloatingLabel controlId='floatingSelect' label='Select Leave Type' className='floating-label' name="role">
            <Form.Select aria-label='Role' required onChange={(e) => setRole(e.target.value)}>
              <option value=''>Select</option>
              <option value='First Half'>First Half</option>
              <option value='Second Half'>Second Half</option>
              <option value='Funeral Leave'>Funeral Leave</option>
              <option value='Personal Leave'>Personal Leave</option>
              <option value='Sick Leave'>Sick Leave</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Please select a leave type.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='12' controlId='validationCustom03'>
          <FloatingLabel controlId='floatingInput' label='Select Start date' className='floating-label'>
            <Form.Control required type='date' placeholder='Select Start Date' onChange={(e) => setSdate(e.target.value)} />
            <Form.Control.Feedback type='invalid'>Please select a start date.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='12' controlId='validationCustom04'>
          <FloatingLabel controlId='floatingInput' label='Select End Date' className='floating-label'>
            <Form.Control required type='date' placeholder='Select End Date' onChange={(e) => setEdate(e.target.value)} />
            <Form.Control.Feedback type='invalid'>Please select an end date.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md='12' controlId='validationCustom05'>
          <FloatingLabel controlId='floatingInput' label='Leave Reason' className='floating-label'>
            <Form.Control as='textarea' rows={4} required onChange={(e) => setReason(e.target.value)} />
            <Form.Control.Feedback type='invalid'>Please provide a reason.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group as={Col} md='12' controlId='validationCustom04'>
          <FloatingLabel controlId='floatingInput' label='Mail' className='floating-label'>
            <Form.Control required type='mail' placeholder='Your mail' onChange={(e) => setMail(e.target.value)} />
            <Form.Control.Feedback type='invalid'>Please select an Mail</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Button type='submit'>Submit Request</Button>
      </Form>
      <ToastContainer />
    </>
  );
};

export default GetLeave;