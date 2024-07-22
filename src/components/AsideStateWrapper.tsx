"use client";

import React, { useState } from "react";
import { AsideContext } from "@/context/asideContext";

const AsideStateWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isOpenAside, setIsOpenAside] = useState(true);

  return (
    <AsideContext.Provider value={{ isOpenAside, setIsOpenAside }}>
      {children}
    </AsideContext.Provider>
  );
};

export default AsideStateWrapper;
