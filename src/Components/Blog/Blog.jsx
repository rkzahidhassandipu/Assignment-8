import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const Blog = ({blog}) => {
    const {questions, Answer, date} = blog
  return (
    <div className='w-4/5 mx-auto my-4'>
      <div className='border border-gray-400 bg-gray-200 px-4 py-5 rounded-2xl'>
        <h1 className='font-bold text-xl py-3 border-b border-dashed border-gray-500'>{questions}</h1>
        <p className='py-5 border-b border-dashed border-gray-500'><span className='text-blue-400 font-semibold'>Answer:</span> {Answer}</p>
        <div className='text-gray-500 pt-5'>
        <FaCalendarAlt className='inline mr-3' />
            <p className='inline'>Added at{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
