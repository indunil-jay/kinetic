import Link from "next/link";
import Image from "next/image";
import { HydrateClient } from "@/trpc/server";

import { Button } from "@/app/_components/ui/button";
import { HiOutlineArrowRight } from "react-icons/hi";
import { herobg1, herobg2 } from "@/constants";
import { Navigation } from "@/app/_components/navigation";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="grid min-h-[100dvh] grid-rows-[auto_1fr] flex-col">
        <Navigation />
        <section className="relative flex h-full flex-col items-center justify-center">
          <div className="absolute bottom-0 z-0 sm:left-0 sm:top-0">
            <div>
              <Image src={herobg1} alt="hero-image" priority />
            </div>
          </div>
          <div className="absolute top-0 z-0 sm:bottom-0 sm:right-0">
            <div>
              <Image src={herobg2} alt="hero-image" priority />
            </div>
          </div>
          <div className="relative text-center">
            <h1 className="text-[4.2rem] font-semibold leading-[78px] sm:text-[5rem]">
              <span className="block">Discover </span>
              <span className="block">Stories and Ideas</span>
            </h1>
            <p className="mt-4 font-medium text-black/50">
              Join a community where your stories matter and your ideas grow.
            </p>

            <div className="mt-5">
              <Button asChild>
                <Link href="/auth/sign-up">
                  <span className="flex items-center gap-2">
                    <span className="font-normal uppercase">Start Reading</span>
                    <span>
                      <HiOutlineArrowRight />
                    </span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
