import Aside from "@/components/Aside";
import React from "react";

const page = () => {
  return (
    <section className="flex">
      <Aside />
      <article className="w-full md:w-[calc(100%-300px)] mt-[64px] md:ml-[300px] p-4">
        Mostafa
      </article>
    </section>
  );
};

export default page;
