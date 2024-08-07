import React from "react";
import IconCloud from "./ui/CloudIcons";
import Button from "./ui/Button";

const skillsicon = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "vuedotjs",
  "recoil",
  "redux",
  "nuxtdotjs",
];
const skills = [
  "Typescript",
  "Javascript",
  "React",
  "HTML5",
  "CSS3",
  "Next.js",
  "Recoil",
  "Redux",
  "Jest",
  "Git",
  "Github",
  "Gitlab",
  "VSCode",
  "Vue.js",
  "Nuxt.js",
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <IconCloud iconSlugs={skillsicon} />
        </div>
        <div className="w-full md:w-1/2 md:pt-10">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <Button key={skill}>{skill}</Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
