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
import { useLocation } from "react-router-dom";
import { AppContext } from "../../provider/AppContext";

const HadithCard = ({ hadith }) => {
  const { lang } = useSelector((state) => state.language);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { user, handleToggleRefetch, refetch } = useContext(AuthContext);
  const { theme } = useContext(AppContext);
  const res = useGetBookmarks();
  const dispatch = useDispatch();
  const location = useLocation();

  const showBookmark = !location.pathname.includes("dashboard");
  useEffect(() => {
    if (res) {
      const bookmarksId = res.map((bookmark) => bookmark._id);
      dispatch(setBookmarks(bookmarksId));
    }
  }, [res, refetch]);

  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks.includes(hadith?._id)
  );
  const handleBookmark = async (id) => {
    if (!user) {
      toast("Please login to bookmark");
    } else {
      let response;
      if (isBookmarked) {
        dispatch(deleteBookmark(id));
        setIsBookmarked(false);
        response = await AddBookmark({ hadith: id, email: user.email }); // Ensure API removes
      } else {
        dispatch(addBookmark(id));
        response = await AddBookmark({ hadith: id, email: user.email });
        setIsBookmarked(true);
      }

      if (response) {
        handleToggleRefetch();
      }
    }
  };

  return (
    <div className="tracking-wider bg-[#fff9ef] shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-stone-900 dark:text-[#dadada] rounded-lg p-5 text-base lg:text-lg">
      <p className="bg-[#fff3df] dark:bg-stone-800 w-fit py-2 px-4 rounded-lg">
        {lang === "en" && "Narrated by"} {hadith.narrator[lang]}{" "}
        {lang === "bn" && "থেকে বর্ণিত"}:
      </p>
      <div className="flex flex-col-reverse overflow-hidden lg:flex-row leading-relaxed gap-6 text-lg lg:text-xl my-4">
        <p className="text-left flex-1">{hadith.text[lang]}</p>
        <p className="text-right flex-1 text-xl lg:text-2xl">
          {hadith.text.ar}
        </p>
      </div>
      <div className="flex justify-start gap-4 items-center">
        <p className="w-fit text-sm lg:text-base flex items-center gap-3">
          Authenticity:{" "}
          <span
            className="py-1 px-2 text:xs lg:text-xs rounded-md text-white font-bold"
            style={{ background: hadith.colorCode }}
          >
            {hadith?.authenticity[lang]}
          </span>
        </p>
        {showBookmark && (
          <span
            className="cursor-pointer"
            onClick={() => handleBookmark(hadith._id)}
          >
            <FaHeart color={isBookmarked ? "red" : "#f3c556"} />
          </span>
        )}
      </div>
    </div>
  );
};

export default HadithCard;
