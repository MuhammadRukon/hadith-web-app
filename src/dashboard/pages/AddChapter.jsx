import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddChapter = () => {
  const { register, handleSubmit } = useForm();
  const [books, setBooks] = useState([]);
  const [hadiths, setHadiths] = useState([]);
  const route =
    import.meta.env.VITE_ENVIRONMENT == "development"
      ? import.meta.env.VITE_LOCALHOST
      : import.meta.env.VITE_PROD;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadith-books`);
      // const res = await fetch(`/hadithBook.json`);
      const data = await res.json();
      if (data?.length > 0) {
        setBooks(data);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, []);
  const handlePostData = async (data) => {
    const chapterData = {
      name: {
        en: data.chapterNameEn,
        bn: data.chapterNameBn,
      },
      book_id: data.book_id,
    };
    if(!chapterData.name.en || !chapterData.name.bn || !chapterData.book_id) {
      toast.error("emply fields");
      return;
    }
    try {
      const res = await axios.post(
        `${route}/hadith-books/chapter/add`,
        chapterData,
        {
          withCredentials: true,
        }
      );
      if (res.status == 200) {
        toast.success("Added successfully");
        console.log(res);
      } else {
        toast.error("something went wrong");
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[70.74vh]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => handlePostData(data))}
      >
        <input
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("chapterNameEn")}
          placeholder="Chapter Name - English"
        />
        <input
          className="py-1.5 px-3.5 rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("chapterNameBn")}
          placeholder="Chapter Name - Bangla"
        />

        <select
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("book_id")}
        >
          <option disabled selected>
            Select Book
          </option>
          {books.map((book) => (
            <option value={book._id} key={book._id}>
              {book.name["en"]}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="btn text-white font-semibold py-1 px-3.5 h-10 min-h-0 rounded-md dark:border-stone-700 bg-[#5ab270] hover:bg-[#5ab270] dark:bg-[#24201e]"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddChapter;
