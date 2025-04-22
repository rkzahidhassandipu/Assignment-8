import React from "react";
import { Link } from "react-router";
import AppointmentBtn from "../AppointmentBtn/AppointmentBtn";

const SingleLawyarDetails = ({ data }) => {
  const {
    Id,
    ExperienceYear,
    Name,
    CategoryExpert,
    LicenseNumber,
    AvailabilityDay,
    ConsultationFee,
    Image,
  } = data;
  return (
    <div>
      <div className="card border rounded-2xl border-gray-300 w-full font-mulish">
        <div className="flex items-center">
          <div className="pl-6">
            <img className="w-56 rounded-xl" src={Image} alt="" />
          </div>
          <div className="card-body">
            <div className="my-2">
              <p className="text-blue-500 bg-blue-100 px-5 inline py-2 rounded-4xl">
                {ExperienceYear}+ Years Experience
              </p>
            </div>
            <h2 className="card-title font-bold text-2xl">{Name}</h2>
            <div className="my-2">
              <p className="text-base font-medium text-gray-500 inline">
                {CategoryExpert}
              </p>
              <p className="ml-5 text-base font-medium text-gray-500 inline">
                &#174; License No: {LicenseNumber}
              </p>
            </div>
            <div>
              <span className="text-gray-500 font-bold text-base">
                Availability:{" "}
              </span>
              <span>
                {AvailabilityDay?.map((day, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs mx-3"
                  >
                    {day}
                  </span>
                ))}
              </span>
            </div>

            <div className="font-bold text-base">
              <p className="text-gray-500">
                Consultation Fee:{" "}
                <span className="text-green-500">Taka: {ConsultationFee}</span>
              </p>
            </div>
            {/* <div className="card-actions">
              <button className="btn w-full border border-blue-500 text-blue-500 rounded-4xl font-bold hover:bg-blue-500 duration-500 hover:text-white">
                <Link to={`/singleLawyar/${Id}`}>View Details</Link>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="my-10 ">
        <AppointmentBtn data={data} />
      </div>
    </div>
  );
};

export default SingleLawyarDetails;
