import React from "react";
import HadithCard from "../card/HadithCard";

const HadithWapper = ({ hadiths }) => {
  return (
    <div className="w-full rounded-lg p-4 my-2 space-y-5 shadow-[0_2px_7px_rgba(0,0,0,0.13)] min-h-[calc(100vh-235px)] dark:bg-stone-800">
      {hadiths.length ? (
        hadiths?.map((hadith) => (
          <HadithCard key={hadith._id} hadith={hadith} />
        ))
      ) : (
        <p className="text-white">No hadith found.</p>
      )}
    </div>
  );
};

export default HadithWapper;
