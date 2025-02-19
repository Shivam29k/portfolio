import React from "react";
import BreadCrumbs from "../components/BreadCrums";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Shivam Kumar",
  description: "Projects by Shivam Kumar",
};

export default function Projects() {

  return (
    <div className="container py-6">
      <BreadCrumbs path="projects" />
    </div>
  );
}
