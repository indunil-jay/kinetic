import { HydrateClient } from "@/trpc/server";
import { Logo } from "@/app/_components/logo";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import { herobg1, herobg2 } from "@/constants";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="grid min-h-[100dvh] grid-rows-[auto_1fr] flex-col px-2 md:px-10">
        <nav className="flex h-[4.125rem] items-center justify-between border-b border-secondary">
          <Logo />
          <div className="flex h-full flex-col justify-center bg-black text-white sm:bg-transparent sm:text-primary">
            <div className="flex gap-2 px-5 sm:px-0">
              <Button asChild variant={"transparent"} className="uppercase">
                <Link href="#"> Sign in</Link>
              </Button>

              <Button
                asChild
                className="upper 'case hidden font-normal sm:flex"
              >
                <Link href="#">Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>

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
                <Link href="#">
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
