import axios from "axios";
import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { route } from "../../../routes/Routes";

const ChapterTab = ({
  item,
  setChapterId,
  setBookId,
  chapterId,
  setRefetch,
}) => {
  const { id } = useParams();
  const { lang } = useSelector((state) => state.language);
  useEffect(() => {
    setBookId(id);
    setChapterId(item?.chapters[0]?._id);
  }, [id]);

  const handleDeleteChapter = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${route}/chapters/${id}`, {
          withCredentials: true,
        });
        if (response.status == 200) {
          setRefetch((val) => !val);
          toast.success("Deleted successfully");
        } else {
          toast.error("something went wrong");
          console.log(response);
        }
      }
    });
  };
  return (
    <>
      {item?.chapters?.map((chapter) => {
        return (
          <div
            key={chapter?._id}
            className="flex items-center justify-between mt-2 gap-3 cursor-pointer"
          >
            <p
              className={`${
                chapterId == chapter?._id
                  ? "bg-[#fcfaf6] dark:bg-[#100e0d]"
                  : "dark:bg-[#282423]"
              } focus:outline-none capitalize px-3 py-2 w-full text-white text-xs md:text-sm shadow-[0_2px_7px_rgba(0,0,0,0.19)] dark:shadow-none rounded-lg `}
              onClick={() => setChapterId(chapter?._id)}
            >
              {chapter?.name[lang]}
            </p>
            <div
              className={`${
                chapterId == chapter?._id ? " text-[red]" : "text-[#110404]"
              } text-xl md:text-2xl `}
              key={chapter?._id}
              onClick={() => {
                console.log(chapter, item, "chapter, item");
              }}
            >
              <MdDeleteForever />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ChapterTab;
