import Aside from "@/components/Aside";
import React from "react";

const Page = () => {
  return (
    <section className="flex">
      <Aside />
      <article className="w-[calc(100%-300px)] mt-[64px] ml-[300px] p-4">
        Mostafa
      </article>
    </section>
  );
};

export default Page;
