import React from "react";

function List({ facts }: { facts: string[] }) {
  return (
    <ul className="space-y-1 text-foreground-secondary pt-4 md:pt-6">
      {facts.map((fact, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-accent flex-shrink-0 text-lg -translate-y-1">▹</span>
          <span className="text-sm md:text-base leading-relaxed">{fact}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
