import React from "react";
import Reveal from "./Reveal";

import profile from "/port.jpg";

const Projects = () => {
  return (
    <section id="hero">
      <div className="container mx-auto xl:px-36 py-20">
        <Reveal>
          <h2 className="font-bold text-3xl">Projects</h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 mt-9">
          <Reveal>
            <a href="#" className="w-full">
              <div className="img-wrap h-[250px] overflow-hidden w-full rounded-[1rem]">
                <img
                  src={profile}
                  alt="Prio Pambudi"
                  className="object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-1">Dolts</h3>
              <p className="text-xs">
                A lightweight library in your local terminal!
              </p>
              <ul className="text-[9px] mt-2 flex items-center gap-2 flex-wrap">
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">Node.js</li>
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">
                  Filesystem
                </li>
              </ul>
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <a href="#" className="w-full">
              <div className="img-wrap h-[250px] overflow-hidden w-full rounded-[1rem]">
                <img
                  src={profile}
                  alt="Prio Pambudi"
                  className="object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-1">Dolts</h3>
              <p className="text-xs">
                A lightweight library in your local terminal!
              </p>
              <ul className="text-[9px] mt-2 flex items-center gap-2 flex-wrap">
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">Node.js</li>
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">
                  Filesystem
                </li>
              </ul>
            </a>
          </Reveal>
          <Reveal delay={0.75}>
            <a href="#" className="w-full">
              <div className="img-wrap h-[250px] overflow-hidden w-full rounded-[1rem]">
                <img
                  src={profile}
                  alt="Prio Pambudi"
                  className="object-cover w-full"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-1">Dolts</h3>
              <p className="text-xs">
                A lightweight library in your local terminal!
              </p>
              <ul className="text-[9px] mt-2 flex items-center gap-2 flex-wrap">
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">Node.js</li>
                <li className="bg-[#f2f2f2] py-1 px-2 rounded-sm">
                  Filesystem
                </li>
              </ul>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
