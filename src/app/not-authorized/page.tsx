import Header from "@/components/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function NotAuthorized() {
  const user = await currentUser();
  if (user?.publicMetadata.role === "admin") {
    redirect("/admin");
  }
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex p-4 mt-[64px]">
        <h1 className="text-center mx-auto">
          You are not authorized to access this page.
        </h1>
      </section>
    </main>
  );
}
