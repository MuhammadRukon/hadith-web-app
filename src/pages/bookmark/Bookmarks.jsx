import React from "react";
import useGetBookmarks from "../../hooks/useGetBookmarks";
import HadithCard from "../../components/card/HadithCard";

function Bookmarks() {
  const bookmarks = useGetBookmarks();
  return (
    <div className="min-h-[calc(100vh-170px)] mt-6 container mx-auto px-4 flex flex-col gap-5">
      {bookmarks?.map((bookmark) => (
        <HadithCard key={bookmark._id} hadith={bookmark} />
      ))}
    </div>
  );
}

export default Bookmarks;
