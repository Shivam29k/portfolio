"use client";

import ThemeToggle from "./ThemeToggle";
import { FaShapes } from "react-icons/fa6";
import { TransitionLink } from "../utils/TransitionLink";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  
  const navItems = [
    { label: "Blog", href: "/blogs" },
    { label: "Projects", href: "/projects" },
  ];

  const scrollToContact = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          <button 
            onClick={scrollToContact}
            className="hidden sm:block text-foreground-secondary hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
