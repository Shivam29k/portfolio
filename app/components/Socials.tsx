import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { cn } from '../utils/utils';


const socials = [
  {
    href: "https://github.com/Shivam29k",
    icon: FiGithub,
    title: "GitHub",
  },
  {
    href: "https://linkedin.com/in/shivamkrandom",
    icon: FiLinkedin,
    title: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/_shivam_k29",
    icon: FiInstagram,
    title: "Instagram",
  },
  {
    href: "https://x.com/ShivamKrandom",
    icon: FiTwitter,
    title: "Twitter",
  },
  {
    href: "mailto:skumarshivam50@gmail.com",
    icon: FiMail,
    title: "Email",
  },
];

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-6 py-4 px-4 justify-center items-center border w-fit rounded-full", className)}>
      {socials.map((social) => (

        <a
          key={social.title}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
