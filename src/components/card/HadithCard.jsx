import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import AddBookmark from "../../api/AddBookmark";
import useGetBookmarks from "../../hooks/useGetBookmarks";
import {
  addBookmark,
  deleteBookmark,
  setBookmarks,
} from "../../redux/features/bookmarkSlice";

const HadithCard = ({ hadith }) => {
  const { lang } = useSelector((state) => state.language);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { user, handleToggleRefetch, refetch } = useContext(AuthContext);
  const res = useGetBookmarks();
  const dispatch = useDispatch();
  // Update Redux bookmarks when new bookmarks are fetched
  useEffect(() => {
    if (res) {
      const bookmarksId = res.map((bookmark) => bookmark._id);
      dispatch(setBookmarks(bookmarksId));
    }
  }, [res, refetch]);
  // Derive bookmarked state directly from Redux
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks.includes(hadith?._id)
  );
  const handleBookmark = async (id) => {
    if (!user) {
      toast("Please login to bookmark");
    } else {
      let response;
      if (isBookmarked) {
        dispatch(deleteBookmark(id)); // Remove from Redux
        setIsBookmarked(false);
        response = await AddBookmark({ hadith: id, email: user.email }); // Ensure API removes
      } else {
        dispatch(addBookmark(id)); // Add to Redux
        response = await AddBookmark({ hadith: id, email: user.email });
        setIsBookmarked(true); // Ensure API adds
      }

      // Optionally refetch only if there's an issue or need for server validation
      if (response) {
        handleToggleRefetch();
      }
    }
  };

  return (
    <div className="tracking-wider bg-[#fff9ef] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-stone-900 dark:text-[#dadada] rounded-lg p-5 text-base lg:text-lg">
      <p>
        {lang === "en" && "Narrated by"} {hadith.narrator[lang]}{" "}
        {lang === "bn" && "থেকে বর্ণিত"}:
      </p>
      <div className="flex flex-col-reverse lg:flex-row leading-relaxed gap-6 text-lg lg:text-xl my-4">
        <p className="text-left flex-1">{hadith.text[lang]}</p>
        <p className="text-right flex-1 text-xl lg:text-2xl">
          {hadith.text.ar}
        </p>
      </div>
      <div className="flex justify-start gap-4 items-center">
        <p className="w-fit text-sm lg:text-base flex items-center gap-3">
          Authenticity:{" "}
          <span
            className="py-0.5 px-2 text:xs lg:text-sm rounded-md text-black font-bold"
            style={{ background: hadith.colorCode }}
          >
            {hadith?.authenticity[lang]}
          </span>
        </p>
        <span
          className="cursor-pointer"
          onClick={() => handleBookmark(hadith._id)}
        >
          <FaHeart color={isBookmarked ? "#f3c556" : "white"} />{" "}
          {/* Use global bookmark state */}
        </span>
      </div>
    </div>
  );
};

export default HadithCard;
