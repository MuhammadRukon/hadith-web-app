import axios from "axios";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddHadith = () => {
  const { register, handleSubmit , reset} = useForm();
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [bookId, setBookId] = useState("");
  const [grade, setGrade] = useState("");
  const grades = [
    {
      en: "Sahih",
      bn: "সহিহ",
      id: 1,
      colorCode: "#008000",
    },
    {
      en: "Da'if",
      bn: "দুর্বল",
      id: 2,
      colorCode: "#FFFF00",
    },
    {
      en: "Hasan",
      bn: "হাসান",
      id: 3,
      colorCode: "#90EE90",
    },
    {
      en: "Mawdu",
      bn: "জাল",
      id: 4,
      colorCode: "#FF0000",
    },
    {
      en: "Other",
      bn: "অন্যান্য",
      id: 5,
      colorCode: "#E5E4E2",
    },
  ];
  const route =
    import.meta.env.VITE_ENVIRONMENT == "development"
      ? import.meta.env.VITE_LOCALHOST
      : import.meta.env.VITE_PROD;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/hadith-books`);
      // const res = await fetch(`/hadithBook.json`);

      const bookData = await res.json();
      if (bookData?.length > 0) {
        setBooks(bookData);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res2 = await fetch(`${route}/chapters/${bookId}`);
      const chapterData = await res2.json();
      console.log(chapterData, "chapterData");
      if (chapterData?.length > 0) {
        setChapters(chapterData);
      } else {
        setChapters([]);
      }
    };
    bookId && fetchData();
  }, [bookId]);

  useEffect(() => {
    const fetchData = async () => {
      const res3 = await fetch(`${route}/subjects`);
      const subjectData = await res3.json();

      if (subjectData?.status == 200) {
        setSubjects(subjectData?.response);
      } else {
        setSubjects([]);
      }
    };
    fetchData();
  }, []);

  const handlePostData = async (data) => {
    const hadithData = {
      text: {
        en: data.textEn,
        bn: data.textBn,
      },
      authenticity: {
        en: grade.en,
        bn: grade.bn,
      },
      narrator: {
        en: data.narratorEn,
        bn: data.narratorBn,
      },
      colorCode: grade.colorCode,
      chapter_id: data.chapter_id,
      book_id: data.book_id,
      subject_id: data.subject_id,
    };
    if (
      hadithData.text.en == "" ||
      hadithData.text.bn == "" ||
      hadithData.narrator.en == "" ||
      hadithData.narrator.bn == "" ||
      hadithData.authenticity.en == "" ||
      hadithData.authenticity.bn == "" ||
      hadithData.chapter_id == "" ||
      hadithData.book_id == "" ||
      hadithData.subject_id == ""||
      hadithData.colorCode == ""
    ) {
      return toast.error("emply fields");
    }
    try {
      const res = await axios.post(`${route}/hadiths`, hadithData, {
        withCredentials: true,
      });
      if (res.status == 200) {
        toast.success("Added successfully");
        console.log(res);
  // reset()
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[70.74vh]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => handlePostData(data))}
      >
        <textarea
          className="py-1.5 resize-none px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("textEn")}
          placeholder="Hadith - English"
        />
        <textarea
          className="py-1.5 px-3.5 resize-none rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("textBn")}
          placeholder="Hadith - Bangla"
        />
        <select
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          onChange={(e) =>
            setGrade(grades.find((grade) => grade.id == e.target.value))
          }
        >
          <option disabled selected>
            Select Authenticity - English
          </option>
          {grades.map((grade, index) => (
            <option value={grade.id} key={index}>
              {grade.en}
            </option>
          ))}
        </select>

        {/* narrator */}
        <input
          className="py-1.5 px-3.5 resize-none rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("narratorEn")}
          placeholder="Narrator - Bangla"
        />
        <input
          className="py-1.5 px-3.5 resize-none rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("narratorBn")}
          placeholder="Narrator - Bangla"
        />
        {/* book  */}
        <select
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("book_id")}
          onChange={(e) => setBookId(e.target.value)}
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
        {/* chapter */}
        <select
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("chapter_id")}
        >
          <option disabled selected>
            Select Chapter
          </option>
          {chapters.map((chapter) => (
            <option value={chapter._id} key={chapter._id}>
              {chapter.name["en"]}
            </option>
          ))}
        </select>
        {/* subject */}
        <select
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("subject_id")}
        >
          <option disabled selected>
            Select Subject
          </option>
          {subjects.map((subject) => (
            <option value={subject._id} key={subject._id}>
              {subject.name["en"]}
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

export default AddHadith;
