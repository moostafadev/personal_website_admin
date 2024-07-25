"use client";

import { AsideContext } from "@/context/asideContext";
import React, { useContext } from "react";

const Footer = () => {
  const { isOpenAside } = useContext(AsideContext);
  console.log(isOpenAside);

  return (
    <footer
      className={`p-4 duration-300 ml-[60px] ${
        isOpenAside ? "md:ml-[300px]" : "!ml-[60px]"
      }`}
    >
      Footer
    </footer>
  );
};

export default Footer;
