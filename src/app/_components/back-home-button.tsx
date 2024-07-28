import React from "react";

import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";

export const BackToHome = () => {
  return (
    <Button asChild variant={"secondary"} className="mb-4 h-7 w-fit px-2">
      <span className="flex items-center gap-2">
        <HiArrowLeft />
        <Link href="/" className="font-medium">
          Home
        </Link>
      </span>
    </Button>
  );
};
