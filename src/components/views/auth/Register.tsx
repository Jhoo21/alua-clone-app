import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CardForm from "./CardForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Button } from "../../ui/button";
import { registerService } from "@/services/authServices";
import { RiLoader4Fill } from "react-icons/ri";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Invalid email, please enter a correct email!" }),
    password: z.string().min(4, {
      message: "password must be at least 4 characters.",
    }),
    verifyPassword: z.string().min(4, {
      message: "password must be at least 4 characters.",
    }),
    inviteCode: z.string().min(4, {
      message: "Invite Code must be at least 4 characters.",
    }),
    gender: z.enum(["male", "female", "other"], {
      required_error: "You need to select a gender.",
    }),
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: "Passwords do not match",
    path: ["verifyPassword"],
  });

const Register = ({ isLogin, setIsLogin }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      verifyPassword: "",
      inviteCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const userID = await registerService({
        email: values.email,
        password: values.password,
      });
      if (userID) {
        toast.success("Account Registered Successfully!");
        router.push("/discover");
      } else {
        toast.error("Something went wrong! Please try again");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <CardForm
        formField={
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded"
                        placeholder="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        className="rounded"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="verifyPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded"
                        type="password"
                        placeholder="Verify Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inviteCode"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Invite Code</FormLabel>
                      <FormLabel className="text-blue-500">
                        What&apos;s this?
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Input className="rounded" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>I am...</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-3"
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <Image
                            src={"/genders/gender-male.webp"}
                            width={30}
                            height={30}
                            alt="Male Gender Illustration"
                          />
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <Image
                            src={"/genders/gender-female.webp"}
                            width={30}
                            height={30}
                            alt="Female Gender Illustration"
                          />

                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <Image
                            src={"/genders/gender-unicorn.webp"}
                            width={30}
                            height={30}
                            alt="Other Gender Illustration"
                          />

                          <FormLabel className="font-normal">Others</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                className="w-full text-white font-semibold bg-blue-500 py-2 rounded"
                type="submit"
              >
                {isLoading ? (
                  <RiLoader4Fill className="w-3.5 h-3.5 justify-self-end animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
            <div className="text-center">
              <p className="text-xs text-gray-600 mt-2">
                By signing up you agree to our{" "}
                <span className="text-blue-500 font-semibold">
                  Terms and Conditions
                </span>
              </p>
              <p className="text-sm my-4 font-semibold">
                Already a member?{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 cursor-pointer"
                >
                  Log In
                </span>
              </p>
            </div>
          </Form>
        }
      />
      <Toaster richColors />
    </>
  );
};

export default Register;
