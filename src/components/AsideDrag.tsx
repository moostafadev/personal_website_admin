import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IProp {
  title: string;
  isOpen: boolean;
  setIsOpen: (prev: React.SetStateAction<boolean>) => void;
  link1: string;
  link2: string;
  path: string;
  mainIcon: ReactNode;
  icon1: ReactNode;
  icon2: ReactNode;
}

const AsideDrag = ({
  title,
  isOpen,
  setIsOpen,
  link1,
  link2,
  path,
  icon1,
  icon2,
  mainIcon,
}: IProp) => {
  const linkStyle =
    "flex gap-2 items-center py-3 px-8 pl-12 before:w-1 before:h-0 before:right-0 before:top-0 before:bg-zinc-600 before:duration-300 hover:before:h-full relative before:absolute duration-300";

  return (
    <>
      <li
        className={`flex gap-2 items-center py-4 px-8 cursor-pointer duration-500 ${
          isOpen ? "bg-white text-zinc-950" : ""
        } ${path.startsWith(link1) ? "bg-white text-zinc-950" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {mainIcon}
        <span className="font-semibold">{title}</span>
        <ChevronDown
          className={`ml-auto duration-300 ${isOpen ? "-rotate-180" : ""}`}
        />
      </li>
      <ul
        className={`${
          isOpen ? "max-h-[400px]" : "max-h-0"
        } flex flex-col gap-2 -mt-2 before:h-1 overflow-hidden duration-500 bg-white text-zinc-950`}
      >
        <li>
          <Link href={link1} className={linkStyle}>
            {icon1}
            <span className="font-semibold">Overview</span>
          </Link>
        </li>
        <li>
          <Link href={link2} className={linkStyle}>
            {icon2}
            <span className="font-semibold">Add a new</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AsideDrag;
