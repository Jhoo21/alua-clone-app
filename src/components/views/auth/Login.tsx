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
import { Button } from "../../ui/button";
import { authService } from "@/services/authServices";
import { Toaster, toast } from "sonner";
import { RiLoader4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email, please enter a correct email!" }),
  password: z.string().min(4, {
    message: "password must be at least 4 characters.",
  }),
});

const Login = ({ isLogin, setIsLogin }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const data = await authService({
        email: values.email,
        password: values.password,
      });
      if (data?.status === 200) {
        toast.success("Login Successful!");
        setTimeout(() => router.push("/discover"), 1000);
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      toast.error("Invalid Email and Password! Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <CardForm
        formField={
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <button
                className="w-full py-2 rounded text-white bg-blue-500"
                type="submit"
              >
                {isLoading ? (
                  <RiLoader4Fill className="w-3.5 h-3.5 justify-self-end animate-spin" />
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            <div className="text-center">
              <button>
                <p className="text-sm mt-2 font-semibold text-blue-600">
                  Forgot Password
                </p>
              </button>
              <div className="my-4 flex justify-center items-center w-full gap-4">
                <button className="rounded-sm px-3 gap-1 py-1 flex items-center bg-blue-600 text-white">
                  <FaFacebook /> <p>Log In</p>
                </button>
                <button className="rounded-sm px-3 gap-1 py-1 flex items-center bg-blue-500 text-white">
                  <FaTwitter /> <p>Log In</p>
                </button>
              </div>
              <p className="text-sm my-4 font-semibold">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 cursor-pointer font-semibold"
                >
                  Sign Up
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

export default Login;
