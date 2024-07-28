import Link from "next/link";
import { Logo } from "@/app/_components/logo";
import { Button } from "@/app/_components/ui/button";

export const Navigation = () => {
  return (
    <nav className="flex h-[4.125rem] items-center justify-between border-b border-secondary">
      <Logo />
      <div className="flex h-full flex-col justify-center bg-black text-white sm:bg-transparent sm:text-primary">
        <div className="flex gap-2 px-5 sm:px-0">
          <Button asChild variant={"transparent"} className="uppercase">
            <Link href="/auth/sign-in"> Sign in</Link>
          </Button>

          <Button asChild className="upper 'case hidden font-normal sm:flex">
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
