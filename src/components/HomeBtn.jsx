"use client"
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
const NavLink=motion(Link)
const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      aria-label={"Home"}
      href={"/"}
      target={"_self"}
      name={"Home"}
      prefetch={false}
      className="text-foreground  rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50
        "
    >
      <span className="relative w-12 h-12 hover:text-accent">
        {/* {getIcon(icon)} */}
        <Home className="w-[50px] h-[40px] items-center" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span
          className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
        >
          {"Home"}
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
