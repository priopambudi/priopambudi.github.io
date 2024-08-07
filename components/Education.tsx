import React from "react";

import { ResumeCard } from "@/components/ResumeCard";
import { DATA } from "@/data/resume";

const Education = () => {
  return (
    <section id="education">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="flex flex-col gap-4">
        {DATA.education.map((education) => (
          <ResumeCard
            key={education.school}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end ?? "Present"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
