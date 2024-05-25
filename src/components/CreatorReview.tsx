import React from "react";

const CreatorReview = () => {
  return (
    <div className="w-[80%] pt-20 sm:pt-24 lg:pt-32 mx-auto">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl  tracking-tight text-center dark:text-white">
        “Best practices” don’t actually work.
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center w-[100%] md:w-[80%] mx-auto dark:text-slate-400">
        I’ve written{" "}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          a few thousand words
        </code>{" "}
        on why traditional “semantic class names” are the reason CSS is hard to
        maintain, but the truth is you’re never going to believe me until you
        actually try it. If you can suppress the urge to retch long enough to
        give it a chance, I really think you’ll wonder how you ever worked with
        CSS any other way.
      </p>
      <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
        <img
          src="images/adam.jpg"
          alt="creator"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col justify-center items-start">
        <h2 className="text-slate-900 font-semibold dark:text-slate-300">Adam Wathan</h2>
        <p className="dark:text-slate-300">Creator Of Tailwind</p>
        </div>
      </figcaption>
    </div>
  );
};

export default CreatorReview;
