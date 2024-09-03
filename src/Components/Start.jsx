import React from 'react'

function Start() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className="p-3 rounded w-25 border loginform">
            <h2>Login As</h2>
            <div className='d-flex justify-content-between mt-5 mb-2'>
                <button type='button' className='btn btn-primary'>Employee</button>
                <button type='button' className='btn btn-success'>Admin</button>
            </div>
        </div>
      
    </div>
  )
}

export default Start
