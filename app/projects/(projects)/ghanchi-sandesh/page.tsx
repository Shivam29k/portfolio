"use client";
import Image from "next/image";
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiTailwindcss,
  SiNginx,
} from "react-icons/si";

import image0 from "@/public/ghanchi-sandesh/image0.png";
import image1 from "@/public/ghanchi-sandesh/image1.png";
import image2 from "@/public/ghanchi-sandesh/image2.png";
import image3 from "@/public/ghanchi-sandesh/image3.png";
import image4 from "@/public/ghanchi-sandesh/image4.png";
import BreadCrums from "@/app/components/BreadCrums";
import Carousel from "@/app/components/Carousel";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
  { name: "React Native", icon: SiReact },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Expo", icon: SiExpo },
  { name: "React", icon: SiReact },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Nginx", icon: SiNginx },
];

const keyFeatures = [
  "Real-time digital platform replacing physical distribution",
  "Client side caching for faster load times",
  "Push notifications system with 35% increase in retention",
  "Admin dashboard for content management",
  "Analytics and subscriber tracking",
];

export default function GhanchiSandeshPage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      {/* Navigation */}
      <div className="">
        <BreadCrums path={"projects/ghanchi-sandesh"} />
      </div>

      {/* Project Header */}
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-3xl font-bold text-foreground">
          Ghanchi Sandesh
        </h1>
        <a
          href="https://app.ghanchisandesh.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words"
        >
          https://app.ghanchisandesh.live
        </a>
      </div>
      <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
        A digital transformation of a 40-year-old community magazine into a
        modern mobile platform, serving 3,000+ readers with instant access to
        cultural content.
      </p>

      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
        <Stack technologies={technologies} />
      </div>

      {/* Key Features */}
      <div className="text-sm md:text-base">
        <List facts={keyFeatures} />
      </div>

      {/* App Preview Carousel */}
      <div className="-mx-4 md:mx-0 px-4 md:px-0">
        <Carousel>
          {[image0, image1, image2, image3, image4].map((src, i) => (
            <div
              key={i}
              className="flex-[0_0_60%] md:flex-[0_0_30%] relative h-[400px] md:h-[500px] px-4 md:px-2"
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Ghanchi Sandesh App Screenshot ${i + 1}`}
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  quality={95}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Key Metrics */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-2 md:py-4">
        {[
          { value: "3,000+", label: "Downloads" },
          { value: "1,000+", label: "Monthly Users" },
          { value: "4.8+", label: "App Rating" },
        ].map((metric, index) => (
          <li
            key={index}
            className="p-4 md:p-6 rounded-xl bg-background-secondary"
          >
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {metric.value}
            </div>
            <div className="text-sm md:text-base text-foreground-secondary mt-1">
              {metric.label}
            </div>
          </li>
        ))}
      </ul>

    </main>
  );
}
