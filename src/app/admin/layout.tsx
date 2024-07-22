import AsideStateWrapper from "@/components/AsideStateWrapper";
import DynamicSection from "@/components/DynamicSection";
import Aside from "@/components/layout/Aside";
import Header from "@/components/layout/Header";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Mostafa Dev | Admin",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/logo/logo_MD.png",
    },
  },
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (user?.publicMetadata.role !== "admin") {
    redirect("/not-authorized");
  }
  return (
    <main>
      <Header />
      <AsideStateWrapper>
        <Aside />
        <DynamicSection>{children}</DynamicSection>
      </AsideStateWrapper>
      <footer className="md:ml-[300px] p-4">Footer</footer>
    </main>
  );
};

export default Layout;
