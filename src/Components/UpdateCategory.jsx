// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UpdateCategory = () => {
//   const { id } = useParams(); // Get the ID from the URL parameters
//   const [category, setCategory] = useState({ Name: '', Role: '', MobileNumber: '', City: '', Email: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the current category data
//     axios.get(`http://localhost:8081/Category/${id}`)
//       .then(result => {
//         if (result.data.Status) {
//           setCategory(result.data.Result);
//         } else {
//           Swal.fire('Error!', result.data.Error, 'error');
//         }
//       })
//       .catch(err => Swal.fire('Error!', err.message, 'error'));
//   }, [id]);

//   const handleChange = (e) => {
//     setCategory({ ...category, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.put(`http://localhost:8081/Category/${id}`, category)
//       .then(response => {
//         if (response.data.Status) {
//           Swal.fire('Updated!', 'Category updated successfully.', 'success')
//             .then(() => navigate('/Category')); // Redirect to the category page after successful update
//         } else {
//           Swal.fire('Error!', response.data.Error, 'error');
//         }
//       })
//       .catch(err => Swal.fire('Error!', err.message, 'error'));
//   };

//   return (
//     <div className='container'>
//       <h3 className='my-4 '>Update Category</h3>
//       <form onSubmit={handleSubmit}>
//         <div className='mb-3'>
//           <label className='form-label'>Name</label>
//           <input
//             type='text'
//             name='Name'
//             value={category.Name}
//             onChange={handleChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='mb-3'>
//           <label className='form-label'>Role</label>
//           <input
//             type='text'
//             name='Role'
//             value={category.Role}
//             onChange={handleChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='mb-3'>
//           <label className='form-label'>Mobile Number</label>
//           <input
//             type='text'
//             name='MobileNumber'
//             value={category.MobileNumber}
//             onChange={handleChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='mb-3'>
//           <label className='form-label'>City</label>
//           <input
//             type='text'
//             name='City'
//             value={category.City}
//             onChange={handleChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <div className='mb-3'>
//           <label className='form-label'>Email</label>
//           <input
//             type='email'
//             name='Email'
//             value={category.Email}
//             onChange={handleChange}
//             className='form-control'
//             required
//           />
//         </div>
//         <button type='submit' className='btn btn-primary'>Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateCategory;
