import React from "react";
import { Link } from "react-router";

const Navlinks = () => {
  return (
    <div>
      <ul className="menu px-1 flex flex-col lg:flex-row text-xl gap-6">
        <Link className="hover:text-green-600 duration-700" to={`/`}>Home</Link>
        <Link className="hover:text-green-600 duration-700" to={`mybookings`}>My-Bookings</Link>
        <Link className="hover:text-green-600 duration-700" to={"blogs"}>Blogs</Link>
        <Link className="hover:text-green-600 duration-700" to={"contactus"}>Contact Us</Link>
      </ul>
    </div>
  );
};

export default Navlinks;
