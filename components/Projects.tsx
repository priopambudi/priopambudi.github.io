import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { DATA } from "@/data/resume";

const Projects = () => {
  return (
    <section id="projects" className="pt-4">
      <p className="text-lg mb-4 text-center bg-primary w-max px-4 rounded-md text-secondary py-1 mx-auto">
        Projects
      </p>
      <h2 className="font-bold text-3xl md:text-5xl text-center">
        I loved building projects
      </h2>
      <p className="text-muted-foreground text-center mt-4">
        Here are few of my latest projects ⭐️
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        {DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            dates={project.dates}
            active={project.active}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
