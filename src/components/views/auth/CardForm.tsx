"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardForm = ({ formField }: any) => {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex justify-center items-center">
          <Image
            src={"/alua_connecting_fans.svg"}
            alt="ALUA logo"
            width={186}
            height={78}
          />
        </CardTitle>

        <CardDescription className="flex flex-col gap-1 items-center">
          <Image
            src={"/celebrity_profiles.webp"}
            alt="Celebrity Avatars"
            width={248}
            height={90}
          />
          Connect privately with social media <br /> celebrities, influencers,
          and models.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formField}
        <Button
          className="w-full border mt-6 border-gray-600 rounded"
          variant={"ghost"}
        >
          Apply to Be a Creator
        </Button>
        <p className="text-xs my-4 text-center">
          Apply to be a content creator, make money and interact with social
          medial fans.
        </p>
      </CardContent>
    </Card>
  );
};

export default CardForm;
