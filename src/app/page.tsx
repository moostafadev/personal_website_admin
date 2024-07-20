import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (user?.publicMetadata.role !== "admin") {
    redirect("/not-authorized");
  }
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      {user?.publicMetadata.role === "admin" ? (
        <div className="mt-[64px] flex justify-center items-center p-10 gap-4 flex-col">
          <h1 className="text-2xl font-semibold">
            Hello, You are authorized 🖐🏻.
          </h1>
          <Link href={"/admin"}>
            <Button className="text-lg">Dashboard 🔗</Button>
          </Link>
        </div>
      ) : null}
    </main>
  );
}
