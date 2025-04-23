import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'
import Blog from '../../Components/Blog/Blog'
import Loader from '../../Components/Loading/Loader'

const Blogs = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const blogs = useLoaderData();

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      setLoading(false); // Set loading to false once blogs data is available
    }
  }, [blogs]); // Effect runs when blogs data is updated

  return (
    <div className='w-4/5 mx-auto'>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        blogs.map(blog => <Blog key={blog.id} blog={blog} />) // Render blogs once data is loaded
      )}
    </div>
  );
}

export default Blogs;
