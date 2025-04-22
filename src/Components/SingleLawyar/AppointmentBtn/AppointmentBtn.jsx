import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  addToStoreDB,
  getStoreLawyer
} from "../../../Utility/addToDB";
import { useNavigate } from "react-router";





const AppointmentBtn = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const { Id , Name } = data;

  useEffect(() => {
    const storLawyerData = getStoreLawyer();
    if (storLawyerData.includes(Id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [Id]);

  const handleAppointment = () => {
    const storLawyerData = getStoreLawyer();
    if(storLawyerData.includes(Id)){
      toast.warning(`${Name} is already scheduled.`);
    }
    else{
      addToStoreDB(Id);
      toast.success(`Appointment scheduled for ${Name} `);
      navigate("/mybookings");
    }
    
    setIsAdded(!isAdded);
  };

  return (
    <div className="border border-gray-200 rounded-2xl text-center px-10 py-10">
      <h1 className="text-3xl font-bold text-center border-b border-dashed pb-3 border-gray-500">
        Book an Appointment
      </h1>
      <div className="flex justify-between py-3">
        <h1 className="font-bold">Availability: </h1>
        <h1 className="bg-green-100 border border-green-300 px-4 py-1 rounded-2xl text-green-500">
          Lawyer Available Today
        </h1>
      </div>
      <div className="border-t border-gray-300 mb-6"></div>
      <p className="text-left bg-amber-100 text-amber-500 inline px-5 rounded-3xl py-1">
        Due to high patient volume, we are currently accepting appointments for
        today only. We appreciate your understanding and cooperation.
      </p>
      <div className="mt-8  w-full">
          <button
            onClick={handleAppointment}
            className="bg-green-500 text-white rounded-3xl mt-7 w-full py-2 px-6 font-bold cursor-pointer "
          >
            {/* {isAdded ? "Cancel Appointment" : "Book Appointment Now"} */}
            Book Appointment Now
          </button>
      </div>
    </div>
  );
};

export default AppointmentBtn;
