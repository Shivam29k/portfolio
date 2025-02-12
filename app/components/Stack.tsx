import React from "react";
import { cn } from "../utils/utils";

interface Technology {
  name: string;
  icon: React.ElementType;
}

function Stack({
  technologies,
  showIcon = true,
  showName = true,
  showBg = true,
}: {
  technologies: Technology[];
  showIcon?: boolean;
  showName?: boolean;
  showBg?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className={cn(
            "px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-foreground-secondary text-xs md:text-sm flex items-center gap-1.5 md:gap-2",
            showBg && "bg-background-secondary"
          )}
        >
          {showIcon && <tech.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
          {showName && tech.name}
        </span>
      ))}
    </div>
  );
}

export default Stack;
