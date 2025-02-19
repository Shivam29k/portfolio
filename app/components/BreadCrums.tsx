import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { TransitionLink } from "../utils/TransitionLink";

interface BreadCrumbsProps {
  path: string;
}

function BreadCrumbs({ path }: BreadCrumbsProps) {
  const pathSegments = path.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 md:space-x-2 py-2 text-sm md:text-base overflow-x-auto whitespace-nowrap">
      <TransitionLink
        href="/"
        className="text-foreground-secondary hover:text-primary-hover transition-colors flex items-center gap-2"
      >
        Shivam
      </TransitionLink>

      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return (
          <React.Fragment key={href}>
            <HiChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <TransitionLink
              href={href}
              className="text-foreground-secondary hover:text-primary-hover transition-colors capitalize flex-shrink-0"
            >
              {segment.replace(/-/g, " ")}
            </TransitionLink>
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default BreadCrumbs;
