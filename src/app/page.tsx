import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) return <h1>Not Authenticated</h1>;

  return <h1>Hello, {userId}</h1>;
}
