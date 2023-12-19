import React from "react";
import { RiMessage2Line } from "react-icons/ri";

const ChatContent = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-1 items-center justify-center">
        <p className="text-[8rem] text-gray-700">
          <RiMessage2Line />
        </p>

        <p className="text-gray-500">Select a message</p>
      </div>
    </section>
  );
};

export default ChatContent;
