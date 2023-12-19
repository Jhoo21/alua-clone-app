import ItemFeedCard from "@/components/views/Feed/ItemFeedCard";
import Navbar from "@/components/views/dashboard/Navbar";
import React from "react";

const page = () => {
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
