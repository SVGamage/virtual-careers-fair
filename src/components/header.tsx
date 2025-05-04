import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "@/components/auth/sign-out-button";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 ">
      <div className="flex items-center gap-2 px-4 w-full justify-between">
        <div className="flex">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          Virtual Careers Fair
        </div>
        {session && <SignOutButton />}
      </div>
    </header>
  );
}
