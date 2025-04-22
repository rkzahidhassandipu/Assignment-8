import React from "react";
import { Link, NavLink } from "react-router";

const Navlinks = () => {
  return (
    <div>
      <ul className="menu px-1 flex flex-col lg:flex-row text-xl gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b border-green-500 py-2 px-5"
              : "hover:text-green-600 py-2 px-5"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/mybookings"
          className={({ isActive }) =>
            isActive
              ? "border-b border-green-500 py-2 px-5"
              : "hover:text-green-600 py-2 px-5"
          }
        >
          My-Bookings
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "border-b border-green-500 py-2 px-5"
              : "hover:text-green-600 py-2 px-5"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive
              ? "border-b border-green-500 py-2 px-5"
              : "hover:text-green-600 py-2 px-5"
          }
        >
          Contact Us
        </NavLink>
      </ul>
    </div>
  );
};

export default Navlinks;
