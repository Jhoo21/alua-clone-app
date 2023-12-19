import Discover from "@/components/views/dashboard/Discover";
import Navbar from "@/components/views/dashboard/Navbar";

const DiscoverPage = () => {
  return (
    <>
      <Navbar active="discover" />
      <Discover />
    </>
  );
};

export default DiscoverPage;
