"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/app/_components/ui/form";
import {
  CustomeFormFiled,
  FormFieldType,
} from "@/app/_components/forms/custome-form-field";
import { Button } from "@/app/_components/ui/button";

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "first name is required" })
      .min(2, "first name should have atleast 2 alphabets")
      .regex(/^[a-zA-Z]+$/, {
        message: "first name must only contain letters (a-z, A-Z)",
      }),
    lastName: z
      .string()
      .min(1, { message: "last name is required" })
      .min(2, "last name should have atleast 2 alphabets")
      .regex(/^[a-zA-Z]+$/, {
        message: "last name must only contain letters (a-z, A-Z)",
      }),
    username: z
      .string()
      .min(1, { message: "username is required" })
      .min(2, "username should have atleast 6 characters")
      .regex(/^[a-zA-Z0-9]+$/, {
        message:
          "username can only contain letters and numbers (a-z, A-Z, 0-9)",
      }),
    country: z.string().min(1, { message: "country is required" }),
    email: z
      .string()
      .min(1, { message: "email is required" })
      .email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" }),
    passwordConfirm: z
      .string()
      .min(1, { message: "confirm password is required" })
      .min(8, {
        message: "confirm password must be at least 8 characters long",
      }),
  })
  .refine(({ password, passwordConfirm }) => passwordConfirm === password, {
    message: "passwords did not match",
    path: ["passwordConfirm"],
  });

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      country: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-4">
        <section className="space-y-1">
          <h1 className="text-[2rem] font-semibold leading-tight">
            Create Your Account
          </h1>
          <p className="text-sm text-primary/60">
            Let us know more about yourself
          </p>
        </section>
        <div className="flex gap-2">
          <CustomeFormFiled
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="firstName"
            label="First Name"
            placeholder="John"
          />
          <CustomeFormFiled
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="lastName"
            label="Last Name"
            placeholder="Geram"
          />
        </div>
        <div className="flex gap-2">
          <CustomeFormFiled
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="username"
            label="Username"
            placeholder="John99g"
          />
          <CustomeFormFiled
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="country"
            label="Country"
            placeholder="Ex: United States"
          />
        </div>

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
        <CustomeFormFiled
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="passwordConfirm"
          label="Confirm Password"
          placeholder="••••••••"
        />

        <Button type="submit" className="w-full uppercase">
          Sign in
        </Button>
      </form>
    </Form>
  );
};
