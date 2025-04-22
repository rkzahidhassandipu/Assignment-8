import React from "react";
import LawyerHeader from "./LawyerHeader/LawyerHeader";
import ToggleBtn from "./ToggleBtn/ToggleBtn";

const LawyerSection = ({ LawExpert }) => {
  return (
    <div className="w-4/5 mx-auto">
      <LawyerHeader />
      <ToggleBtn LawExpert={LawExpert} />
    </div>
  );
};

export default LawyerSection;
