import React from "react";
import Reveal from "./Reveal";
import data from "../data.json";

const Projects = () => {
  return (
    <section id="hero">
      <div className="container mx-auto xl:px-36 py-20">
        <Reveal>
          <h2 className="font-bold text-3xl">Latest Projects</h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 mt-9">
          {data.projects.map((project, index) => (
            <Reveal key={project} delay={(index + 1) * 0.25} width="100%">
              <a href="#" className="w-full d-block">
                <div className="img-wrap h-[250px] overflow-hidden w-full rounded-[1rem] flex">
                  <img
                    src={project.img}
                    alt="Prio Pambudi"
                    className="object-cover w-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mt-4 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs">{project.description}</p>
                <ul className="text-[9px] mt-2 flex items-center gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <li
                      className="bg-[#f2f2f2] py-1 px-2 rounded-sm"
                      key={tech}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
