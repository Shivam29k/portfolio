"use client";
import Link from "next/link";
import { JSX, useState } from "react";
import { FaReact, FaNodeJs, FaBook } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNginx,
  SiTailwindcss,
  SiExpo,
  SiRedux,
  SiDocker,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

interface Project {
  title: string;
  link: string;
  slug: string;
  description: string;
  stackIcons: JSX.Element[];
  features: string[];
  impact: string;
  previewImage: string;
}

export const notableProjects: Project[] = [
  {
    title: "Ghanchi Sandesh",
    link: "https://app.ghanchisandesh.live",
    slug: "ghanchi-sandesh",
    description:
      "A digital transformation of a 40-year-old community magazine, replacing physical distribution with an instant-access mobile app.",
    stackIcons: [
      <FaReact key="react" title="React Native" />,
      <SiExpo key="expo" title="Expo" />,
      <FaNodeJs key="node" title="Express.js" />,
      <SiMongodb key="mongodb" title="MongoDB" />,
      <SiTailwindcss key="tailwind" title="TailwindCSS" />,
      <SiNginx key="nginx" title="Nginx" />,
    ],
    features: [
      "Replaced physical distribution with a real-time digital platform, slashing delivery time from 7 days to instant access",
      "Push notifications increased user retention by 35%",
      "Admin dashboard for content updates, analytics, and subscriber management",
    ],
    impact: "3K+ Downloads • 1K+ MAU • 4.8+ Rating on PlayStore",
    previewImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=228&auto=format&fit=crop",
  },
  {
    title: "Sartha.in",
    link: "https://sartha.in",
    slug: "sartha",
    description:
      "Built Ed Tech Platform from ground up, which helps in the in college selection process in medical colleges, with 500+ blogs about colleges and 4 different types of paid services",
    stackIcons: [
      <SiNextdotjs key="nextjs" title="Next.js" />,
      <SiMongodb key="mongodb" title="MongoDB" />,
      <SiPrisma key="prisma" title="Prisma" />,
      <SiDocker key="docker" title="Docker" />,
      <SiRedux key="redux" title="Redux" />,
      <SiTailwindcss key="tailwind" title="TailwindCSS" />,
      <SiNginx key="nginx" title="Nginx" />,
      <FaBook key="ml" title="Linear Regression" />,
    ],
    features: [
      "College Prediction Engine: Analyzed 25K+ historical cutoff data points using linear regression",
      "Multi-Role Auth: Admins, editors, mentors, and students with granular permissions",
      "Automated Workflows: Self-hosted CI/CD reduced deployment time by 60%",
      "Scalability: Handled 3,000+ daily visits during peak admission season",
    ],
    impact:
      "automated 90% of the platform • processed 25k+ admission data • 3,000+ daily peak visits",
    previewImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mockopedia",
    link: "https://dev.mockopedia.com",
    slug: "mockopedia",
    description:
      "Led AI-driven LMS development adopted by Chitkara University; Architected LLM and RAG based bot inside the courses and sophisticated test proctoring system which disable tab and window switch.",
    stackIcons: [
      <SiNextdotjs key="nextjs" title="Next.js" />,
      <TbBrandOpenai key="llm" title="LLMs & RAG" />,
      <SiPostgresql key="postgres" title="PostgreSQL & pgvector" />,
      <SiPrisma key="prisma" title="Prisma" />,
      <SiRedux key="redux" title="Redux" />,
      <SiDocker key="docker" title="Docker" />,
      <SiNginx key="nginx" title="Nginx" />,
    ],
    features: [
      "AI Test Generation: One-click creation of questions/answers using LLMs",
      "Proctoring System: Detected tab/window switching and screen sharing",
      "RAG-Powered Chatbot: Course-specific AI assistant for instant query resolution",
      "PDF-to-Test Pipeline: Converted PDFs into structured tests with explanations",
    ],
    impact:
      "5K+ active students • 85% reduction in content creation time • 100% automated test creation",
    previewImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
];

function highlightNumbers(text: string) {
  return {
    __html: text.replace(
      /\d+[K+%]*/g,
      (match) => `<span class="text-primary font-medium">${match}</span>`
    ),
  };
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const imageHeight = 300;
    const projectIndex = notableProjects.findIndex((p) =>
      e.currentTarget.href.endsWith(p.slug)
    );

    let verticalOffset;
    if (projectIndex === 0) {
      verticalOffset = -30;
    } else if (projectIndex === notableProjects.length - 1) {
      verticalOffset = rect.height - imageHeight + 30;
    } else {
      verticalOffset = (rect.height - imageHeight) / 2;
    }

    setMousePosition({
      x: rect.right - 300,
      y: rect.top + verticalOffset,
    });
  };

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container relative">
        <h2 className="text-2xl font-bold mb-6 md:mb-8">Notable Work</h2>

        {hoveredProject && (
          <div
            className="fixed pointer-events-none hidden md:block"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              width: "500px",
              height: "300px",
              zIndex: 50,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src={hoveredProject}
              alt="Project preview"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        )}

        {/* Notable Projects */}
        <div className="flex flex-col border-t border-border">
          {notableProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className="border-b border-border py-6 md:py-10 relative group custom-cursor"
              onMouseEnter={() => setHoveredProject(project.previewImage)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={handleMouseMove}
            >
              <div className="max-w-full md:max-w-[60%] space-y-3">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium">{project.title}</h3>

                {/* Description */}
                <p className="text-sm md:text-base text-foreground-secondary">
                  {project.description}
                </p>

                {/* Impact with numbers highlighted */}
                <p
                  className="text-sm md:text-base text-foreground-secondary"
                  dangerouslySetInnerHTML={highlightNumbers(project.impact)}
                />

                {/* Stack Icons */}
                <div className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl text-foreground-secondary pt-2 flex-wrap">
                  {project.stackIcons}
                </div>
              </div>
            </Link>
          ))}

          <Link
            href="/projects"
            className="text-sm md:text-base text-foreground-secondary hover:text-accent-hover pt-8"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
