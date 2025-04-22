import React, { useState } from "react";
import Card from "../Card/Card";

const ToggleBtn = ({ LawExpert }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? LawExpert : LawExpert.slice(0, 6);

  const toggleShowAll = () => setShowAll((pre) => !pre);
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {visibleCards.map((law) => (
          <Card key={law.Id} law={law} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={toggleShowAll} className="btn rounded-4xl bg-green-500 border-none font-semibold text-xl text-white">
        {showAll ? 'View Less Lawyer' : 'View All Lawyer'}
        </button>
      </div>
    </div>
  );
};

export default ToggleBtn;
