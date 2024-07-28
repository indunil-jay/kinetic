import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

type SocialLoginProps = {
  withOr?: boolean;
};

export const SocialLogin = ({ withOr = true }: SocialLoginProps) => {
  return (
    <div className="space-y-2">
      {withOr && (
        <p
          className={cn(
            "relative flex w-full items-center justify-center py-5 text-primary/50",
            "before:absolute before:left-0 before:top-1/2 before:block before:h-px before:w-[calc(50%-20px)] before:-translate-y-1/2 before:bg-black/10 before:content-['']",
            "after:absolute after:right-0 after:top-1/2 after:block after:h-px after:w-[calc(50%-20px)] after:-translate-y-1/2 after:bg-black/10 after:content-['']",
          )}
        >
          or
        </p>
      )}

      <Button type="submit" variant={"outline"} className="w-full uppercase">
        <span className="flex items-center gap-2">
          <FcGoogle />
          <span> Sign in with Google</span>
        </span>
      </Button>
    </div>
  );
};
