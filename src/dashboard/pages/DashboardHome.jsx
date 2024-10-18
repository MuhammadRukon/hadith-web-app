import { Link, useParams } from "react-router-dom";
import BookTab from "../components/homepage/BookTab";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { route } from "../../routes/Routes";
import toast from "react-hot-toast";
import useGetSubjects from "../../hooks/useGetSubjects";
import useGetBooks from "../../hooks/useGetBooks";
const DashboardHome = () => {
  const { id } = useParams();
  const [refetch, setRefetch] = useState(false);
  const bookArray = useGetBooks(refetch);
  const subjectsArray = useGetSubjects(refetch);

  const handleDeleteBook = (id) => {
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
        const response = await axios.delete(`${route}/hadith-books/${id}`, {
          withCredentials: true,
        });
        if (response.status == 200) {
          setRefetch((val) => !val);
          toast.success(response.message);
        } else {
          toast.error("something went wrong");
          console.log(response);
        }
      }
    });
  };

  const handleDeleteSubject = (id) => {
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
        const response = await axios.delete(`${route}/subjects/${id}`, {
          withCredentials: true,
        });
        if (response.status == 200) {
          setRefetch((val) => !val);
          toast.success(response.message);
        } else {
          toast.error("something went wrong");
          console.log(response);
        }
      }
    });
  };
  return (
    <div className="min-h-[73.49vh]">
      <p className="text-white text-xl font-bold px-3">Hadith books</p>
      {bookArray.length ? (
        bookArray?.map((book) => (
          <div
            key={book._id}
            className="flex items-center justify-between gap-2"
          >
            <Link className="w-full" to={`books/${book._id}`}>
              <BookTab item={book} />
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (!book?.hadith_range.en) {
                  handleDeleteBook(book._id);
                } else {
                  toast.error("Cannot delete. Book has hadith/s");
                }
              }}
            >
              <MdDeleteForever size={30} color="red" />
            </div>
          </div>
        ))
      ) : (
        <p className="px-3  mt-2 text-white">No books found</p>
      )}

      <p className="text-white text-xl font-bold px-3 mt-6">Subjects</p>
      {subjectsArray.length ? (
        subjectsArray?.map((subject) => (
          <div
            key={subject?._id}
            className="flex items-center justify-between gap-3"
          >
            <Link className="w-full" to={`subjects/${subject._id}`}>
              <BookTab item={subject} />
            </Link>

            <div
              className="cursor-pointer"
              onClick={() => {
                if (!subject?.hadith_range.en) {
                  handleDeleteSubject(subject?._id);
                } else {
                  toast.error("Cannot delete. Subject has hadith/s");
                }
              }}
            >
              <MdDeleteForever size={30} color="red" />
            </div>
          </div>
        ))
      ) : (
        <p className="px-3  mt-2 text-white">No Subjects found</p>
      )}
    </div>
  );
};

export default DashboardHome;
