"use client";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiOpenai,
  SiWebrtc,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import BreadCrums from "@/app/components/BreadCrums";
import Stack from "@/app/components/Stack";
import List from "@/app/components/List";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "OpenAI", icon: SiOpenai },
  { name: "WebRTC", icon: SiWebrtc },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: SiAmazon },
  { name: "GitHub Actions", icon: SiGithub },
];

const keyFeatures = [
  "Built an AI-powered Learning Management System with advanced proctoring capabilities, serving 5K+ students at Chitkara University.",
  "Implemented automated test generation using LLMs, reducing content creation time by 65%.",
  "Developed a RAG-based chatbot for instant query resolution, trained on course-specific materials.",
  "Created real-time proctoring system with 98% accuracy in detecting violations using ML algorithms.",
  "Designed scalable architecture using Docker and Kubernetes for handling concurrent test sessions.",
  "Integrated PDF processing pipeline for automated conversion of study materials into structured tests."
];

export default function MockopediaPage() {
  return (
    <main className="min-h-screen container space-y-4 md:space-y-6 py-4 md:py-6">
      {/* Navigation */}
      <div className="">
        <BreadCrums path={"projects/mockopedia"} />
      </div>

      {/* Project Header */}
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-xl md:text-3xl font-bold text-foreground">
          Mockopedia
        </h1>
        <a
          href="https://dev.mockopedia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors text-sm md:text-base break-words"
        >
          https://dev.mockopedia.com
        </a>
      </div>

      <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
        An AI-Driven Learning Management System with Advanced Proctoring capabilities.
        The platform revolutionizes educational assessment through automated test generation,
        smart proctoring, and intelligent student assistance.
      </p>

      <div className="overflow-x-auto -mx-4 px-4 md:overflow-visible md:px-0">
        <Stack technologies={technologies} />
      </div>

      {/* Key Features */}
      <div className="text-sm md:text-base">
        <List facts={keyFeatures} />
      </div>

      {/* Key Metrics */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2 md:py-4">
        {[
          { value: "5K+", label: "Active Students" },
          { value: "65%", label: "Time Saved" },
          { value: "98%", label: "Proctoring Accuracy" },
          { value: "1M+", label: "Questions Generated" },
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