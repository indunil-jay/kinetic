"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form } from "@/app/_components/ui/form";
import { Button } from "@/app/_components/ui/button";
import {
  CustomeFormFiled,
  FormFieldType,
} from "@/app/_components/forms/custome-form-field";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="space-y-1">
          <p className="text-[1.2rem] font-medium">Hi There 👋</p>
          <h1 className="text-[2rem] font-semibold leading-tight">
            Welcome Back!
          </h1>
          <p className="text-sm text-primary/60">
            Please login to your account
          </p>
        </section>

        <CustomeFormFiled
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="john@example.com"
        />
        <CustomeFormFiled
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="password"
          label="Password"
          placeholder="••••••••"
        />

        <Button type="submit" className="w-full uppercase">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
