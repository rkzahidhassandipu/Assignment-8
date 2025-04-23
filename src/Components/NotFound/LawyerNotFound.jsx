import React from "react";
import { Link } from "react-router";

const LawyerNotFound = ({ id }) => {
  return (
    <div className="h-80 flex items-center">
      <div className="font-mulish w-4/5 mx-auto text-center">
        <h2 className="font-bold text-2xl">No Lawyer Found!!</h2>
        <p className="text-gray-500 my-5">
          No Lawyer Found with this License No
        </p>
        <h4 className="mb-5 text-red-500 font-black">&#174; {id}</h4>
        <Link
          className="bg-green-500 px-4 py-2 rounded-md text-white font-bold cursor-pointer"
          to={`/`}
        >
          <button>View All Lawyer</button>
        </Link>
      </div>
    </div>
  );
};

export default LawyerNotFound;
