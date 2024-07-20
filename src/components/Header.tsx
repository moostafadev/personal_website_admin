import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-[64px] bg-zinc-950 text-white px-4 flex items-center fixed left-0 top-0 w-full justify-between">
      <Link href={"/admin"}>
        <Image
          src={"/logo/logo_light.png"}
          alt={"Logo"}
          width={100}
          height={100}
        />
      </Link>
      <div>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
