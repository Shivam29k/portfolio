"use client";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiAmazon,
  SiReact,
  SiPrisma,
    SiNginx,
  SiGithub,
  SiTailwindcss,
  SiRedux,
  SiAuth0,
} from "react-icons/si";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Auth.js", icon: SiAuth0 },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Nginx", icon: SiNginx },
  { name: "EC2", icon: SiAmazon },
  { name: "GitHub Actions", icon: SiGithub },
];

const keyFeatures = [
  "Developed an EdTech platform from scratch, streamlining the college selection process for medical aspirants, featuring 500+ blogs and four distinct paid services.",
  "Implemented a multi-role authentication system with granular permissions, enabling role-based dashboards for Admins, Editors, Mentors, Counselors, Students, and business vertical leads.",
  "Automated workflows to reduce manual effort by 80%, including digital asset delivery, order tracking, and other operational processes.",
  "Integrated a secure payment gateway, adhering to industry-standard security protocols.",
  "Self-hosted on a VPS with a CI/CD pipeline, cutting deployment time and efforts by 90%.",
  "Designed a scalable infrastructure capable of handling 3K+ daily visits efficiently."
];


export default function SarthaPage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      {/* Navigation */}
      <div className="">
        <BreadCrums path={"projects/sartha"} />
      </div>

      {/* Project Header */}
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-3xl font-bold text-foreground">
          Sartha
        </h1>
        <a
          href="https://sartha.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words"
        >
          https://sartha.in
        </a>
      </div>
      <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
        Made a Medical College Counseling Platform from idea to production in 2
        months. It helps students make informed decisions about their career
        through advanced analytics, college prediction algorithm, and
        personalized guidance by the college counsellors and alumnis.
      </p>

      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
        <Stack technologies={technologies} />
      </div>

      {/* Key Features */}
      <div className="text-sm md:text-base">
        <List facts={keyFeatures} />
      </div>

      {/* Platform Screenshots */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          alt="Sartha Platform"
          fill
          className="object-cover"
        />
      </div>

      {/* Key Metrics */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2 md:py-4">
        {[
          { value: "15K+", label: "Students Guided" },
          { value: "70%", label: "Cost Reduction" },
          { value: "3K+", label: "Peak Daily Visits" },
          { value: "25K+", label: "Data Points Analyzed" },
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

      {/* CTA */}
      <div className="flex justify-center gap-6 py-8">
        <a
          href="https://sartha.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
        >
          Visit Platform
        </a>
        <Link
          href="/#contact"
          className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
