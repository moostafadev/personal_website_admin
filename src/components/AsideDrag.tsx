import { AsideContext } from "@/context/asideContext";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useContext } from "react";

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
  4;
  const { isOpenAside } = useContext(AsideContext);
  const linkStyle = `flex gap-2 items-center py-3 ${
    isOpenAside ? "md:px-8 md:pl-12" : "px-2 !justify-center"
  } px-2 justify-center md:justify-start before:w-1 before:h-0 before:right-0 before:top-0 before:bg-zinc-600 before:duration-300 hover:before:h-full relative before:absolute duration-300`;

  return (
    <>
      <li
        className={`flex gap-2 items-center py-4 cursor-pointer duration-300 ${
          isOpen ? "bg-white text-zinc-950" : ""
        } ${path.startsWith(link1) ? "bg-white text-zinc-950" : ""} ${
          isOpenAside ? "md:px-8" : "px-2 !justify-center"
        } justify-center md:justify-start`}
        onClick={() => setIsOpen((prev) => !prev)}
        title={title}
      >
        {mainIcon}
        {isOpenAside ? (
          <span
            className={`font-semibold duration-300 md:inline-block hidden ${
              isOpenAside ? "inline-block" : "hidden"
            }`}
          >
            {title}
          </span>
        ) : (
          ""
        )}
        {isOpenAside ? (
          <ChevronDown
            className={`ml-auto duration-300 hidden md:inline-block ${
              isOpen ? "-rotate-180" : ""
            }`}
          />
        ) : (
          ""
        )}
      </li>
      <ul
        className={`${
          isOpen ? "max-h-[400px]" : "max-h-0"
        } flex flex-col gap-2 -mt-2 before:h-1 overflow-hidden duration-500 bg-white text-zinc-950`}
      >
        <li>
          <Link href={link1} className={linkStyle} title="Overview">
            {icon1}
            {isOpenAside ? (
              <span
                className={`font-semibold duration-300 md:inline-block hidden ${
                  isOpenAside ? "inline-block" : "hidden"
                } hidden md:inline-block`}
              >
                Overview
              </span>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li>
          <Link href={link2} className={linkStyle} title="Add a new">
            {icon2}
            {isOpenAside ? (
              <span
                className={`font-semibold duration-300 md:inline-block hidden ${
                  isOpenAside ? "inline-block" : "hidden"
                } hidden md:inline-block`}
              >
                Add a new
              </span>
            ) : (
              ""
            )}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AsideDrag;
