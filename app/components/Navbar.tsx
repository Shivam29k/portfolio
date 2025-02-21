"use client";

import ThemeToggle from "./ThemeToggle";
import { FaShapes } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { TransitionLink } from "../utils/TransitionLink";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
    <>
      <nav className="fixed w-full top-0 z-50 bg-background border-b border-border">
        <div className="container py-3 flex items-center justify-between">
          <TransitionLink href="/" >
            <span className="text-xl font-bold text-foreground">
              <FaShapes />{" "}
            </span>
          </TransitionLink>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              {navItems.map((item) => (
                <TransitionLink key={item.label} href={item.href}>
                  <span className="text-foreground-secondary hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </TransitionLink>
              ))}
              <button 
                onClick={scrollToContact}
                className="text-foreground-secondary hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <ThemeToggle />
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="sm:hidden text-foreground-secondary hover:text-foreground transition-colors"
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-background/60 backdrop-blur-sm z-50 transition-all duration-300 sm:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-[280px] bg-background border-l border-border transform transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <TransitionLink href="/" onClick={() => setIsSidebarOpen(false)}>
                <span className="text-xl font-bold text-foreground flex items-center gap-2">
                  <FaShapes /> Menu
                </span>
              </TransitionLink>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-background-secondary rounded-full transition-colors"
              >
                <IoMdClose size={24} className="text-foreground" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <TransitionLink 
                    key={item.label} 
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="block w-full p-3 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-all">
                      {item.label}
                    </span>
                  </TransitionLink>
                ))}
                <button 
                  onClick={(e) => {
                    setIsSidebarOpen(false);
                    scrollToContact(e);
                  }}
                  className="text-left w-full p-3 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-background-secondary transition-all"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground-secondary">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
