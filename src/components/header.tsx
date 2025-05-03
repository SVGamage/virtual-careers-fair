import SignOutButton from "@/components/auth/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Header() {
  const session = auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return null;
  }
  return (
    <header className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Virtual Careers Fair</h1>
      <SignOutButton />
    </header>
  );
}
