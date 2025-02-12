"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { FaShapes } from "react-icons/fa6";

export default function Navbar() {
  const navItems = ["Blog", "Projects", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          <FaShapes />{" "}
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="hidden sm:block text-foreground-secondary hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
