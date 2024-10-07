import axios from "axios";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { route } from "../../routes/Routes";

const AddSubject = () => {
  const { register, handleSubmit, reset } = useForm();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${route}/subjects`);
      // const res = await fetch(`/hadithBook.json`);
      const data = await res.json();
      if (data?.length > 0) {
        setSubjects(data);
      } else {
        setSubjects([]);
      }
    };
    fetchData();
  }, []);
  const handlePostData = async (data) => {
    const subjectData = {
      name: {
        en: data.subjectNameEn,
        bn: data.subjectNameBn,
      },
    };
    if (!subjectData.name.en || !subjectData.name.bn) {
      toast.error("emply fields");
      return;
    }
    try {
      const res = await axios.post(`${route}/subjects`, subjectData, {
        withCredentials: true,
      });
      if (res.status == 200) {
        toast.success("Added successfully");
        reset();
      } else {
        toast.error("something went wrong");
        console.log(res);
      }
    } catch (error) {
      const string = error.response?.data?.message;
      const duplicate = string.includes("duplicate");
      toast.error(duplicate ? "duplicate entry" : "something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[73.49vh]">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit((data) => handlePostData(data))}
      >
        <input
          className="py-1.5 px-3.5 rounded-md border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("subjectNameEn")}
          placeholder="Subject Name - English"
        />
        <input
          className="py-1.5 px-3.5 rounded-md  border placeholder:font-light placeholder:text-sm border-stone-200 focus:outline-stone-300"
          {...register("subjectNameBn")}
          placeholder="Subject Name - Bangla"
        />

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

export default AddSubject;
