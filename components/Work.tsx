import React from "react";

import { ResumeCard } from "@/components/ResumeCard";
import { DATA } from "@/data/resume";

const Work = () => {
  return (
    <section id="work">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {DATA.work.map((work) => (
          <ResumeCard
            key={work.company}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
