import ChatsCard from "@/components/views/Chats/ChatsCard";
import Navbar from "@/components/views/dashboard/Navbar";
import React from "react";
import { getUserSessionData } from "@/services/getUserSession";
import { redirect } from "next/navigation";

const page = () => {
  const { session }: any = getUserSessionData();
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Navbar active={"chats"} />
      <ChatsCard />
    </>
  );
};

export default page;
