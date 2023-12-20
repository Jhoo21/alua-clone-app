import ItemFeedCard from "@/components/views/Feed/ItemFeedCard";
import Navbar from "@/components/views/dashboard/Navbar";
import React from "react";
import { getUserSessionData } from "@/services/getUserSession";
import { redirect } from "next/navigation";

const page = async () => {
  const { session }: any = await getUserSessionData();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <Navbar active="feed" />
      <div className="w-full flex flex-col gap-4 items-center p-4">
        <ItemFeedCard />
        <ItemFeedCard />
        <ItemFeedCard />
        <ItemFeedCard />
        <ItemFeedCard />
        <ItemFeedCard />
        <ItemFeedCard />
      </div>
    </>
  );
};

export default page;
