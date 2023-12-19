import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ChatCards = () => {
  return (
    <div className="w-full flex justify-between items-center hover:bg-blue-600 hover:text-white p-2 rounded">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage
            className="w-[2rem] rounded-full h-[2rem]"
            src="/some-girl.jpg"
          />
          <AvatarFallback>Some Girl</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between">
          <p className="font-bold ">Alfieee</p>
          <p>Posted 2 hours ago</p>
        </div>
      </div>
      <div>
        <p className="w-4 h-4 text-xs rounded-full bg-red-500 text-white text-center">
          5
        </p>
      </div>
    </div>
  );
};

export default ChatCards;
