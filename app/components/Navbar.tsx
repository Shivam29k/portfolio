"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { FaShapes } from "react-icons/fa6";
import { TransitionLink } from "../utils/TransitionLink";

export default function Navbar() {
  const navItems = [
    { label: "Blog", href: "/blogs" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="container py-3 flex items-center justify-between">
        <TransitionLink href="/" >
          <span className="text-xl font-bold text-foreground">
            <FaShapes />{" "}
          </span>
        </TransitionLink>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <TransitionLink key={item.label} href={item.href}>
              <span className="hidden sm:block text-foreground-secondary hover:text-foreground transition-colors">
                {item.label}
              </span>
            </TransitionLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
