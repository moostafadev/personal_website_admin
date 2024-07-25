"use client";

import React, { useContext } from "react";
import { AsideContext } from "@/context/asideContext";

const DynamicSection = ({ children }: { children: React.ReactNode }) => {
  const { isOpenAside } = useContext(AsideContext);

  return (
    <section
      className={`mt-16 p-4 duration-300 ml-[60px] ${
        isOpenAside ? "md:ml-[300px]" : "!ml-[60px]"
      }`}
    >
      <article className="min-h-[calc(100vh-64px)]">{children}</article>
    </section>
  );
};

export default DynamicSection;
