import React from "react";
import useGetBookmarks from "../../hooks/useGetBookmarks";
import HadithCard from "../../components/card/HadithCard";

function Bookmarks() {
  const bookmarks = useGetBookmarks();
  return (
    <div className="min-h-[calc(100vh-170px)] mt-6 container mx-auto px-4 flex flex-col gap-5">
      {bookmarks.length ? (
        bookmarks?.map((bookmark) => (
          <HadithCard key={bookmark._id} hadith={bookmark} />
        ))
      ) : (
        <h2 className="text-white mx-6">No Bookmarks.</h2>
      )}
    </div>
  );
}

export default Bookmarks;
