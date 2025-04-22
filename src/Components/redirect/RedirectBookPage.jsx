import React from 'react'
import { Link } from 'react-router'

const RedirectBookPage = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <div className="text-center mt-20 mb-10 font-mulish">
      <h1 className="font-mulish text-3xl font-extrabold mb-5">You Have not booked any appointment ye</h1>
      <p className='text-gray-500'>
      Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
      </p>
    </div>
       <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">No appointments found.</p>
            <Link className='cursor-pointer' to="/">
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book an Appointment
              </button>
            </Link>
          </div>
    </div>
  )
}

export default RedirectBookPage
