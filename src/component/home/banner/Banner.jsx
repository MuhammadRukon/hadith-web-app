import React from "react";
import banner from "./../../../assets/banner.svg";
import toast from "react-hot-toast";

const Banner = () => {
  return (
    <div  className="bg-[#fff9ef] dark:bg-stone-700 relative overflow-hidden">
    
    <div  className="hero mt-[34px] min-h-[70vh]">
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="hero-overlay bg-transparent dark:static fixed z-0 bg-no-repeat bg-center opacity-10 dark:opacity-20 bg-opacity-60"
      ></div>
      <div data-aos="zoom-in" data-aos-duration="900" className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-3xl ">
          <h1 className="text-4xl lg:text-6xl font-secondary font-bold text-[#5ab270]">
            Find your favourite <span className="text-[#f3c556]">hadith</span>
          </h1>
          <label className="input w-[75%] dark:dark:bg-stone-800 h-14 mt-6 max-w-[500px] mx-auto focus:outline-none focus-within:outline-none input-bordered flex items-center gap-2 pr-1.5">
            <input
              type="text"
              className="grow text-[#0e1037] dark:text-white bg-white"
              placeholder="Search"
            />
            <button
              onClick={() =>
                toast("searching option is under development.", {
                  duration: 2000,
                  id: "id",
                })
              }
              className="btn flex items-center gap-1 dark:border-[#5ab270] text-white pr-5 pl-3 h-fit min-h-0 rounded-none rounded-r-md py-2.5 bg-[#5ab270] hover:bg-[#5ab270] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </button>
          </label>
          <p className="text-[#0e1037] dark:text-white text-lg lg:text-xl font-semibold mt-8">
            He said, The Messenger of Allah (PBUH) said: When a Muslim performs
            ablution properly, faces Allah with concentration and prays two
            rak'ahs, Paradise is guaranteed for him.
          </p>
        </div>
      </div>
    </div>
    </div>
       
  );
};

export default Banner;
