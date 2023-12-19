"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineDown } from "react-icons/ai";
import { supabase } from "@/services/authServices";
import { Toaster, toast } from "sonner";
import { RiLoader4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = ({ active }: { active: string }) => {
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
      push("/");
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <nav className="w-full flex items-center justify-between p-[1rem] shadow">
      <section className="flex items-center justify-center gap-6">
        <Link href={"/discover"}>
          <Image src={"/logo.svg"} alt="ALUA Logo" width={90} height={50} />
        </Link>
        <ul className="flex justify-center items-center gap-6 text-lg text-gray-500">
          <li
            className={`cursor-pointer p-2 rounded ${
              active === "feed" && "bg-gray-100"
            }`}
          >
            <Link href={"/feed"}>Private Feed</Link>
          </li>
          <li
            className={`cursor-pointer p-2 rounded ${
              active === "discover" && "bg-gray-100"
            }`}
          >
            <Link href={"/discover"}>Featured</Link>
          </li>
          <li
            className={`cursor-pointer p-2 rounded ${
              active === "chats" && "bg-gray-100"
            }`}
          >
            <Link href={"/chats"}>Messages</Link>
          </li>
        </ul>
      </section>
      <section className="flex justify-center items-center gap-4 mr-8">
        <p className="text-red-600">0 Credits</p>
        <DropdownMenu>
          <DropdownMenuTrigger onChange={() => setIsUp(!isUp)}>
            <div className="flex items-center justify-center gap-2">
              <Avatar>
                <AvatarImage src="/no-profile.webp" />
                <AvatarFallback>No Profile</AvatarFallback>
              </Avatar>
              <p>
                <AiOutlineDown
                  className={`text-[1.5rem] text-gray-500 transition-transform transform origin-center ${
                    isUp && "rotate-90"
                  }`}
                />
              </p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4">
            {/* <DropdownMenuLabel>Profile Options</DropdownMenuLabel>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <span className="text-blue-500 font-medium text-lg">
                Install the Alua App
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="text-blue-500 font-medium text-lg">
                Enable Notifications
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuItem>Add Credits</DropdownMenuItem>
            <DropdownMenuItem>My Purchases</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Legal</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <span className="text-red-500">
                {isLoading ? (
                  <RiLoader4Fill className="w-3.5 h-3.5 justify-self-end animate-spin text-blue-600" />
                ) : (
                  "Logout"
                )}
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <Toaster richColors />
    </nav>
  );
};

export default Navbar;
