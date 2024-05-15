import React from "react";
import banner from "./../../assets/banner.svg";

const Banner = () => {
  return (
    <div className="hero mt-[64px] bg-[#fff9ef] min-h-[70vh]">
      <div
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="hero-overlay bg-no-repeat bg-center opacity-10 bg-opacity-60"
      ></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-3xl ">
          <h1 className="text-6xl font-bold text-[#5ab270]">
            Find your favourite <span className="text-[#f3c556]">hadith</span>
          </h1>
          <label className="input w-[75%] h-14 mt-6 max-w-[500px] mx-auto focus:outline-none focus-within:outline-none input-bordered flex items-center gap-2 pr-1.5">
            <input type="text" className="grow bg-white" placeholder="Search" />
            <button className="btn flex items-center gap-1 text-white pr-5 pl-3 h-fit min-h-0 rounded-none rounded-r-md py-2.5 bg-[#5ab270]">
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
          <p className="text-[#0e1037] text-xl font-semibold mt-8">
            He said, The Messenger of Allah (PBUH) said: When a Muslim performs
            ablution properly, faces Allah with concentration and prays two
            rak'ahs, Paradise is guaranteed for him.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
