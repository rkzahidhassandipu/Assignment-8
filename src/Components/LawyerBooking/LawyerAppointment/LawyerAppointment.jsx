import React from "react";
import { removeFromStoreDB } from "../../../Utility/addToDB";
import { toast } from "react-toastify";

const LawyerAppointment = ({ lawyerAppoi, onCancel }) => {
  const { Id, CategoryExpert, Name, ConsultationFee } = lawyerAppoi;

  // const [isAdded, setIsAdded] = useState(false)

  const handleAppointment = () => {
    removeFromStoreDB(Id);
    if (onCancel) {
      onCancel(Id);
      toast.error("Appointment cancel!")
    }
  };

  return (
    <div className="w-4/5 mx-auto my-5 border font-mulish rounded-2xl border-gray-300 py-6 px-6">
      <div className="flex justify-between items-center border-b border-dashed pb-3 border-gray-500">
        <div>
          <p className="text-xl font-bold mb-2">{Name}</p>
          <p className="text-gray-500">{CategoryExpert}</p>
        </div>
        <p className="text-gray-500">
          Appointment Fee : {ConsultationFee} Taka
        </p>
      </div>
      <button
        className="my-4 w-full border rounded-3xl text-red-500 hover:bg-red-500 hover:text-white duration-700 cursor-pointer py-2 border-red-500"
        onClick={handleAppointment}
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default LawyerAppointment;
