import Image from "next/image";
import pfp from "@/public/pfp-bg.png";
import List from "./List";
import Socials from "./Socials";
const facts = [
  "Building cool stuff on the internet is my thing.",
  "Always curious, always learning—got big goals to chase.",
  "Mountains? Yeah, that's my kind of trip.",
  "Love a good game of chess—let's play!",
];

export default function HeroSection() {
  return (
    <section className="mt-8 md:mt-16 pt-12 md:pt-20 flex items-center">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-4/6">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
                Hello! I&apos;m Shivam{" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary leading-relaxed text-center md:text-left">
                Self-taught developer and Computer Science student with an AI/ML
                minor. Building dbai.live and itsyour.space, and I&apos;ve
                helped two startups turn their ideas into real products.
              </p>
            </div>

            <List facts={facts} />

            <div className="flex gap-6 pt-8 justify-center md:justify-start">
              <a
                href="/projects"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Resume
              </a>
            </div>

            {/* <Socials className="" /> */}
          </div>

          <div className="flex flex-col items-center  relative  md:w-2/6  h-full mb-6">
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-accent">
              <Image
                src={pfp}
                alt="Profile picture"
                className="object-cover hover:scale-105 transition-transform duration-300"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
            <div className="pt-6 mx-auto">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
