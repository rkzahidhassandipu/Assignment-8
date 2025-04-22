import React from "react";
import { Link } from "react-router";

const Card = ({ law }) => {
  const {
    Id,
    ExperienceYear,
    Name,
    CategoryExpert,
    LicenseNumber,
    AvailabilityDay,
    ConsultationFee,
    Image,
  } = law;
  return (
    <div>
      <div className="card border rounded-2xl border-gray-300 w-full font-mulish">
        <div className="flex items-center">
          <div className="pl-6">
            <img className="w-56 rounded-xl" src={Image} alt="" />
          </div>
          <div className="card-body">
            <div className="">
              <p className="text-green-500 bg-green-100 px-5 inline py-2 rounded-4xl mr-3">
                Available
              </p>
              <p className="text-blue-500 bg-blue-100 px-5 inline py-2 rounded-4xl">
                {ExperienceYear}+ Years Experience
              </p>
            </div>
            <h2 className="card-title font-bold text-2xl">{Name}</h2>
            <p className="text-base font-medium text-gray-500">
              {CategoryExpert}
            </p>
            <p className=" text-base font-medium text-gray-500">
              &#174; License No: {LicenseNumber}
            </p>
            <div className="card-actions">
              <Link
                className="btn w-full border border-blue-500 text-blue-500 rounded-4xl font-bold hover:bg-blue-500 duration-500 hover:text-white"
                to={`/singleLawyar/${Id}`}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
