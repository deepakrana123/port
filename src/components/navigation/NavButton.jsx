import {
  Github,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
  Home,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const NavLink=motion(Link)

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
const NavButton = ({ x, y, label, link, icon, newTab,labelDirection="right" }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 400 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{
              transform: `translate(${x},${y})`,
            }}
          >
            <NavLink
            variants={item}
              aria-label={label}
              href={link}
              target={newTab ? "_blank" : "_self"}
              name={label}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              scroll={false}
              prefetch={false}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className="absolute hidden peer-hover:block px-2  py-1 left-full
            mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50" s>
            <Link
              aria-label={label}
              href={link}
              target={newTab ? "_blank" : "_self"}
              name={label}
              className="text-foreground rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid 
        backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm
        "
            >
              <span className="relative w-14 h-14 p-4  hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className="absolute hidden peer-hover:block px-2  py-1 left-full
            mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
                >
                  {label}
                </span>
              </span>
            </Link>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
