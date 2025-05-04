"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const router = useRouter();
  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); // redirect to login page
        },
      },
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex items-center justify-between cursor-pointer"
    >
      <Icons.logOut />
    </Button>
  );
}
