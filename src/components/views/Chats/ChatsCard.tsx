"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Chatlist from "./Chatlist";
import ChatContent from "./ChatContent";

const ChatsCard = () => {
  return (
    <div className="w-full h-[91.4vh] flex gap-2 p-2 bg-gray-200">
      <Card className="w-[20%] h-[90vh]">
        <Chatlist />
      </Card>
      <Card className="w-[80%] h-[90vh]">
        <ChatContent />
      </Card>
    </div>
  );
};

export default ChatsCard;
