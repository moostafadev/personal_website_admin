"use client";

import {
  Binary,
  ChevronDown,
  CirclePlus,
  CodeXml,
  Layers,
  LayoutDashboard,
  ListPlus,
  TextSearch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AsideDrag from "./AsideDrag";

const Aside = () => {
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsOpenProjects(false);
    setIsOpenSkills(false);
  }, [path]);
  return (
    <aside className="w-0 bg-zinc-900 text-white md:py-4 h-[calc(100vh-64px)] fixed left-0 bottom-0 md:w-[300px] shadow-">
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
    </aside>
  );
};

export default Aside;
