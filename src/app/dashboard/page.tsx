import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  const user = session.user;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">Welcome {user.name}!</p>
    </div>
  );
}
