import TextField from "@/components/ui/TextField";
import { Button } from "@/components/ui/button";
import React from "react";
import ChatCards from "./ChatCards";

const Chatlist = () => {
  return (
    <section>
      <div className="w-full flex justify-between items-center p-2">
        <h4 className="font-bold">Chats</h4>
        <button className="text-blue-600">Edit</button>
      </div>
      <div className="p-2">
        <div className="bg-blue-50">
          <TextField placeholder={"Search Chats"} />
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 mt-4">
          <ChatCards />
          <ChatCards />
        </div>
      </div>
    </section>
  );
};

export default Chatlist;
