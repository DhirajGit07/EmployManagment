import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='px-5 m-5'>
      <div className='d-flex justify-content-center'>
        <h3>Category Page</h3>
      </div>
   
      <Link to="/Admindb/add_category" className='btn btn-success m-4'>Add_Category</Link>
    </div>
  )
}

export default Category
