import React from "react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="w-4/5 mx-auto text-center">
        <img
          className="rounded-3xl shadow-xl my-10 mx-auto"
          src="https://i.postimg.cc/MHQJJ8by/notFound.jpg"
          alt=""
        />
        <h1 className="text-3xl text-red-500 font-bold">
          404 - Pages Not Found
        </h1>
        <p className="text-gray-500 ">
          oops! The page you're looking for doesn't exist
        </p>
        <div className="my-10">
          <Link
            className="px-6 py-2 bg-green-500 rounded-md text-white "
            to={`/`}
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
