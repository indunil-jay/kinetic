import { SignIn } from "@/app/_components/auth/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGN IN",
};

export default function SignInPage() {
  return <SignIn />;
}
