import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const TextField = ({ placeholder = "" }: any) => {
  return (
    <div className="bg-white flex items-center h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-emerald-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:border-primary-400 focus-within:ring-[3px] focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-gray-400 focus-within:text-primary-500 transition-colors duration-100 gap-2 ">
      <RiSearch2Line />
      <input
        placeholder={placeholder}
        className="flex-1 bg-white w-full text-gray-600 focus:outline-none"
      />
    </div>
  );
};

export default TextField;
