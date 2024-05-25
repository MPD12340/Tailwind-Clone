import React from "react";
import { IoClose } from "react-icons/io5";
const Popup = ({ setShowPopUp }: any) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-50  backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white dark:bg-slate-700 p-4 rounded shadow w-[70%] h-[20rem]">
        <input type="text" className="w-full mt-10 h-8 outline-none p-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="search here..." autoFocus />
        <IoClose
          className="absolute top-4 right-4 h-6 w-6 cursor-pointer dark:text-white"
          onClick={() => setShowPopUp(false)}
        />
      </div>
    </div>
  );
};

export default Popup;