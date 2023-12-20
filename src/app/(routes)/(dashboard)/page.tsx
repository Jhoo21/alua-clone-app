import Image from "next/image";
import AuthForm from "@/components/views/auth/AuthForm";
import { getUserSessionData } from "@/services/getUserSession";
import { redirect } from "next/navigation";
import FooterPage from "@/components/views/dashboard/FooterPage";

const DashboardPage = () => {
  const { session }: any = getUserSessionData();
  if (session) {
    redirect("/discover");
  }
  return (
    <div className="flex flex-col items-center xl:mt-[3rem]">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={"/splash_v3.webp"}
          width={532}
          height={508}
          alt="Hero Image"
          className="mr-[120px] xl:block hidden"
        />
        <AuthForm />
      </div>
      <FooterPage />
    </div>
  );
};

export default DashboardPage;
