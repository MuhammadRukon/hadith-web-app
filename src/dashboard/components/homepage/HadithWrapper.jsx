import React from "react";
import { MdDeleteForever } from "react-icons/md";
import HadithCard from "../../../components/card/HadithCard";
import axios from "axios";
import toast from "react-hot-toast";
import { route } from "../../../routes/Routes";
import Swal from "sweetalert2";

const HadithWrapper = ({ hadiths, setRefetch, refetch }) => {
  const handleDeleteHadith = async (id) => {
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
        const response = await axios.delete(`${route}/hadiths/${id}`, {
          withCredentials: true,
        });
        if (response.status == 200) {
          setRefetch(!refetch);
          toast.success("Deleted successfully");
        } else {
          toast.error("something went wrong");
          console.log(response);
        }
      }
    });
  };

  return (
    <div className="w-full relative  rounded-lg p-4 my-2 space-y-5 shadow-[0_2px_7px_rgba(0,0,0,0.13)] min-h-[calc(100vh-235px)] dark:bg-stone-800">
      {hadiths?.map((hadith) => (
        <>
          <HadithCard key={hadith._id} hadith={hadith} />
          <div
            className="cursor-pointer absolute top-3 right-8"
            onClick={() => handleDeleteHadith(hadith._id)}
          >
            <MdDeleteForever size={30} color="red" />
          </div>
        </>
      ))}
    </div>
  );
};

export default HadithWrapper;
