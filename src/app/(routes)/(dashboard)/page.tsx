import Image from "next/image";
import AuthForm from "@/components/views/auth/AuthForm";

const DashboardPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        src={"/splash_v3.webp"}
        width={532}
        height={508}
        alt="Hero Image"
        className="mr-[120px]"
      />
      <AuthForm />
    </div>
  );
};

export default DashboardPage;
