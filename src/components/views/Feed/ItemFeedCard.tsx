"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";

const ItemFeedCard = () => {
  return (
    <Card className="p-2 w-[480px]">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage
              className="w-[3rem] rounded-full h-[3rem]"
              src="/some-girl.jpg"
            />
            <AvatarFallback>Some Girl</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between">
            <p className="font-bold ">Alfieee</p>
            <p className="text-gray-600 text-sm">Posted 2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-600 font-bold">Suggested</p>
      </div>
      <div className="w-full">
        <Image
          src={"/sexy-girl.jpg"}
          width={480}
          height={600}
          alt="Sexy Girl"
        />
      </div>
    </Card>
  );
};

export default ItemFeedCard;
