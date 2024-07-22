"use client";

import {
  Binary,
  CirclePlus,
  CodeXml,
  Layers,
  LayoutDashboard,
  ListPlus,
  TextSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import AsideDrag from "../AsideDrag";
import { AsideContext } from "@/context/asideContext";

const Aside = () => {
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const { isOpenAside, setIsOpenAside } = useContext(AsideContext);
  const path = usePathname();

  useEffect(() => {
    setIsOpenProjects(false);
    setIsOpenSkills(false);
  }, [path]);
  return (
    <aside
      className={`w-0 bg-zinc-900 text-white md:py-4 h-[calc(100vh-64px)] fixed left-0 bottom-0 md:w-[300px] shadow-lg duration-300 ${
        !isOpenAside ? "!w-[80px]" : ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <div
          className={`bg-white rounded-md px-[1px] cursor-pointer hover:opacity-90 duration-300 relative w-[32px] h-[32px] mx-auto`}
          onClick={() => setIsOpenAside((prev) => !prev)}
        >
          <span
            className={`absolute w-[75%] h-1 bg-zinc-950 dark:bg-white top-2 left-[50%] translate-x-[-50%] rounded-md ${
              isOpenAside ? "rotate-45 top-[14px] w-[28px] !bg-red-500" : ""
            } duration-300`}
          ></span>
          <span
            className={`absolute w-[75%] h-1 bg-zinc-950 dark:bg-white bottom-2 right-[50%] translate-x-[50%] rounded-md ${
              isOpenAside ? "-rotate-45 top-[14px] w-[28px] !bg-red-500" : ""
            } duration-300`}
          ></span>
        </div>
        <ul className="flex flex-col gap-2">
          <li
            className={`${
              path === "/admin" ? "bg-white text-zinc-950" : ""
            } duration-300`}
          >
            <Link href={"/admin"} className="flex gap-2 items-center py-4 px-8">
              <LayoutDashboard />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <AsideDrag
            title="Projects"
            isOpen={isOpenProjects}
            setIsOpen={setIsOpenProjects}
            link1="/admin/projects"
            link2="/admin/projects/add"
            mainIcon={<Layers />}
            icon1={<TextSearch />}
            icon2={<ListPlus />}
            path={path}
          />
          <AsideDrag
            title="Skills"
            isOpen={isOpenSkills}
            setIsOpen={setIsOpenSkills}
            link1="/admin/skills"
            link2="/admin/skills/add"
            mainIcon={<CodeXml />}
            icon1={<Binary />}
            icon2={<CirclePlus />}
            path={path}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
