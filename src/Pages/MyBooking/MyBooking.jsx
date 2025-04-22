import React, { useEffect, useState } from "react";
import { getStoreLawyer } from "../../Utility/addToDB";
import { Link, useLoaderData } from "react-router";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import LawyerAppointment from "../../Components/LawyerBooking/LawyerAppointment/LawyerAppointment";

import BookingAppointmentHeader from "../../Components/LawyerBooking/BookingAppointmentHeader/BookingAppointmentHeader";
import Loader from "../../Components/Loading/Loader";
import PriceChart from "../../Components/LawyerBooking/PriceChart/PriceChart";
import RedirectBookPage from "../../Components/redirect/RedirectBookPage";

const MyBooking = () => {
  const [lawyerList, setLawyerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    setLawyerList(true);
    const storeLawData = getStoreLawyer();
    const convertedStorLawData = storeLawData.map((id) => parseInt(id));
    const myLawList = data.filter((law) =>
      convertedStorLawData.includes(law.Id)
    );
    setLawyerList(myLawList);
    setLoading(false);
  }, []);

  const handleRemove = (idToremove) => {
    const updatedList = lawyerList.filter((lawyer) => lawyer.Id !== idToremove);
    setLawyerList(updatedList);
  };

  if (loading) {
    return <Loader />;
  }
  console.log(lawyerList);

  return (
    <div className="w-4/5 mx-auto">
      <div>
      {
        lawyerList.length > 0 && (
          <PriceChart lawyerList={lawyerList} />
        )
      }
      {
        lawyerList.length > 0 && (
          <BookingAppointmentHeader />
        )
      }
        
        {lawyerList.length > 0 ? (
          lawyerList.map((lawyerAppoi) => (
            <LawyerAppointment
              lawyerAppoi={lawyerAppoi}
              onCancel={handleRemove}
            />
          ))
        ) : (
         <RedirectBookPage />
        )}
      </div>
    </div>
  );
};

export default MyBooking;
