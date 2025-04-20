import React from "react";
import { Link } from "react-router";
import Logo from "../Logo/Logo";
import Navlinks from "../NavLinks/Navlinks";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm py-2">
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Navlinks />
            </div>
          </div>
          <Link to={`/`} className="text-xl flex items-center gap-3 font-bold">
            <Logo />
            <h1>Law.BD</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Navlinks />
        </div>
        <div className="navbar-end">
          <a className="bg-green-600 rounded-3xl text-base px-5 py-3 font-semibold text-white">Contact Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
