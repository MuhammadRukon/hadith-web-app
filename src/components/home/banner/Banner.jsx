import React from "react";
import banner from "./../../../assets/banner.svg";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Banner = () => {
  const { lang } = useSelector((state) => state.language);
  const content = {
    desc:{
      en:"The Messenger of Allah (PBUH) said: When a Muslim performs ablution properly, faces Allah with concentration and prays two rak'ahs, Paradise is guaranteed for him.",
      bn:"রাসুলুল্লাহ (সাঃ) বলেছেনঃ যখন কোন মুসলমান সঠিকভাবে ওযু করে, একাগ্রতার সাথে আল্লাহর দিকে মুখ করে এবং দুই রাকাত নামায পড়ে, তখন তার জন্য জান্নাত নিশ্চিত করা হয়।"
    },
    search:{
      en:"Search",
      bn:"খুঁজুন"
    }
  };
  return (
    <div className="bg-[#fff9ef] dark:bg-[#312c2a] relative overflow-hidden">
      <div className="hero mt-[34px] min-h-[60vh] xl:min-h-[70vh]">
        <div
          style={{
            backgroundImage: `url(${banner})`,
          }}
          className="hero-overlay bg-[length:95vw] sm:bg-[length:85vw] bg-transparent dark:static fixed z-[0] bg-no-repeat bg-center opacity-10 dark:opacity-35 bg-opacity-90"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="hero-content text-center text-neutral-content"
        >
          <div className="max-w-md lg:max-w-3xl ">
            <h1
              className="text-4xl lg:text-6xl font-secondary font-bold text-[#5ab270]">
              {lang == "en" ? (
                <>
                  Find your favourite
                  <span className="text-[#f3c556]">{" "}hadith</span>
                </>
              ) : (
                <>
                  আপনার প্রিয় <span className="text-[#f3c556]">হাদিস</span>
                  {" "}খুঁজুন
                </>
              )}
            </h1>
            <label className="input w-[90%] lg:w-[75%] dark:dark:bg-[#24201e] h-14 mt-6 max-w-[500px] mx-auto focus:outline-none focus-within:outline-none input-bordered flex items-center justify-between gap-2 pr-1.5">
              <input
              className="w-full text-[#0e1037] dark:text-white"
                type="text"
                placeholder={content.search[lang]}
              />
              <button
                onClick={() =>
                  toast("searching option is under development.", {
                    duration: 2000,
                    id: "id",
                  })
                }
                className="btn flex items-center gap-1 dark:border-[#5ab270] text-[#fefdf8] pr-3 md:pr-5 pl-1.5 md:pl-3 h-fit min-h-0 rounded-none rounded-r-md py-2.5 bg-[#5ab270] hover:bg-[#5ab270] "
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
                {content.search[lang]}
              </button>
            </label>
            <p className={`text-[#0e1037] dark:text-[#fefdf8] text-lg lg:text-xl  ${lang=='bn'?"font-normal":"font-semibold"} mt-8`}>
              {content.desc[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
