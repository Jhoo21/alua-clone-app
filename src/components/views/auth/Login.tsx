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
              <Button
                className="w-full text-white bg-blue-400 hover:text-blue-500"
                type="submit"
              >
                {isLoading ? (
                  <RiLoader4Fill className="w-3.5 h-3.5 justify-self-end animate-spin" />
                ) : (
                  "Log In"
                )}
              </Button>
            </form>
            <div className="text-center">
              <p className="text-xs text-blue-500">Forgot Password</p>
              <p className="text-sm my-4">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 cursor-pointer"
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
