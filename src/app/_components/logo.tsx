import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export const Logo = () => {
  return (
    <Button asChild variant={"ghost"} className="hover:bg-transparent">
      <Link href="/">
        <span className="text-[2rem] font-semibold sm:text-[2.4rem] md:text-[2.75rem]">
          Kinetic
        </span>
      </Link>
    </Button>
  );
};
