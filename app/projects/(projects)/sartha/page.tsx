"use client";
import Image from "next/image";
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
import Script from "next/script";

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
  "Designed a scalable infrastructure capable of handling 3K+ daily visits efficiently.",
];

export default function SarthaPage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      <Script src="https://fast.wistia.com/embed/medias/ptujav2p5m.jsonp" />
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" />
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

      {/* Video */}
      <div className="relative rounded-xl overflow-hidden pt-2">
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <div
              className="wistia_embed wistia_async_ptujav2p5m videoFoam=true"
              style={{ height: "100%", width: "100%", position: "relative" }}
            >
              <div
                className="wistia_swatch"
                style={{
                  height: "100%",
                  left: 0,
                  opacity: 0,
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <Image
                  src="https://fast.wistia.com/embed/medias/ptujav2p5m/swatch"
                  alt="Video Thumbnail"
                  width={500}
                  height={300}
                  quality={75}
                  style={{
                    filter: "blur(5px)",
                    height: "100%",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="text-sm md:text-base">
        <List facts={keyFeatures} />
      </div>

      {/* Key Metrics */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2 md:py-4">
        {[
          { value: "15K+", label: "Students Visits" },
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
    </main>
  );
}
