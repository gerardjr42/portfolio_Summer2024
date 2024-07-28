import React from "react";
import Project from "../components/Project";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <h2 className="prose mt-24 font-serif text-6xl font-normal text-[#f5e0bf]">
        Projects
      </h2>
      <section id="projects" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                url={project.url}
                thumbnail={project.thumbnail}
                info={project.info}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
