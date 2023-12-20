import Discover from "@/components/views/dashboard/Discover";
import Navbar from "@/components/views/dashboard/Navbar";
import { getUserSessionData } from "@/services/getUserSession";
import { redirect } from "next/navigation";

const DiscoverPage = () => {
  const { session }: any = getUserSessionData();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <Navbar active="discover" />
      <Discover />
    </>
  );
};

export default DiscoverPage;
