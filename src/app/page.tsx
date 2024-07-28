import { HydrateClient } from "@/trpc/server";
import { Logo } from "@/app/_components/logo";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-[100dvh] flex-col px-2 md:px-10">
        <nav className="border-secondary flex h-[4.125rem] items-center justify-between border-b">
          <Logo />
          <div className="sm:text-primary flex h-full flex-col justify-center bg-black text-white sm:bg-transparent">
            <div className="flex gap-2 px-5 sm:px-0">
              <Button asChild variant={"transparent"} className="uppercase">
                <Link href="/auth/signin"> Sign in</Link>
              </Button>

              <Button asChild className="hidden font-normal uppercase sm:flex">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>
      </main>
    </HydrateClient>
  );
}
