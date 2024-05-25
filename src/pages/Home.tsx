import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Popup from "../components/Popup";
import { useMyContext } from "../context/ToggleContext";
import CreatorReview from "../components/CreatorReview";
import ReviewCard from "../components/ReviewCard";

const Home = () => {

  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  return (
    <>
    <main className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <div className="w-[100%] mx-auto text-center ">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          A utility-first CSS framework packed with classes like{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            flex,
          </code>{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            pt-4,
          </code>{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            text-center,
          </code>{" "}
          and{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            rotate-90
          </code>{" "}
          that can be composed to build any design, directly in your markup.
        </p>
        <div className="mt-6 flex gap-x-6 justify-center items-center">
          <button className=" outline-none  bg-[#000] dark:bg-blue-400 px-5 py-[0.8rem] rounded-lg text-white font-semibold">
            Get started
          </button>
          <button
            className="hidden sm:flex items-center justify-between w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 "
            onClick={() => setShowPopUp(true)}
          >
            {" "}
            <div className="flex gap-x-2">
            <IoSearch className="h-5 w-5 mt-[2.6px]" />
            <p className="">Quick search...</p>
            </div>
            <p className="text-slate-500">Ctrl K</p>
          </button>
        </div>
      </div>
      {showPopUp && <Popup setShowPopUp={setShowPopUp} />}
    </main>
    <CreatorReview />
    <div className="py-[3.5rem] px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
      <ReviewCard />
    </div>
    </>
  );
};

export default Home;
