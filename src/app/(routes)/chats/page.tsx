import ChatsCard from "@/components/views/Chats/ChatsCard";
import Navbar from "@/components/views/dashboard/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar active={"chats"} />
      <ChatsCard />
    </>
  );
};

export default page;
