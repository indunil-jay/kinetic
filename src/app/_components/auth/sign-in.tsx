import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "@/app/_components/forms/sign-in-form";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import SocialLogin from "./social-login";
import { BackToHome } from "../back-home-button";
import { signinbg } from "@/constants";

export const SignIn = () => {
  return (
    <div className="flex h-[100dvh] max-h-[100dvh]">
      <section className="remove-scrollbar relative flex-1 overflow-y-auto">
        <div className="mx-auto flex size-full max-w-xl flex-1 flex-col justify-between p-10">
          <div>
            <BackToHome />
            <SignInForm />
            <SocialLogin />

            <p className="flex items-center justify-center font-medium">
              <span className="text-sm text-primary/80">
                {" "}
                Don&apos;t have an account?
              </span>{" "}
              <Button asChild variant={"link"} className="text-sm text-primary">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </p>
          </div>

          <p className="py-6 text-center">&copy; 2024 Scribio</p>
        </div>
      </section>
      <section className="hidden h-full flex-1 md:flex">
        <Separator orientation="vertical" />
        <div className="relative p-10">
          <div className="z-50 flex h-full flex-col justify-between">
            <div>
              <h2 className="text-[2rem] font-medium capitalize">
                Log in to Continue Your Journey
              </h2>
              <h3 className="text-[1.125rem] font-medium capitalize leading-tight text-primary/60">
                Access your account, discover new stories, and connect with our
                community. Let&apos;s continue your writing adventure.
              </h3>
            </div>
            <p className="mt-6 border-l-2 pl-6 text-xs italic">
              Share your stories, connect with like-minded individuals, and
              unleash your creativity. Sign up today and be part of a vibrant
              community of writers and readers.
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={signinbg}
              priority
              alt="signup-background-image"
              className="hidden object-cover opacity-50 md:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
